import { account, db, publicClient, walletClient } from '@src/config';
import { IReq, IRes } from './types/express/misc';
import { Address, Hex, isAddress } from 'viem';
import MomentNFT from '@src/constants/MomentNFT';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

async function add(
  req: IReq<{
    eventId: string;
    name: string;
    venueImageURI: string;
    participantsLimit: bigint; // 5
    rewardToken: string;
    totalReward: bigint;
  }>,
  res: IRes
) {
  if (!isAddress(req.body.rewardToken))
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .send('Invalid reward token address');
  const event = await db.event.findUnique({
    where: { id: req.body.eventId },
  });
  if (!event)
    return res.status(HttpStatusCodes.BAD_REQUEST).send('Event not found');

  const deployTxHash = await walletClient.deployContract({
    abi: MomentNFT.abi,
    bytecode: MomentNFT.bytecode as Hex,
    args: [
      req.body.participantsLimit,
      account.address,
      req.body.rewardToken,
      req.body.totalReward,
    ],
  });

  const receipt = await publicClient.waitForTransactionReceipt({
    hash: deployTxHash,
  });

  if (!receipt.contractAddress)
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .send('Contract address not found');

  const contractAddress = receipt.contractAddress;

  const bounty = await db.bounty.create({
    data: {
      name: req.body.name,
      venueImageURI: req.body.venueImageURI,
      contractAddress,
      eventId: req.body.eventId,
    },
  });

  return res
    .status(HttpStatusCodes.CREATED)
    .json({ bountyId: bounty.id, contractAddress });
}

async function moments(req: IReq<{ bountyId: string }>, res: IRes) {
  const bounty = await db.bounty.findUnique({
    where: { id: req.params.bountyId },
  });
  if (!bounty)
    return res.status(HttpStatusCodes.BAD_REQUEST).send('Bounty not found');

  const moments = await db.moment.findMany({
    where: { bountyId: req.params.bountyId },
  });

  return res.status(HttpStatusCodes.OK).json({ moments });
}

async function leaderboard(req: IReq<{ bountyId: string }>, res: IRes) {
  const bounty = await db.bounty.findUnique({
    where: { id: req.params.bountyId },
  });
  if (!bounty)
    return res.status(HttpStatusCodes.BAD_REQUEST).send('Bounty not found');

  const leaderboard = await db.moment.findMany({
    where: { bountyId: req.params.bountyId },
    orderBy: { score: 'desc' },
  });

  return res.status(HttpStatusCodes.OK).json({ sortedMoments: leaderboard });
}

export default {
  add,
  moments,
  leaderboard,
};

import { account, db, publicClient, walletClient } from '@src/config';
import { IReq, IRes } from './types/express/misc';
import { isAddress } from 'viem';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import MomentFactory from '@src/constants/MomentFactory';

async function add(
  req: IReq<{
    eventId: string;
    name: string;
    venueImageURI: string;
    participantsLimit: bigint;
    rewardToken: string;
    totalReward: bigint;
    tag: string;
    userWalletAddress: string;
  }>,
  res: IRes
) {
  if (
    !isAddress(req.body.rewardToken) ||
    !isAddress(req.body.userWalletAddress)
  )
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .send('Invalid reward token address');
  const event = await db.event.findUnique({
    where: { id: req.body.eventId },
  });
  if (!event)
    return res.status(HttpStatusCodes.BAD_REQUEST).send('Event not found');

  const { result: momentNFTAddress, request } =
    await publicClient.simulateContract({
      abi: MomentFactory.abi,
      address: MomentFactory.address,
      functionName: 'createBounty',
      args: [
        req.body.participantsLimit,
        account.address,
        req.body.rewardToken,
        req.body.totalReward,
        req.body.userWalletAddress,
      ],
    });
  await walletClient.writeContract(request);

  const bounty = await db.bounty.create({
    data: {
      name: req.body.name,
      venueImageURI: req.body.venueImageURI,
      contractAddress: momentNFTAddress,
      eventId: req.body.eventId,
      tag: req.body.tag,
      participantsLimit: req.body.participantsLimit,
      rewardToken: req.body.rewardToken,
      totalReward: req.body.totalReward,
    },
  });

  return res
    .status(HttpStatusCodes.CREATED)
    .json({ bountyId: bounty.id, momentNFTAddress });
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

async function get(req: IReq<{ bountyId: string }>, res: IRes) {
  const bounty = await db.bounty.findUnique({
    where: {
      id: req.params.bountyId,
    },
  });

  if (!bounty) {
    return res
      .status(HttpStatusCodes.NOT_FOUND)
      .json({ message: 'Bounty not found' });
  }

  return res
    .status(HttpStatusCodes.OK)
    .json({
      ...bounty,
      totalReward: bounty.totalReward.toString(),
      participantsLimit: bounty.participantsLimit.toString(),
    });
}

async function all(req: IReq, res: IRes) {
  const allBounties = await db.bounty.findMany();
  return res.status(HttpStatusCodes.OK).json(allBounties);
}

export default {
  add,
  moments,
  leaderboard,
  get,
  all,
};

import { db, walletClient } from '@src/config';
import { IReq, IRes } from './types/express/misc';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { randomInt } from 'crypto';
import lighthouse from '@lighthouse-web3/sdk';
import EnvVars from '@src/constants/EnvVars';
import fs from 'fs';
import { createNFTJson } from '@src/util/misc';
import MomentNFT from '@src/constants/MomentNFT';
import { Address, isAddress } from 'viem';

async function add(
  req: IReq<{
    bountyId: string;
    momentImageEncoded: string; // base64 encoded image
    walletAddress: string;
  }>,
  res: IRes
) {
  const { bountyId, momentImageEncoded, walletAddress } = req.body;

  if (!isAddress(walletAddress)) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ message: 'Invalid wallet address' });
  }
  const bounty = await db.bounty.findUnique({
    where: {
      id: bountyId,
    },
  });
  if (!bounty) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ message: 'Bounty not found' });
  }

  // calculate score
  const score = randomInt(0, 10000);

  const filePath = createNFTJson(momentImageEncoded, score);
  // deploy to filecoin
  const filecoinResponse = await lighthouse.upload(
    filePath,
    EnvVars.Blockchain.LighthouseApiKey
  );

  // remove temp file
  await fs.promises.rm(filePath);

  const imageURI =
    'https://gateway.lighthouse.storage/ipfs/' + filecoinResponse.data.Hash;

  // mint NFT
  await walletClient.writeContract({
    abi: MomentNFT.abi,
    address: bounty.contractAddress as Address,
    functionName: 'mint',
    args: [walletAddress, imageURI, BigInt(score)],
  });

  // save to database
  const moment = await db.moment.create({
    data: {
      bountyId,
      imageURI,
      score,
      walletAddress,
    },
  });

  return res.status(HttpStatusCodes.CREATED).json({
    momentId: moment.id,
    jsonURI: imageURI,
    score,
    walletAddress,
  });
}

async function get(req: IReq<{ momentId: string }>, res: IRes) {
  const { momentId } = req.params;

  const moment = await db.moment.findUnique({
    where: {
      id: momentId,
    },
  });

  if (!moment) {
    return res
      .status(HttpStatusCodes.NOT_FOUND)
      .json({ message: 'Moment not found' });
  }

  return res.status(HttpStatusCodes.OK).json(moment);
}

export default {
  add,
  get,
};

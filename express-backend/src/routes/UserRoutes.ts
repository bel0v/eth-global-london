import { db } from '@src/config';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import { getNoun } from '@src/util/misc';
import { Address, isAddress } from 'viem';

async function getBounties(req: IReq<{ walletAddress: string }>, res: IRes) {
  const momentIds = await db.moment
    .findMany({
      where: {
        walletAddress: req.params.walletAddress,
      },
      select: {
        id: true,
      },
    })
    .then((moments) => moments.map((moment) => moment.id));

  const bounties = await db.bounty.findMany({
    where: {
      moments: {
        some: {
          id: {
            in: momentIds,
          },
        },
      },
    },
  });

  return res.status(HttpStatusCodes.OK).json({ bounties });
}

async function getAvatar(req: IReq<{ walletAddress: string }>, res: IRes) {
  if (!isAddress(req.params.walletAddress)) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ message: 'Invalid address' });
  }
  const avatar = getNoun(req.params.walletAddress);

  return res.status(HttpStatusCodes.OK).json({ avatar });
}

export default {
  getBounties,
  getAvatar,
};

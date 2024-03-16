import { db } from '@src/config';
import { IReq, IRes } from './types/express/misc';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

async function add(req: IReq<{ logoImageURI: string }>, res: IRes) {
  const eventId = await db.event.create({
    data: { logoImageURI: req.body.logoImageURI },
  });

  return res.status(HttpStatusCodes.CREATED).json({ eventId });
}

async function all(req: IReq, res: IRes) {
  const events = await db.event.findMany();

  return res.status(HttpStatusCodes.OK).json({ events });
}

async function bounties(req: IReq<{ eventId: string }>, res: IRes) {
  const bounties = await db.bounty.findMany({
    where: { eventId: req.params.eventId },
  });

  return res.status(HttpStatusCodes.OK).json({ bounties });
}

export default { add, all, bounties };

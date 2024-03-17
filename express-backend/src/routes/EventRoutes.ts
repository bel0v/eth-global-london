import { db } from '@src/config';
import { IReq, IRes } from './types/express/misc';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

async function add(
  req: IReq<{
    eventImage: string;
    organizerImage: string;
    date: string;
    teamIcons?: string[];
  }>,
  res: IRes
) {
  const event = await db.event.create({
    data: {
      eventImage: req.body.eventImage,
      organizerImage: req.body.organizerImage,
      teamIcons: req.body.teamIcons,
      date: new Date(req.body.date),
    },
  });

  return res.status(HttpStatusCodes.CREATED).json({ eventId: event.id });
}

async function all(req: IReq, res: IRes) {
  const events = await db.event.findMany();

  return res.status(HttpStatusCodes.OK).json({ events });
}

async function get(req: IReq<{ eventId: string }>, res: IRes) {
  const event = await db.event.findUnique({
    where: {
      id: req.params.eventId,
    },
  });

  if (!event) {
    return res
      .status(HttpStatusCodes.NOT_FOUND)
      .json({ message: 'Event not found' });
  }

  return res.status(HttpStatusCodes.OK).json(event);
}

async function bounties(req: IReq<{ eventId: string }>, res: IRes) {
  const bounties = await db.bounty.findMany({
    where: { eventId: req.params.eventId },
  });

  return res.status(HttpStatusCodes.OK).json({ bounties });
}

export default { add, all, get, bounties };

import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import EventRoutes from './EventRoutes';
import BountyRoutes from './BountyRoutes';
import MomentRoutes from './MomentRoutes';
// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

const eventRouter = Router();
const bountyRouter = Router();
const momentRouter = Router();

eventRouter.post(
  Paths.Event.Add,
  validate(
    ['eventImage', 'string', 'body'],
    ['organizerImage', 'string', 'body']
  ),
  EventRoutes.add
);
eventRouter.get(Paths.Event.Get, EventRoutes.all);
eventRouter.get(
  Paths.Event.Bounties,
  validate(['eventId', 'string', 'params']),
  EventRoutes.bounties
);

// TODO: add stronger validate
bountyRouter.post(Paths.Bounty.Add, BountyRoutes.add);
bountyRouter.get(
  Paths.Bounty.Moments,
  validate(['bountyId', 'string', 'params']),
  BountyRoutes.moments
);
bountyRouter.get(
  Paths.Bounty.Leaderboard,
  validate(['bountyId', 'string', 'params']),
  BountyRoutes.leaderboard
);
bountyRouter.get(
  Paths.Bounty.Get,
  validate(['bountyId', 'string', 'params']),
  BountyRoutes.get
);

momentRouter.post(
  Paths.Moment.Add,
  validate(
    ['bountyId', 'string', 'body'],
    ['momentImageEncoded', 'string', 'body']
  ),
  MomentRoutes.add
);
momentRouter.get(
  Paths.Moment.Get,
  validate(['momentId', 'string', 'params']),
  MomentRoutes.get
);

apiRouter.use(Paths.Event.Base, eventRouter);
apiRouter.use(Paths.Bounty.Base, bountyRouter);
apiRouter.use(Paths.Moment.Base, momentRouter);

// **** Export default **** //

export default apiRouter;

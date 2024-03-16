import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import EventRoutes from './EventRoutes';
import BountyRoutes from './BountyRoutes';
// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

const eventRouter = Router();
const bountyRouter = Router();
const momentRouter = Router();

eventRouter.post(Paths.Event.Add, validate(['logoImageURI', 'string', 'body']));
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

apiRouter.use(Paths.Event.Base, eventRouter);
apiRouter.use(Paths.Bounty.Base, bountyRouter);
apiRouter.use(Paths.Moment.Base, momentRouter);

// **** Export default **** //

export default apiRouter;

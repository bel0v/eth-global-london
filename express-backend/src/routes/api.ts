import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import EventRoutes from './EventRoutes';
import BountyRoutes from './BountyRoutes';
import MomentRoutes from './MomentRoutes';
import UserRoutes from './UserRoutes';

const apiRouter = Router(),
  validate = jetValidator();

const userRouter = Router();
const eventRouter = Router();
const bountyRouter = Router();
const momentRouter = Router();

userRouter.get(
  Paths.User.GetAvatar,
  validate(['walletAddress', 'string', 'params']),
  UserRoutes.getAvatar
);
userRouter.get(
  Paths.User.GetBounties,
  validate(['walletAddress', 'string', 'params']),
  UserRoutes.getBounties
);

eventRouter.post(
  Paths.Event.Add,
  validate(
    ['eventImage', 'string', 'body'],
    ['organizerImage', 'string', 'body']
  ),
  EventRoutes.add
);
eventRouter.get(Paths.Event.All, EventRoutes.all);
eventRouter.get(
  Paths.Event.Get,
  validate(['eventId', 'string', 'params']),
  EventRoutes.get
);
eventRouter.get(
  Paths.Event.Bounties,
  validate(['eventId', 'string', 'params']),
  EventRoutes.bounties
);

// TODO: add stronger validate
bountyRouter.post(Paths.Bounty.Add, BountyRoutes.add);
bountyRouter.get(Paths.Bounty.All, BountyRoutes.all);
bountyRouter.get(
  Paths.Bounty.Get,
  validate(['bountyId', 'string', 'params']),
  BountyRoutes.get
);
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

momentRouter.post(
  Paths.Moment.Add,
  validate(
    ['bountyId', 'string', 'body'],
    ['momentImageEncoded', 'string', 'body'],
    ['walletAddress', 'string', 'body']
  ),
  MomentRoutes.add
);
momentRouter.get(
  Paths.Moment.Get,
  validate(['momentId', 'string', 'params']),
  MomentRoutes.get
);

apiRouter.use(Paths.User.Base, userRouter);
apiRouter.use(Paths.Event.Base, eventRouter);
apiRouter.use(Paths.Bounty.Base, bountyRouter);
apiRouter.use(Paths.Moment.Base, momentRouter);

export default apiRouter;

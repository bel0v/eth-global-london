/**
 * Express router paths go here.
 */

export default {
  Base: '/api',
  User: {
    Base: '/user',
    GetBounties: '/:walletAddress/bounties',
    GetAvatar: '/:walletAddress/avatar',
  },
  Event: {
    Base: '/event',
    Add: '/add',
    Get: '/all',
    Bounties: '/:eventId/bounties',
  },
  Bounty: {
    Base: '/bounty',
    Add: '/add',
    All: '/all',
    Get: '/:bountyId',
    Moments: '/:bountyId/moments',
    Leaderboard: '/:bountyId/leaderboard',
  },
  Moment: {
    Base: '/moment',
    Add: '/add',
    Get: '/:momentId',
  },
} as const;

/**
 * Express router paths go here.
 */

export default {
  Base: '/api',
  Event: {
    Base: '/event',
    Add: '/add',
    Get: '/all',
    Bounties: '/:eventId/bounties',
  },
  Bounty: {
    Base: '/bounty',
    Add: '/add',
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

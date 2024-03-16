import Event1Image from '../images/events/event-1.jpg'
import Event2Image from '../images/events/event-2.jpg'
import Event3Image from '../images/events/event-3.jpg'
import Event4Image from '../images/events/event-4.jpg'
import Event5Image from '../images/events/event-5.jpg'
import RewardApeImage from '../images/events/reward-ape.jpg'
import RewardEthImage from '../images/events/reward-eth.jpg'
import RewardFanImage from '../images/events/reward-fan.jpg'
import BountyBg1 from '../images/events/bounty-bg-1.jpg'
// import TokenApeImage from '../images/tokens/token-ape.jpg'
import TokenUSDCImage from '../images/tokens/token-usdc.jpg'
import TokenManImage from '../images/tokens/token-man.jpg'
import EventIcon1 from '../images/events/event-icon-1.png'
import EventIcon2 from '../images/events/event-icon-2.png'

import { Event, EventBounty } from './types'

export const eventBountiesMock: EventBounty[] = [
  {
    eventId: '1',
    id: '11',
    name: 'Manchester first goal',
    date: '03/17/24',
    reward: {
      token: '$USDC',
      value: '200.1',
      icon: TokenUSDCImage,
    },
    moments: [
      {
        image: '',
        score: 0.3,
        userAddress: 'aaaabbb',
      },
      {
        image: '',
        score: 0.2,
        userAddress: 'cccddd',
      },
    ],
    participantsLimit: 5,
    tag: 'goal',
    background: BountyBg1,
  },
  {
    eventId: '1',
    id: '12',
    name: 'Julian Álvarez - Corner Kick',
    tag: 'corner-kick',
    date: '03/17/24',
    reward: {
      token: '$MAN',
      value: '500',
      icon: TokenManImage,
    },
    moments: [
      {
        image: '',
        score: 0.3,
        userAddress: 'aaaabbb',
      },
      {
        image: '',
        score: 0.4,
        userAddress: 'cccddd',
      },
      {
        image: '',
        score: 0.4,
        userAddress: 'vdfvdfv',
      },
      {
        image: '',
        score: 0.4,
        userAddress: 'dfvdfvdfvdfvdfv',
      },
      {
        image: '',
        score: 0.4,
        userAddress: 'dfvdfvklmlkm',
      },
    ],
    participantsLimit: 5,
    background: undefined,
  },
]

export const eventsMock: Event[] = [
  {
    id: '1',
    image: Event1Image,
    icons: [EventIcon1, EventIcon2],
    organiserIcon: RewardFanImage,
    bounties: eventBountiesMock,
  },
  {
    id: '2',
    image: Event2Image,
    icons: [EventIcon1, EventIcon2],
    organiserIcon: RewardEthImage,
    bounties: [],
  },
  {
    id: '3',
    image: Event3Image,
    organiserIcon: RewardApeImage,
    bounties: [],
  },
  {
    id: '4',
    image: Event4Image,
    title: 'Cats N Roses',
    date: '07/21/2024',
    bounties: [],
  },
  {
    id: '5',
    image: Event5Image,
    title: 'Lenny Kravitz Concert',
    date: '07/21/2024',
    bounties: [],
  },
]

export type Event = {
  id: string
  eventImage: string
  organizerImage?: string
  date: string
  title?: string
  icons?: string[]
}

export type EventBounty = {
  id: string
  eventId: string
  name: string
  // date: string // todo:take from event
  venueImageURI?: string
  tag: TagName //
  rewardToken: string //token address
  totalReward: string
  participantsLimit: number
}

export type Moment = {
  image: string
  userAddress: string
  score: number
}

export type WalletData = {
  address: string
  avatar: string
  bounties: EventBounty[]
}

export type EveryTagName = [
  'area',
  'booth',
  'corner-kick',
  'dj',
  'drinks',
  'entry',
  'food',
  'foul',
  'goal',
  'goal-kick',
  'merch',
  'offside',
  'player',
  'speaker'
]

export type TagName = EveryTagName[number]

export type Event = {
  id: string
  image: string
  rewardIcon?: string
  title?: string
  date?: string
  icons?: string[]
  bounties: EventBounty[]
}

export type EventBounty = {
  id: string
  title: string
  date: string
  background?: string
  tag?: TagName
  reward: {
    token: string
    value: string //number string
    icon: string
  }
  participants: number
  participantsLimit: number
  isParticipating: boolean
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

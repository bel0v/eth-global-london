import styled from 'styled-components'
import { EventBounty, Moment } from '../data/types'
import GlassesIconRed from '../images/icons/icon-glasses-red.png'
import GlassesIconGreen from '../images/icons/icon-glasses-green.png'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { useQuery } from '@tanstack/react-query'
import { useFetch } from '../hooks/use-fetch'

const EventParticipants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`
const IconWrapper = styled.div`
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
  font-size: var(--font-size-xs);
`

const Icon = styled.img`
  width: 40px;
  position: relative;
  height: 16px;
  object-fit: cover;
`

export const BountyParticipants = ({ eventBounty }: { eventBounty: EventBounty }) => {
  const { primaryWallet } = useDynamicContext()

  const fetch = useFetch()
  const eventBountyMoments = useQuery({
    queryKey: ['event-bounty', eventBounty.id, 'moments'],
    queryFn: () => {
      return fetch.get(`/bounty/${eventBounty.id}/moments`).json<{ moments: Moment[] }>()
    },
    select: (data) => data.moments,
  })

  if (eventBountyMoments.isPending || eventBountyMoments.isError) {
    return null
  }

  const moments = eventBountyMoments.data

  const isComplete = moments.length === eventBounty.participantsLimit

  const isParticipating = moments.some(
    (moment) => moment.walletAddress === primaryWallet?.address
  )

  return (
    <EventParticipants>
      <div>{isParticipating ? "You're in!!!" : 'Fans participating'}</div>
      <IconWrapper>
        {isParticipating ? (
          <Icon alt="" src={GlassesIconGreen} />
        ) : (
          <Icon alt="" src={GlassesIconRed} />
        )}
        {!isComplete ? (
          <>
            <div>{moments.length} of </div>
            <b>{eventBounty.participantsLimit}</b>
          </>
        ) : (
          <b>{moments.length}</b>
        )}
      </IconWrapper>
    </EventParticipants>
  )
}

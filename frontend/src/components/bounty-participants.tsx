import styled from 'styled-components'
import { EventBounty } from '../data/types'
import GlassesIconRed from '../images/icons/icon-glasses-red.png'
import GlassesIconGreen from '../images/icons/icon-glasses-green.png'

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
  const isComplete = eventBounty.participants === eventBounty.participantsLimit

  return (
    <EventParticipants>
      <div>{eventBounty.isParticipating ? "You're in!!!" : 'Fans participating'}</div>
      <IconWrapper>
        {eventBounty.isParticipating ? (
          <Icon alt="" src={GlassesIconGreen} />
        ) : (
          <Icon alt="" src={GlassesIconRed} />
        )}
        {!isComplete ? (
          <>
            <div>{eventBounty.participants} of </div>
            <b>{eventBounty.participantsLimit}</b>
          </>
        ) : (
          <b>{eventBounty.participants}</b>
        )}
      </IconWrapper>
    </EventParticipants>
  )
}

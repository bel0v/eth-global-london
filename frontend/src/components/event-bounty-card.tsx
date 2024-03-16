import styled from 'styled-components'
import { Event, type EventBounty } from '../data/types'
import GlassesIconRed from '../images/icons/icon-glasses-red.png'
import GlassesIconGreen from '../images/icons/icon-glasses-green.png'
import { Tag } from './tag'

const EventTypeIcon = styled.img`
  width: 40px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`
const EventTypeIconWrapper = styled.div`
  width: 50px;
  border-radius: var(--br-base);
  background-color: var(--bg-warm-light-80);
  border: 1px solid var(--bg-warm-bold);
  box-sizing: border-box;
  height: 50px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const EventType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`

const EventTypeParent = styled.div<{ imageUrl?: string }>`
  width: 320px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-xs);
  box-sizing: border-box;
  background-image: url('${(props) => props.imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`

const EventDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const RewardCoinsIcon = styled.img`
  width: 15px;
  position: relative;
  border-radius: var(--br-81xl);
  height: 15px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`
const EventBountyReward = styled.div`
  background-color: var(--bg-warm-light-80);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`
const EventDateParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`
const ManchesterFirstGoal = styled.b`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xl);
  text-align: center;
`
const EventDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-5xl);
  gap: var(--gap-4xs);
`
const GlassesHipRose1Icon = styled.img`
  width: 40px;
  position: relative;
  height: 16px;
  object-fit: cover;
`
const GlassesHipRose1Parent = styled.div`
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
  font-size: var(--font-size-xs);
`
const EventParticipants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`
const ActionButton = styled.div`
  border-radius: var(--br-81xl);
  background: linear-gradient(95.52deg, #ffd19b, #fd97ff);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
  font-size: var(--font-size-xs);
`
const EventActions = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-xs);
  box-sizing: border-box;
  font-size: var(--font-size-5xs);
`
const CardBody = styled.div`
  align-self: stretch;
  background: linear-gradient(253.79deg, #f9f1f1, #f7ddfe);
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-xs);
`
const EventCardWrapper = styled.div`
  border-radius: var(--br-base);
  border: 1px solid var(--bg-cold);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const EventBountyCard = ({
  event,
  eventBounty,
}: {
  event: Event
  eventBounty: EventBounty
}) => {
  const isComplete = eventBounty.participants === eventBounty.participantsLimit
  return (
    <EventCardWrapper>
      <EventTypeParent imageUrl={eventBounty.background}>
        <EventType>
          {event.icons?.map((icon) => (
            <EventTypeIconWrapper key={icon}>
              <EventTypeIcon alt="" src={icon} />
            </EventTypeIconWrapper>
          ))}
        </EventType>
        {eventBounty.tag && <Tag name={eventBounty.tag} />}
      </EventTypeParent>
      <CardBody>
        <EventDescription>
          <EventDateParent>
            <EventDate>
              <div>{eventBounty.date}</div>
            </EventDate>
            <EventBountyReward>
              <RewardCoinsIcon alt="" src={eventBounty.reward.icon} />
              <div>{eventBounty.reward.value}</div>
              <b>{eventBounty.reward.token}</b>
            </EventBountyReward>
          </EventDateParent>
          <ManchesterFirstGoal>{eventBounty.title}</ManchesterFirstGoal>
        </EventDescription>
        <EventActions>
          <EventParticipants>
            <div>
              {eventBounty.isParticipating ? "You're in!!!" : 'Fans participating'}
            </div>
            <GlassesHipRose1Parent>
              {eventBounty.isParticipating ? (
                <GlassesHipRose1Icon alt="" src={GlassesIconGreen} />
              ) : (
                <GlassesHipRose1Icon alt="" src={GlassesIconRed} />
              )}
              {!isComplete ? (
                <>
                  <div>{eventBounty.participants} of </div>
                  <b>{eventBounty.participantsLimit}</b>
                </>
              ) : (
                <b>{eventBounty.participants}</b>
              )}
            </GlassesHipRose1Parent>
          </EventParticipants>
          <ActionButton>
            <b> {isComplete ? 'Watch moment' : 'See bounty'}</b>
          </ActionButton>
        </EventActions>
      </CardBody>
    </EventCardWrapper>
  )
}

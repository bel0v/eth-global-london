import styled from 'styled-components'
import { Event } from '../data/types'
import { eventsMock } from '../data/events-mock'
import { Link } from 'react-router-dom'

const EventSectionHeader = styled.b`
  font-size: var(--font-size-16);
`

const ChooseAnEvent = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
`
const EventImageIcon = styled.img`
  width: 120px;
  border-radius: var(--br-81xl);
  height: 120px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`
const EventorganiserIcon = styled.img`
  width: 40px;
  position: relative;
  border-radius: var(--br-81xl);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  margin-left: -40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`
const EventImageParent = styled.div`
  border-radius: var(--br-base);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`
const EventCardWrapper = styled.div`
  width: 152px;
  border-radius: var(--br-base);
  background-color: var(--bg-warm-light);
  border: 1px solid var(--bg-warm-bold);
  box-sizing: border-box;
  height: 152px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: var(--gap-3xs);
`

const EventCardParent = styled.div`
  width: 328px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`
const EventsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`

const EventTitle = styled.div`
  font-size: var(--font-size-12);
  width: 140px;
  border-radius: var(--br-81xl);
  background-color: var(--bg-warm-light-80);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) var(--padding-5xs);
  box-sizing: border-box;
`
const EventDate = styled.div`
  font-size: var(--font-size-12);
  border-radius: var(--br-81xl);
  background-color: var(--bg-warm-light-80);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) var(--padding-5xs);
`
const EventTitleParent = styled.div`
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 70px);
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 1;
`
const ChooseAnEventParent = styled.div`
  align-self: stretch;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xl) 0px;
  gap: var(--gap-5xl);
  z-index: 1;
`

const EventDashboardRoot = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 110px;
  position: relative;
  background-color: var(--pearl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--blue);
  font-family: var(--font-exo);
`

const EventCard = ({ event }: { event: Event }) => {
  return (
    <EventCardWrapper key={event.id}>
      <EventImageParent>
        <EventImageIcon alt="" src={event.image} />
        {event.organiserIcon && <EventorganiserIcon alt="" src={event.organiserIcon} />}
      </EventImageParent>
      <EventTitleParent>
        {event.title && (
          <EventTitle>
            <b>Lenny Kravitz Concert</b>
          </EventTitle>
        )}
        {event.date && (
          <EventDate>
            <b>07/21/2024</b>
          </EventDate>
        )}
      </EventTitleParent>
    </EventCardWrapper>
  )
}

export const EventDashboard = () => {
  const events = eventsMock

  const rewardedEvents = events.filter((event) => event.organiserIcon !== undefined)
  const nonRewardedEvents = events.filter((event) => event.organiserIcon === undefined)

  return (
    <EventDashboardRoot>
      <ChooseAnEventParent>
        <ChooseAnEvent>Choose an Event</ChooseAnEvent>
        {rewardedEvents.length > 0 && (
          <EventsSection>
            <EventSectionHeader>Token Gated for you!</EventSectionHeader>
            <EventCardParent>
              {rewardedEvents.map((event) => (
                <Link to={`${event.id}`}>
                  <EventCard key={event.id} event={event} />
                </Link>
              ))}
            </EventCardParent>
          </EventsSection>
        )}
        {nonRewardedEvents.length > 0 && (
          <EventsSection>
            <EventSectionHeader>No token gating</EventSectionHeader>
            <EventCardParent>
              {nonRewardedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </EventCardParent>
          </EventsSection>
        )}
      </ChooseAnEventParent>
    </EventDashboardRoot>
  )
}

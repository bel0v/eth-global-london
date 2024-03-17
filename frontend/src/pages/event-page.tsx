import styled from 'styled-components'
import { EventBountyCard } from '../components/event-bounty-card'
import { Link, useParams } from 'react-router-dom'
import CoinImage from '../images/coin-left.png'
import { Indicator } from '../components/indicator'
import { LoadingStatus } from '../components/loading-status'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useFetch } from '../hooks/use-fetch'
import { Event, EventBounty } from '../data/types'

const CoinLeftIcon = styled.img`
  width: 180px;
  position: absolute;
  margin: 0 !important;
  top: 33px;
  left: -40px;
  height: 180px;
  object-fit: cover;
  z-index: 0;
`
const TokensBounties = styled.div`
  position: relative;
`
const TokensBountiesWrapper = styled.div`
  border-radius: 12px;
  background-color: var(--bg-warm-light-80);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
  z-index: 1;
`
const ManchesterCityLogoPngTransIcon = styled.img`
  border-radius: 50%;
  width: 120px;
  position: absolute;
  margin: 0 !important;
  right: -20px;
  bottom: -20px;
  height: 120px;
  object-fit: cover;
  z-index: 2;
`
const CoinLeftParent = styled.div`
  width: 360px;
  border-radius: 0px 0px var(--br-base) var(--br-base);
  background: linear-gradient(180deg, #ffe4e4, #e8d2ff);
  height: 230px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 64px 0px;
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-3xs);
`

const ActiveParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-5xl);
`

const BountiesWrapper = styled.div`
  min-width: 360px;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  font-size: var(--font-size-base);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  z-index: 0;
`

const EventPageRoot = styled.div`
  min-width: 360px;
  overflow: hidden;
  width: 100%;
  position: relative;
  background-color: var(--pearl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--blue);
  font-family: var(--font-exo);
`

export const EventPage = () => {
  const { eventId } = useParams<{ eventId: string }>()
  const queryClient = useQueryClient()
  const fetch = useFetch()

  const eventQuery = useQuery({
    queryKey: ['events', eventId],
    queryFn: () => {
      return fetch.get(`/event/${eventId}`).json<Event>()
    },
    placeholderData: () => {
      return queryClient
        .getQueryData<{ events: Event[] }>(['events'])
        ?.events?.find((event) => event.id === eventId)
    },
  })

  const eventBountiesQuery = useQuery({
    queryKey: ['events', eventId, 'bounties'],
    queryFn: () => {
      return fetch.get(`/event/${eventId}/bounties`).json<{ bounties: EventBounty[] }>()
    },
    select: (data) => data.bounties,
  })

  console.log(eventBountiesQuery.data)

  if (eventQuery.status === 'pending') {
    return <LoadingStatus />
  }
  const event = eventQuery.data
  const eventBounties = eventBountiesQuery.data ?? []

  if (event === undefined) {
    return <div>404</div>
  }

  return (
    <EventPageRoot>
      <Content>
        <CoinLeftParent>
          <CoinLeftIcon alt="" src={CoinImage} />
          <TokensBountiesWrapper>
            <TokensBounties>Tokens Bounties</TokensBounties>
          </TokensBountiesWrapper>
          <ManchesterCityLogoPngTransIcon alt="" src={event.eventImage} />
        </CoinLeftParent>
        <BountiesWrapper>
          <ActiveParent>
            <b>Active</b>
            <Indicator size={16} />
          </ActiveParent>
          {eventBounties.map((eventBounty) => (
            <Link to={`${eventBounty.id}`} key={eventBounty.id}>
              <EventBountyCard eventBounty={eventBounty} event={event} />
            </Link>
          ))}
        </BountiesWrapper>
      </Content>
    </EventPageRoot>
  )
}

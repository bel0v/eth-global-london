import styled from 'styled-components'
import { EventBountyCard } from '../components/event-bounty-card'
import { useParams } from 'react-router-dom'
import { eventsMock } from '../data/events-mock'
import CoinImage from '../images/coin-left.png'

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
const TokensBounties1 = styled.b`
  position: relative;
`
const FrameChild = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--active);
  overflow: hidden;
  flex-shrink: 0;
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
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  const params = useParams<{ eventId: string }>()
  const event = eventsMock.find((event) => event.id === params.eventId)

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
          <ManchesterCityLogoPngTransIcon alt="" src={event.image} />
        </CoinLeftParent>
        <BountiesWrapper>
          <ActiveParent>
            <TokensBounties1>Active</TokensBounties1>
            <FrameChild />
          </ActiveParent>
          {event.bounties.map((eventBounty) => (
            <EventBountyCard
              key={eventBounty.id}
              eventBounty={eventBounty}
              event={event}
            />
          ))}
        </BountiesWrapper>
      </Content>
    </EventPageRoot>
  )
}

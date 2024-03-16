import styled from 'styled-components'
import { eventBountiesMock } from '../data/events-mock'
import { Link } from 'react-router-dom'
import { EventBountyCard } from '../components/event-bounty-card'
import RecapMainImage1 from '../images/recap-main-1.png'
import RecapMainImage2 from '../images/recap-main-2.png'

const Clock1Icon = styled.img`
  width: 220px;
  position: absolute;
  margin: 0 !important;
  top: 30px;
  left: -26px;
  height: 220px;
  object-fit: cover;
  z-index: 0;
`

const MomentorRecapWrapper = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--bg-warm-light-80);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
  z-index: 1;
`
const Image1Icon = styled.img`
  width: 140px;
  position: absolute;
  margin: 0 !important;
  right: -30px;
  bottom: -30px;
  height: 140px;
  object-fit: cover;
  z-index: 2;
`
const Clock1Parent = styled.div`
  width: 360px;
  border-radius: 0px 0px var(--br-base) var(--br-base);
  background: linear-gradient(180deg, #ffe4e4, #e8d2ff);
  height: 230px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-45xl) 0px;
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-3xs);
  font-size: var(--font-size-5xl);
`

const FooterSpacer = styled.div`
  width: 343px;
  position: relative;
  height: 100px;
  overflow: hidden;
  flex-shrink: 0;
`
const FrameParent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  z-index: 0;
`

const RecapRoot = styled.div`
  min-width: 360px;
  overflow: hidden;
  width: 100%;
  position: relative;
  background-color: var(--pearl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--blue);
  font-family: var(--font-exo);
`

const BountiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const MomentorRecap = () => {
  const allEventBounties = eventBountiesMock
  return (
    <RecapRoot>
      <FrameParent1>
        <Clock1Parent>
          <Clock1Icon alt="" src={RecapMainImage1} />
          <MomentorRecapWrapper>
            <b>Momentor ReCap</b>
          </MomentorRecapWrapper>
          <Image1Icon alt="" src={RecapMainImage2} />
        </Clock1Parent>
        <BountiesWrapper>
          {allEventBounties.map((eventBounty) => (
            <Link to="todo" key={eventBounty.id}>
              <EventBountyCard eventBounty={eventBounty} />
            </Link>
          ))}
        </BountiesWrapper>
        <FooterSpacer />
      </FrameParent1>
    </RecapRoot>
  )
}

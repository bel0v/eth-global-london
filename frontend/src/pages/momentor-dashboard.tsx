import styled from 'styled-components'
import { pluralize } from '../helpers/format'
import { Link } from 'react-router-dom'
import { EventBountyCard } from '../components/event-bounty-card'
import { Indicator } from '../components/indicator'
import { useFetch } from '../hooks/use-fetch'
import { useQuery } from '@tanstack/react-query'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { WalletData } from '../data/types'
import { eventBountiesMock } from '../data/events-mock'

const Fan11Icon = styled.img`
  width: 200px;
  position: absolute;
  margin: 0 !important;
  top: 50px;
  right: -20px;
  height: 200px;
  object-fit: cover;
  z-index: 0;
`
const TitleParagraph = styled.p`
  margin: 0;
`

const Active = styled.div`
  position: relative;
`

const ActiveParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Bounties = styled.b`
  position: relative;
  font-size: var(--font-size-5xl);
`
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  font-size: var(--font-size-base);
`
const Hero = styled.div`
  width: 360px;
  border-radius: 0px 0px var(--br-base) var(--br-base);
  background-color: var(--bg-warm);
  height: 230px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-41xl) var(--padding-xs) var(--padding-5xl);
  box-sizing: border-box;
  position: relative;
`

const FanDashboardRoot = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 110px;
  background-color: var(--pearl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--blue);
  font-family: var(--font-exo);
`
const BountiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-5xl);
`

export const MomentorDashboard = () => {
  const { primaryWallet } = useDynamicContext()
  const fetch = useFetch()

  const walletData: WalletData = {
    bounties: eventBountiesMock,
    avatar: '',
    address: 'admekmlka',
  }

  const walletAvatar = useQuery({
    queryKey: ['wallet-avatar', primaryWallet?.address],
    queryFn: () => {
      return fetch
        .get(`/user/${primaryWallet?.address}/avatar`)
        .json<{ avatar: string }>()
    },
    enabled: Boolean(primaryWallet),
  })

  // const walletBounties = useQuery({
  //   queryKey: ['wallet-bounties', primaryWallet?.address],
  //   queryFn: () => {
  //     return fetch
  //       .get(`/user/${primaryWallet?.address}/bounties`)
  //       .json<{ avatar: string }>()
  //   },
  //   enabled: Boolean(primaryWallet),
  // })

  // console.log(allBounties.data)

  return (
    <FanDashboardRoot>
      <Hero>
        <Fan11Icon alt="" src={walletAvatar.data?.avatar} />
        <b>
          <TitleParagraph>Momentor</TitleParagraph>
          <TitleParagraph>Dashboard</TitleParagraph>
        </b>
        <FrameParent>
          <ActiveParent>
            <Active>Active</Active>
            <Indicator size={10} />
          </ActiveParent>
          <Bounties>
            {pluralize(walletData.bounties.length, 'bounty', 'bounties')}
          </Bounties>
        </FrameParent>
      </Hero>
      {walletData.bounties.length > 0 && (
        <BountiesList>
          <ActiveParent>
            <b>Active</b>
            <Indicator size={16} />
          </ActiveParent>
          {walletData.bounties.map((eventBounty) => (
            <Link
              to={`/event-dashboard/${eventBounty.eventId}/${eventBounty.id}`}
              key={eventBounty.id}
            >
              <EventBountyCard eventBounty={eventBounty} />
            </Link>
          ))}
        </BountiesList>
      )}
    </FanDashboardRoot>
  )
}

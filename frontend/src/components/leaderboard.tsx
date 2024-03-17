import styled from 'styled-components'
import { EventBounty, Moment } from '../data/types'
import { useQuery } from '@tanstack/react-query'
import { useFetch } from '../hooks/use-fetch'

const backdrops = ['#7C4BE5', '#E54BD6', '#4BD3E5', '#4BE589', '#E5C34B']

const Fan11Icon = styled.img`
  width: 35px;
  position: relative;
  height: 35px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`
const Fan11Wrapper = styled.div<{ bg: string }>`
  width: 20px;
  border-radius: var(--br-81xl);
  background-color: ${(props) => `${props.bg}`};
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
const Xec24a3Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`
const ProgressInner = styled.div<{ percentage: number }>`
  width: ${(props) => `${props.percentage}%`};
  flex: 1;
  position: relative;
  background: linear-gradient(95.52deg, #ffd19b, #fd97ff);
  overflow: hidden;
`
const FrameWrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-81xl);
  background-color: var(--bg-cold);
  height: 10px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const FrameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`

const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--font-size-xs);
`
const FanLeaderboardParentRoot = styled.div`
  width: 272px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-exo);
`

const LeaderAvatar = ({
  address,
  backdrop = backdrops[0],
}: {
  address: string
  backdrop?: string
}) => {
  const fetch = useFetch()
  const walletAvatar = useQuery({
    queryKey: ['wallet-avatar', address],
    queryFn: () => {
      return fetch.get(`/user/${address}/avatar`).json<{ avatar: string }>()
    },
  })

  return (
    <Fan11Wrapper bg={backdrop}>
      <Fan11Icon alt="" src={walletAvatar.data?.avatar} />
    </Fan11Wrapper>
  )
}

function truncateAddress(input: string) {
  const start = input.slice(0, 4)
  const end = input.slice(-4)
  return `${start}...${end}`
}

export const Leaderboard = ({ eventBounty }: { eventBounty: EventBounty }) => {
  const fetch = useFetch()
  const momentsLeaderboard = useQuery({
    queryKey: ['event-bounty', eventBounty.id, 'leaderboard'],
    queryFn: () => {
      return fetch
        .get(`/bounty/${eventBounty.id}/leaderboard`)
        .json<{ sortedMoments: Moment[] }>()
    },
    select: (data) => data.sortedMoments,
  })

  if (momentsLeaderboard.isLoading || momentsLeaderboard.isError) {
    return null
  }

  return (
    <FanLeaderboardParentRoot>
      <b>Fan LeaderBoard</b>
      <FrameParent>
        {momentsLeaderboard.data?.map((moment, index) => (
          <FrameGroup key={moment.id}>
            <LeaderAvatar
              address={moment.walletAddress}
              backdrop={backdrops[index % momentsLeaderboard.data.length]}
            />
            <FrameContainer>
              <Xec24a3Parent>
                <div>{truncateAddress(moment.walletAddress)}</div>
                <b>{moment.score / 100}%</b>
              </Xec24a3Parent>
              <FrameWrapper>
                <ProgressInner percentage={moment.score / 100} />
              </FrameWrapper>
            </FrameContainer>
          </FrameGroup>
        ))}
      </FrameParent>
    </FanLeaderboardParentRoot>
  )
}

import styled from 'styled-components'
import StadiumImage from '../images/stadium.svg'
import { BackButton } from '../components/back-button'
import { useParams } from 'react-router-dom'
import { FileUploadInput } from '../components/file-upload-input'
import { fileToBase64 } from '../helpers/data'
import { Event, EveryTagName, TagName } from '../data/types'
import { Tag } from '../components/tag'
import { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useFetch } from '../hooks/use-fetch'
import * as Popover from '@radix-ui/react-popover'
import { knownTokens } from '../data/known-tokens'
import { useDecimalNumberRifm } from '../hooks/use-decimal-number-rifm'
import { parseEther } from 'viem'

const StadiumIcon = styled.img`
  width: 200px;
  position: absolute;
  margin: 0 !important;
  top: 50px;
  right: -20px;
  height: 200px;
  z-index: 0;
`

const FrameItem = styled.img`
  width: 40px;
  border-radius: var(--br-81xl);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`
const EventTypeInner = styled.div`
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

const DropdownWrapper = styled.div`
  margin-bottom: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 10px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const TokenItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
  color: black;
  background: var(--bg-warm-light);
  border-radius: 8px;
`

const EventType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`
const FrameParent = styled.div`
  width: 336px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
`

const UploadVenuePhotoWrapper = styled.div`
  opacity: 0.9;
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--bg-warm-light-80);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  cursor: pointer;
`
const StadiumParent = styled.div<{ $imageUrl?: string }>`
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
  font-size: var(--font-size-5xl);
  background-image: url('${(props) => props.$imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`

const TitleInput = styled.input`
  border: 1px solid var(--bg-warm);
  background-color: var(--bg-warm-light);
  border-radius: var(--br-5xs);
  padding: var(--padding-3xs);
  width: 100%;
  font-weight: 700;
  ::placeholder {
    color: var(--bg-warm);
  }
`

const AddTitleParent = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`

const TagsParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`
const AddTokenAmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
const RewardCoinsIcon = styled.img`
  width: 40px;
  position: relative;
  border-radius: var(--br-81xl);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`
const RewardCoinsWrapper = styled.div`
  width: 45px;
  border-radius: var(--br-81xl);
  border: 1px solid var(--bg-warm-bold);
  box-sizing: border-box;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const FrameDiv = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr auto;
  align-items: center;
  gap: var(--gap-3xs);
`
const ApproveButton = styled.button`
  font-size: 16px;
  align-self: stretch;
  border-radius: 4px;
  background-color: var(--bg-warm);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-base);
  color: var(--bg-warm-bold);
`
const FrameContainer = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--bg-warm-light);
  border: 1px solid var(--bg-warm);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-9xs);
  color: var(--bg-warm);
`
const CreateBountyButton = styled.button`
  &[aria-disabled='true'] {
    opacity: 0.8;
    cursor: auto;
  }
  border-radius: var(--br-81xl);
  background: linear-gradient(95.52deg, #ffd19b, #fd97ff);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
  font-size: var(--font-size-5xl);
`
const CreateDetailsRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--pearl);
  padding-bottom: 110px;
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

const everyTag = [
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
  'speaker',
] satisfies EveryTagName

type CreateBountyPayload = {
  userWalletAddress: string
  eventId: string
  name: string
  venueImageURI: string
  participantsLimit: string // bigint
  rewardToken: string
  totalReward: string // bigint
  tag: string
}

const approvalAddress = '0x5074E1bb5Dd9A5CF8ADaB7891427dc6C2542e467'

export const CreateBountyPage = () => {
  const { eventId } = useParams<{ eventId: string }>()
  const eventQuery = useQuery({
    queryKey: ['events', eventId],
    queryFn: () => {
      return fetch.get(`/event/${eventId}`).json<Event>()
    },
  })

  const [activeTag, setActiveTag] = useState<TagName>()
  const [venueImageURI, setVenueImageURI] = useState<string>()
  const [name, setName] = useState<string>('')
  const [token, setToken] = useState(knownTokens[0])
  const [totalReward, setTotalReward] = useState('')
  const [isTokenSelectOpen, setTokenSelectOpen] = useState(false)

  const onFileDrop = async (files: File[]) => {
    const file = files[0]
    const base64string = await fileToBase64(file)
    setVenueImageURI(base64string)
  }
  const fetch = useFetch()

  const createBounty = useMutation({
    mutationFn: (payload: CreateBountyPayload) =>
      fetch.post('/bounty/add', { json: payload }),
  })

  const rewardRifm = useDecimalNumberRifm({
    value: totalReward,
    onChange: setTotalReward,
  })

  const canSubmit =
    eventId !== undefined &&
    name.trim().length > 0 &&
    venueImageURI !== undefined &&
    totalReward.trim().length > 0 &&
    activeTag !== undefined

  return (
    <CreateDetailsRoot>
      <StadiumParent $imageUrl={venueImageURI}>
        {!venueImageURI && <StadiumIcon alt="" src={StadiumImage} />}
        <FrameParent>
          <BackButton to={`/event-dashboard`} />
          <EventType>
            {eventQuery.data?.icons?.map((icon) => (
              <EventTypeInner key={icon}>
                <FrameItem alt="" src={icon} />
              </EventTypeInner>
            ))}
          </EventType>
        </FrameParent>
        <FileUploadInput
          onFileSelect={onFileDrop}
          aria-label="image upload"
          accept="image/*"
        >
          <UploadVenuePhotoWrapper>
            {venueImageURI ? 'Upload another' : 'Upload Venue Photo'}
          </UploadVenuePhotoWrapper>
        </FileUploadInput>
      </StadiumParent>
      <AddTitleParent>
        <b>Add Title</b>
        <TitleInput
          placeholder="e.g. First Team Goal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </AddTitleParent>
      <AddTitleParent>
        <b>Choose Tag</b>
        <TagsParent>
          {everyTag.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)}>
              <Tag aria-pressed={activeTag === tag} name={tag} />
            </button>
          ))}
        </TagsParent>
      </AddTitleParent>
      <AddTitleParent>
        <AddTokenAmountWrapper>
          <b>Add token amount</b>
        </AddTokenAmountWrapper>
        <FrameContainer>
          <FrameDiv>
            <Popover.Root open={isTokenSelectOpen} onOpenChange={setTokenSelectOpen}>
              <Popover.Trigger>
                <RewardCoinsWrapper>
                  <RewardCoinsIcon alt="" src={token.icon} />
                </RewardCoinsWrapper>
              </Popover.Trigger>
              <Popover.Content side="top">
                <DropdownWrapper>
                  {knownTokens.map((token) => (
                    <button
                      key={token.ticker}
                      onClick={() => {
                        setToken(token)
                        setTokenSelectOpen(false)
                      }}
                    >
                      <TokenItem>
                        <RewardCoinsIcon src={token.icon} />
                        <span>{token.ticker}</span>
                      </TokenItem>
                    </button>
                  ))}
                </DropdownWrapper>
              </Popover.Content>
            </Popover.Root>
            <TitleInput inputMode="numeric" {...rewardRifm} />
          </FrameDiv>
          <ApproveButton>
            <b>Approve</b>
          </ApproveButton>
        </FrameContainer>
      </AddTitleParent>
      <CreateBountyButton
        disabled={!canSubmit || createBounty.isPending}
        aria-disabled={!canSubmit}
        onClick={async () => {
          if (!canSubmit) {
            return
          }
          const payload: CreateBountyPayload = {
            eventId,
            name,
            venueImageURI,
            rewardToken: token.address,
            totalReward: parseEther(totalReward).toString(),
            tag: activeTag,
            participantsLimit: BigInt(5).toString(),
          }
          const result = await createBounty.mutateAsync(payload)
          console.log(result)
        }}
      >
        <b>Create Bounty</b>
      </CreateBountyButton>
    </CreateDetailsRoot>
  )
}

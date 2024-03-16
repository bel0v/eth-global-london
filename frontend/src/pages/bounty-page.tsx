import styled from 'styled-components'
import { BountyParticipants } from '../components/bounty-participants'
import { eventBountiesMock, eventsMock } from '../data/events-mock'
import { useParams } from 'react-router-dom'
import IconAddPhoto from '../images/icons/icon-photo-add.svg'
import NoImageIcon from '../images/icons/no-image-icon.svg'
import { FileUploadInput } from '../components/file-upload-input'
import { BackButton } from '../components/back-button'
import { fileToBase64 } from '../helpers/data'

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

const EventType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`
const BackgroundWrapper = styled.div<{ imageUrl?: string }>`
  width: 360px;
  border-radius: 0px 0px var(--br-base) var(--br-base);
  height: 230px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 60px var(--padding-xs);
  box-sizing: border-box;
  background-image: url('${(props) => props.imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`
const Active = styled.div`
  position: relative;
`
const ActiveUnactiveChild = styled.div`
  width: 12px;
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--active);
  height: 12px;
  overflow: hidden;
  flex-shrink: 0;
`
const ActiveUnactive = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--bg-warm-bold);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-5xs);
  gap: var(--gap-9xs);
  color: var(--bg-warm-light);
`
const SundayMarch172024Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const ManchesterFirstGoal = styled.b`
  position: relative;
  font-size: var(--font-size-xl);
  text-align: center;
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
const RewardCoinsParent = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--bg-warm-light-80);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
  font-size: var(--font-size-xs);
`
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  font-size: var(--font-size-5xs);
`
const Fan11Icon = styled.img`
  width: 35px;
  position: relative;
  height: 35px;
  object-fit: cover;
`
const Fan11Wrapper = styled.div`
  width: 20px;
  border-radius: var(--br-81xl);
  background-color: #7c4be6;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
const FrameWrapper = styled.div`
  width: 126px;
  border-radius: var(--br-5xs);
  height: 80px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  background-image: url('/frame-30@3x.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`

const PhotoIcon = styled.img`
  width: 70px;
  position: absolute;
  margin: 0 !important;
  right: -14px;
  bottom: -20px;
  height: 70px;
  z-index: 0;
`
const Parent1 = styled.div`
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
  z-index: 1;
`
const HereCouldBe = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 2;
`
const PhotoParent = styled.div`
  width: 126px;
  border-radius: var(--br-5xs);
  background-color: var(--bg-warm);
  height: 80px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-5xs);
`
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  color: var(--bg-warm-bold);
`
const AddPhotoAlternateIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
`
const AddPhotoAlternateParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-81xl);
  background: linear-gradient(95.52deg, #ffd19b, #fd97ff);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
  gap: var(--gap-5xs);
  cursor: pointer;
  font-size: var(--font-size-base);
`
const FrameContainer = styled.div`
  width: 320px;
  border-radius: var(--br-base);
  background-color: var(--bg-warm-light);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-base);
  margin-top: -24px;
`

const BountyPageRoot = styled.div`
  width: 100%;
  padding-bottom: 110px;
  position: relative;
  background-color: var(--pearl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--blue);
  font-family: var(--font-exo);
`

export const BountyPage = () => {
  const params = useParams<{ bountyId: string }>()
  const eventBounty = eventBountiesMock.find((event) => event.id === params.bountyId)

  if (eventBounty === undefined) {
    return <div>404</div>
  }
  const event = eventsMock.find((event) => event.id === eventBounty.eventId)
  const freeSeatsNumber = eventBounty.participantsLimit - eventBounty.moments.length

  const onFileDrop = async (files: File[]) => {
    const file = files[0]
    const base64string = await fileToBase64(file)
    console.log(base64string)
  }

  return (
    <BountyPageRoot>
      <BackgroundWrapper imageUrl={eventBounty.background}>
        <BackButton to={`/event-dashboard/${eventBounty.eventId}`} />
        <EventType>
          {event?.icons?.map((icon) => (
            <EventTypeInner>
              <FrameItem alt="" src={icon} />
            </EventTypeInner>
          ))}
        </EventType>
      </BackgroundWrapper>
      <FrameContainer>
        <SundayMarch172024Parent>
          <Active>{eventBounty.date}</Active>
          <ActiveUnactive>
            <Active>Active</Active>
            <ActiveUnactiveChild />
          </ActiveUnactive>
        </SundayMarch172024Parent>
        <ManchesterFirstGoal>{eventBounty.name}</ManchesterFirstGoal>
        <FrameDiv>
          <BountyParticipants eventBounty={eventBounty} />
          <RewardCoinsParent>
            <RewardCoinsIcon alt="" src={eventBounty.reward.icon} />
            <Active>{eventBounty.reward.value} tokens to grab</Active>
          </RewardCoinsParent>
        </FrameDiv>
        <FrameParent>
          {eventBounty.moments.map((moment) => (
            <FrameWrapper>
              <Fan11Wrapper>
                <Fan11Icon alt="" src={moment.image} />
              </Fan11Wrapper>
            </FrameWrapper>
          ))}

          {Array.from(Array(freeSeatsNumber)).map((_, index) => (
            <PhotoParent key={index}>
              <PhotoIcon alt="" src={NoImageIcon} />
              <Parent1>
                <Active>{eventBounty.moments.length + index + 1} of</Active>
                <b>{eventBounty.participantsLimit}</b>
              </Parent1>
              <HereCouldBe>Here could be yours</HereCouldBe>
            </PhotoParent>
          ))}
        </FrameParent>
        <FileUploadInput
          onFileSelect={onFileDrop}
          aria-label="image upload"
          accept="image/*"
        >
          <AddPhotoAlternateParent>
            <AddPhotoAlternateIcon alt="" src={IconAddPhoto} />
            <b>Add Image</b>
          </AddPhotoAlternateParent>
        </FileUploadInput>
      </FrameContainer>
    </BountyPageRoot>
  )
}

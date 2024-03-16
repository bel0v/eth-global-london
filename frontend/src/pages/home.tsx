import styled from 'styled-components'
import FanImage from '../images/fan.png'
import OrganiserImage from '../images/organiser.png'
import { Link } from 'react-router-dom'

const Logo1 = styled.b`
  position: relative;
`

const ChooseARole = styled.div`
  position: relative;
  font-size: var(--font-size-24);
`
const Creators1Icon = styled.img`
  width: 220px;
  position: absolute;
  margin: 0 !important;
  bottom: -10px;
  left: -30px;
  height: 220px;
  object-fit: cover;
  z-index: 0;
`
const YouWillUpload = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-16);
  text-align: center;
`
const FanParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8);
  z-index: 1;
`
const JoinButton = styled.div`
  border-radius: var(--br-8);
  background-color: var(--bg-warm-light-80);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-12) var(--padding-24);
  z-index: 2;
  font-size: var(--font-size-24);
`
const RoleCard = styled.div`
  width: 320px;
  border-radius: var(--br-24);
  background: linear-gradient(
    196.9deg,
    rgba(249, 241, 241, 0.8),
    rgba(247, 221, 254, 0.8)
  );
  border: 1px solid var(--bg-cold);
  box-sizing: border-box;
  height: 320px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-24);
  position: relative;
`
const RoleCard1 = styled.div`
  width: 320px;
  border-radius: var(--br-24);
  background: linear-gradient(
    196.19deg,
    rgba(249, 241, 241, 0.8),
    rgba(255, 228, 176, 0.8)
  );
  border: 1px solid var(--bg-cold);
  box-sizing: border-box;
  height: 320px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-24);
  position: relative;
`
const ChooseARoleParent = styled.div`
  align-self: stretch;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--padding-24);
  padding-bottom: var(--padding-32);
  font-size: var(--font-size-40);
  color: var(--blue);
`
const ChooseUserRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--pearl);
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-16);
  color: #fff;
  font-family: var(--font-exo);
`

export const Home = () => {
  return (
    <ChooseUserRoot>
      <ChooseARoleParent>
        <ChooseARole>Choose a Role</ChooseARole>
        <Link to="/event-dashboard">
          <RoleCard>
            <Creators1Icon alt="" src={FanImage} />
            <FanParent>
              <Logo1>Fan</Logo1>
              <YouWillUpload>
                You will upload content and will get rewarded for contributing
              </YouWillUpload>
            </FanParent>
            <JoinButton>
              <Logo1>Join as a Fan</Logo1>
            </JoinButton>
          </RoleCard>
        </Link>
        <RoleCard1>
          <Creators1Icon alt="" src={OrganiserImage} />
          <FanParent>
            <Logo1>Organizer</Logo1>
            <YouWillUpload>
              You will create bounties and reward fans for uploading content.
            </YouWillUpload>
          </FanParent>
          <JoinButton>
            <Logo1>Join as a Organizer</Logo1>
          </JoinButton>
        </RoleCard1>
      </ChooseARoleParent>
    </ChooseUserRoot>
  )
}

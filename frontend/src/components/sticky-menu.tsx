import styled from 'styled-components'
import DashboardImage from '../images/sticky-menu/dashboard.svg'
import StadiumImage from '../images/sticky-menu/stadium.svg'
import SubscriptionsImage from '../images/sticky-menu/subscriptions.svg'
import NoteImage from '../images/sticky-menu/icon-note.svg'
import { Link } from 'react-router-dom'

const Logo = styled.div`
  position: relative;
`

const DashboardIcon = styled.img`
  width: 44px;
  position: relative;
  height: 44px;
`
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`

const Menu = styled.div`
  width: 340px;
  border-radius: var(--br-base);
  background-color: var(--bg-warm-light);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--bg-warm-bold);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-5xs) var(--padding-base);
`
const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: calc(50% - 180px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  z-index: 2;
  font-size: var(--font-size-xs);
`

interface StickyMenuProps {
  variant?: 'fan' | 'organiser'
}

export const StickyMenu = ({ variant = 'fan' }: StickyMenuProps) => {
  switch (variant) {
    case 'fan':
      return (
        <MenuWrapper>
          <Menu>
            <Link to="/momentor-dashboard">
              <MenuItem>
                <DashboardIcon alt="" src={DashboardImage} />
                <Logo>Dashboard</Logo>
              </MenuItem>
            </Link>
            <Link to="/event-dashboard">
              <MenuItem>
                <DashboardIcon alt="" src={StadiumImage} />
                <Logo>Explore</Logo>
              </MenuItem>
            </Link>
            <Link to="/momentor-recap">
              <MenuItem>
                <DashboardIcon alt="" src={SubscriptionsImage} />
                <Logo>ReCaps</Logo>
              </MenuItem>
            </Link>
          </Menu>
        </MenuWrapper>
      )
    case 'organiser':
      return (
        <MenuWrapper>
          <Menu>
            <Link to="/organiser-dashboard">
              <MenuItem>
                <DashboardIcon alt="" src={DashboardImage} />
                <Logo>Dashboard</Logo>
              </MenuItem>
            </Link>
            <Link to="/event-dashboard">
              <MenuItem>
                <DashboardIcon alt="" src={NoteImage} />
                <Logo>Create</Logo>
              </MenuItem>
            </Link>
            <Link to="/momentor-recap">
              <MenuItem>
                <DashboardIcon alt="" src={SubscriptionsImage} />
                <Logo>ReCaps</Logo>
              </MenuItem>
            </Link>
          </Menu>
        </MenuWrapper>
      )
    default:
      return null
  }
}

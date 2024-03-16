import styled from 'styled-components'

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
const MenuItem1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`
const StylusNoteParent = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
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

export const StickyMenu = () => {
  return (
    <MenuWrapper>
      <Menu>
        <MenuItem>
          <DashboardIcon alt="" src="/dashboard.svg" />
          <Logo>Dashboard</Logo>
        </MenuItem>
        <MenuItem1>
          <DashboardIcon alt="" src="/stadium.svg" />
          <Logo>Explore</Logo>
        </MenuItem1>
        <StylusNoteParent>
          <DashboardIcon alt="" src="/stylus-note.svg" />
          <Logo>Create</Logo>
        </StylusNoteParent>
        <MenuItem1>
          <DashboardIcon alt="" src="/subscriptions.svg" />
          <Logo>ReCaps</Logo>
        </MenuItem1>
      </Menu>
    </MenuWrapper>
  )
}

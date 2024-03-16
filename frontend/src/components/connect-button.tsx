import { DynamicConnectButton, useDynamicContext } from '@dynamic-labs/sdk-react-core'
import styled from 'styled-components'
import * as Popover from '@radix-ui/react-popover'

const ActionButton = styled.div`
  border-radius: var(--br-81xl);
  background: linear-gradient(95.52deg, #ffd19b, #fd97ff);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8) var(--padding-16);
  font-size: var(--font-size-16);
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
`

const Avatar = styled.div`
  height: 28px;
  width: 28px;
  background-color: #e54bd6;
  border-radius: 50%;
  cursor: pointer;
`

const DropdownWrapper = styled.div`
  margin-top: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 10px;
  background: var(--bg-warm-light);
  border-radius: 8px;
`

const LogoutButton = styled.button`
  font-size: var(--font-size-16);
  font-weight: 700;
  cursor: pointer;
`

export const ConnectButton = () => {
  const { isAuthenticated, handleLogOut } = useDynamicContext()

  if (isAuthenticated) {
    return (
      <Popover.Root>
        <Popover.Trigger>
          <Avatar />
        </Popover.Trigger>
        <Popover.Content collisionPadding={16}>
          <DropdownWrapper>
            <LogoutButton onClick={() => handleLogOut()}>Sign out</LogoutButton>
          </DropdownWrapper>
        </Popover.Content>
      </Popover.Root>
    )
  }

  return (
    <DynamicConnectButton>
      <ActionButton>Join</ActionButton>
    </DynamicConnectButton>
  )
}

import { Header } from './header'
import { StickyMenu } from './sticky-menu'

export const FanLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <StickyMenu />
    </>
  )
}

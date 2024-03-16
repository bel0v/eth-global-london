import { Header } from './header'
import { StickyMenu } from './sticky-menu'

export const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const mode = sessionStorage.getItem('mode')
  return (
    <>
      <Header />
      <main>{children}</main>
      <StickyMenu variant={mode === 'organiser' ? 'organiser' : 'fan'} />
    </>
  )
}

import Header from '@/components/Header/Header'
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  return (
    <>
      <Header></Header>
      <h2>main layout</h2>
      <Outlet />
    </>
  )
}

export default MainLayout

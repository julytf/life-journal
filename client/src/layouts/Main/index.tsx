import Header from '@/components/Header/Header'
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import '@/assets/css/fontawsome.css'

interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center dark:bg-[#010409]'>
      {/* <Header></Header> */}
      <Outlet />
    </div>
  )
}

export default MainLayout

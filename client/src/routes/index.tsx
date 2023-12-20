// import { lazy, Suspense } from 'react'
// import { AuthContextProvider } from 'utils/AuthContext'
// import { GlobalContextProvider } from 'utils/GlobalContext'

import DiaryDetail from '@/pages/Diary/DiaryDetail.screen'
import Test from '@/pages/Test.screen'
import WeekDetail from '@/pages/WeekDetail.screen'
import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Index = lazy(() => import('@/pages/Index.screen'))
const MainLayout = lazy(() => import('@/layouts/Main'))
// const AuthMiddleware = lazy(() => import('middlewares/Auth'))
// const Home = lazy(() => import('pages/Home'))

function FallbackLoading() {
  return <p>Loading...</p>
}
const router = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={<FallbackLoading />}>
        {/* <AuthContextProvider>
          <GlobalContextProzvider> */}
        <MainLayout />
        {/* </GlobalContextProzvider>
        </AuthContextProvider> */}
      </Suspense>
    ),
    children: [
      {
        path: 'test',
        element: <Test></Test>,
      },
      {
        path: '',
        element: <Index />,
      },
      {
        path: '/week/:id',
        element: <WeekDetail />,
      },
      {
        path: '/diary',
        children: [
          {
            path: ':date',
            element: <DiaryDetail />,
          },
        ],
      },
      // {
      //   path: 'books',
      //   children: [
      //     { path: '', element: <Books /> },
      //     { path: ':bookId', element: <BookDetail /> },
      //   ],
      // },
    ],
  },
])
export default router

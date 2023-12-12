// import { lazy, Suspense } from 'react'
// import { AuthContextProvider } from 'utils/AuthContext'
// import { GlobalContextProvider } from 'utils/GlobalContext'

import { lazy } from 'react'

const IndexScreen = lazy(() => import('@/pages/Index.screen'))
const MainLayout = lazy(() => import('@/layouts/Main'))
// const AuthMiddleware = lazy(() => import('middlewares/Auth'))
// const Home = lazy(() => import('pages/Home'))

// function FallbackLoading() {
//   return <p>Loading...</p>
// }

const router = {
  path: '',
  element: (
    //   <Suspense fallback={<FallbackLoading />}>
    //     {/* <AuthContextProvider>
    //       <GlobalContextProvider>
    <MainLayout />
    //       </GlobalContextProvider>
    //     </AuthContextProvider> */}
    //   </Suspense>
  ),
  children: [
    // {
    //   path: "test",
    //   element: <h1>test</h1>,
    // },
    {
      path: '',
      element: <IndexScreen />,
    },
    // {
    //   path: 'books',
    //   children: [
    //     { path: '', element: <Books /> },
    //     { path: ':bookId', element: <BookDetail /> },
    //   ],
    // },
  ],
}
export default router

import { createBrowserRouter } from 'react-router-dom'
import userRouter from './user.routes'

const router = createBrowserRouter([
  {
    path: '/',
    children: [userRouter],
  },
])

export default router

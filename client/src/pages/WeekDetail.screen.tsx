import moment from '@/services/moment.service'
import { Moment } from 'moment'
import { FunctionComponent, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactTextareaAutosize from 'react-textarea-autosize'

interface WeekDetailProps {}

const WeekDetail: FunctionComponent<WeekDetailProps> = () => {
  const { id } = useParams()

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const week = parseInt(id!.split('-')[0])
  const year = parseInt(id!.split('-')[1])

  const tDate = moment([year, 0, 1])
  tDate.week(week)
  tDate.startOf('week')

  tDate.subtract(1, 'd')
  return (
    <div className='flex w-672 flex-col items-center justify-center gap-y-12 '>
      <div className='w-full'>
        <span className='text-3xl font-bold'>Week {week}</span>, {year}
      </div>
      <ReactTextareaAutosize
        className='w-full resize-none break-words break-all border-b p-3 pb-6'
        placeholder='Describe the week...'
      ></ReactTextareaAutosize>
      <div className='flex '>
        {new Array(7).fill(null).map((_, index) => {
          tDate.add(1, 'd')
          return <DiaryItem date={tDate.clone()}></DiaryItem>
        })}
      </div>
    </div>
  )
}

interface DiaryItemProps {
  date: Moment
}

const DiaryItem: FunctionComponent<DiaryItemProps> = (props) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/diary/${props.date.format('D-M-YYYY')}`)
  }

  return (
    <div
      onClick={handleOnClick}
      className='mx-2 flex h-40 w-24 flex-col items-center justify-center rounded-lg border-2 hover:border-4 hover:border-sky-300'
    >
      <div>{props.date.format('ddd')}</div>
      <div>{props.date.format('D/M/YYYY')}</div>
    </div>
  )
}

export default WeekDetail

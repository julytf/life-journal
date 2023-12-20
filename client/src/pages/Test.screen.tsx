import moment from '@/services/moment.service'
import ReactTextareaAutosize from 'react-textarea-autosize'

const Test: React.FC = () => {
  // const mmDate = moment('2023-01-01')
  // mmDate.week(51)

  // console.log(mmDate.toString())
  // console.log(mmDate.week())
  // console.log(mmDate.weekYear())
  // console.log(mmDate.weeksInYear())
  // console.log(mmDate.startOf('week').toString())
  // console.log(moment().week())
  // console.log(moment('2023-01-01').weeksInYear())
  // console.log(moment('2022-01-01').weeksInYear())

  // const mmDate = moment('2022-01-01')
  // mmDate.week(53)
  // console.log(mmDate.week());

  // const mmDate = moment()
  // // mmDate.week(53)
  // console.log(mmDate.week())
  // console.log(mmDate.startOf('week').toString())
  // console.log(mmDate.weeksInYear())

  console.log(moment().weeksInYear())
  console.log(moment([2023]).weeksInYear())

  return (
    <>
      {/* <textarea className='w-60 resize-none ring' /> */}

      <ReactTextareaAutosize className='ring' />
    </>
  )
}

export default Test

import classNames from 'classnames'

import { useNavigate } from 'react-router-dom'
import moment from '@/services/moment.service'
import { PropsWithChildren } from 'react'

const Index: React.FC = () => {
  const calendarConfig = {
    width: 53,
    height: 80,
  }

  const Today = moment()
  Today.hour(0)
  Today.minute(0)
  Today.second(0)
  Today.millisecond(0)
  const birthDate = moment([2002, 7 - 1, 25])

  const birthYear = birthDate.year()

  const currentWeek = Today.week()
  // TODO: VCB
  const currentYear = Today.year()

  console.log({
    currentWeek: currentWeek,
    currentYear: currentYear,
  })

  return (
    <>
      <div className='p-16 text-6xl font-bold italic dark:text-white'>Life Calendar</div>
      <div id='calendar' className='my-6 flex flex-col gap-1'>
        <div className='flex gap-1'>
          <Cell className='mr-1'></Cell>
          {new Array(calendarConfig.width).fill(null).map((_, index) => {
            const week = index + 1

            return (
              <Cell key={index} className='text-0.5 dark:text-white'>
                w{week}
              </Cell>
            )
          })}
        </div>
        {new Array(calendarConfig.height + 1).fill(null).map((_, index) => {
          const year = birthYear + index
          const weekNum = moment([year]).weeksInYear()
          console.log(year, weekNum)

          return (
            <div key={index} className='flex items-center gap-1'>
              <Cell className='mr-1 text-0.5 dark:text-white'>{year}</Cell>
              {new Array(weekNum).fill(null).map((_, index) => {
                const week = index + 1

                if (year === birthDate.year() && week < birthDate.week()) return <Cell key={index}></Cell>

                const tileProps: TileProps = {
                  passed: year < currentYear || (year === currentYear && week < currentWeek),
                  current: currentYear === year && currentWeek === week,
                  weekId: `${week}-${year}`,
                }

                return (
                  <Cell key={index}>
                    <Tile {...tileProps}></Tile>
                  </Cell>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

interface CellProps extends PropsWithChildren {
  className?: string
}

const Cell: React.FC<CellProps> = (props) => {
  return <div className={classNames('aspect-square w-4', props.className)}>{props.children}</div>
}
interface TileProps extends PropsWithChildren {
  passed?: boolean
  current?: boolean
  weekId?: string
}

const Tile: React.FC<TileProps> = (props) => {
  const navigate = useNavigate()

  function HandleOnClick() {
    console.log(props.weekId)
    navigate(`/week/${props.weekId}`)
  }

  return (
    <div
      className={classNames('aspect-square w-4 rounded border-2 opacity-70 hover:opacity-100', {
        'bg-[#87cfeb]': props.passed,
        'bg-[#ffff57]': props.current,
      })}
      onClick={HandleOnClick}
    >
      {props.children}
    </div>
  )
}

export default Index

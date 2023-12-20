import moment from '@/services/moment.service'
import { FormEventHandler, FunctionComponent, createRef, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactTextareaAutosize from 'react-textarea-autosize'

type answer = {
  content: string
  icon?: string
}

type question = {
  title: string
  type?: 'radio' | 'checkbox'
  answers: answer[]
}

interface DiaryDetailProps {}

const DiaryDetail: FunctionComponent<DiaryDetailProps> = () => {
  const { date: dateString } = useParams()
  const questions: question[] = [
    {
      title: 'How was your day?',
      type: 'radio',
      answers: [
        { content: 'Very Sad', icon: '😔' },
        { content: 'Sad', icon: '😌' },
        { content: 'Neutral', icon: '🙂' },
        { content: 'Happy', icon: '😀' },
        { content: 'Very Happy', icon: '😄' },
      ],
    },
    {
      title: 'People?',
      type: 'checkbox',
      answers: [
        { content: 'Friends', icon: '⭐' },
        { content: 'Family', icon: '👨‍👩‍👧‍👦' },
        { content: 'Partner', icon: '💑' },
      ],
    },
    {
      title: 'Hobbies?',
      type: 'checkbox',
      answers: [
        { content: 'Exercise', icon: '🏋️‍♀️' },
        { content: 'Run', icon: '👟' },
        { content: 'Gaming', icon: '🎮' },
        { content: 'Reading', icon: '📘' },
        { content: 'Music', icon: '🎧' },
        { content: 'Cook', icon: '🍳' },
      ],
    },
    {
      title: 'Health?',
      type: 'checkbox',
      answers: [
        { content: 'Sick', icon: '😷' },
        { content: 'Hospital', icon: '🏥' },
      ],
    },
    {
      title: 'School / Work?',
      type: 'checkbox',
      answers: [
        { content: 'Homework', icon: '📖' },
        { content: 'Project', icon: '📈' },
        { content: 'Exam', icon: '📝' },
        { content: 'Overtime', icon: '🌙' },
      ],
    },
  ]

  const formRef = useRef<HTMLFormElement>(null)

  const date = moment(dateString, 'DD-MM-YYYY')

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    console.log(e)

    e.preventDefault()
    fetch(`/api/diary/${date.format('D-M-YYYY')}`, { method: 'POST', body: new FormData(formRef.current!) })
  }

  return (
    <div className='w-1024 flex min-h-screen flex-col items-center gap-y-12 py-24 '>
      <div className='w-full'>
        <span className='text-3xl font-bold'>
          {date.format('ddd')} {date.format('D/M/YYYY')}
        </span>
      </div>
      <form className='flex w-full flex-col gap-4' onSubmit={handleOnSubmit} ref={formRef}>
        {questions.map((question, qIndex) => (
          <div key={qIndex} className='flex w-full items-center rounded-md border-2 p-3 px-6'>
            <span className='mr-6 flex-grow'>{question.title}</span>
            <div className='flex flex-grow-0 justify-between gap-2'>
              {question.answers.map((mood, aIndex) => {
                return (
                  <div key={aIndex}>
                    <input
                      type={question.type ?? 'radio'}
                      name={`${qIndex}${question.type === 'checkbox' ? '[]' : ''}`}
                      className='peer hidden'
                      id={`${qIndex}-${aIndex}`}
                      value={aIndex}
                    />
                    <label
                      htmlFor={`${qIndex}-${aIndex}`}
                      className='rounded-md border-2 p-1 px-2  peer-checked:border-2 peer-checked:border-sky-200 peer-checked:bg-sky-100'
                    >
                      <span className='mr-1'>{mood.icon}</span>
                      <span>{mood.content}</span>
                    </label>
                  </div>
                )
              })}
              <button className='ml-2 text-sm text-gray-500'>clear</button>
            </div>
          </div>
        ))}
        <ReactTextareaAutosize
          minRows={6}
          className='mt-4 w-full resize-none break-words break-all rounded-md border-2 p-3 pb-6 outline-none ring-0'
          placeholder='Describe the day...'
        ></ReactTextareaAutosize>
      </form>
      <div className='flex '></div>
    </div>
  )
}

export default DiaryDetail

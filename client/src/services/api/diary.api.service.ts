import Diary from '@/models/diary.model'

export const getAllDiaries = () => {
  throw new Error('not implemented!')
}
export const getDiary = (date: Date): Diary => {
  console.warn('this is a fake diary fetch')

  return {
    date,
    content: 'this is a test content',
  }
}

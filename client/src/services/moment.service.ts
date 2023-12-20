import moment from 'moment'

moment.updateLocale('en', {
  week: {
    dow: 1,
    doy: 7,
  },
})

export default moment

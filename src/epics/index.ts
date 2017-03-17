import { combineEpics } from 'redux-observable'

import { displayMessageEpic } from './displayMessageEpic'

export default combineEpics(
  displayMessageEpic
)

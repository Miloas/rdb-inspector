import { combineEpics } from 'redux-observable'

import { displayMessageEpic } from './displayMessageEpic'
import { getTablesEpic } from './tableEpic'

export default combineEpics(
  displayMessageEpic,
  getTablesEpic
)

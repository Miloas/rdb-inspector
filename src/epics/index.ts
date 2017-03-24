import { combineEpics } from 'redux-observable'

import { getTablesEpic, getInitRowsEpic, getRowsEpic } from './tableEpic'

export default combineEpics(
  getTablesEpic,
  getInitRowsEpic,
  getRowsEpic
)

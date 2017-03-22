import { combineReducers } from 'redux'

import displayMessage from './displayMessage'
import tabs from './tabs'
import db from './db'

export default combineReducers({
  displayMessage,
  tabs,
  db
})

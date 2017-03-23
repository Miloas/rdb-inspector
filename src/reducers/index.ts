import { combineReducers } from 'redux'

import displayMessage from './displayMessage'
import db from './db'

export default combineReducers({
  displayMessage,
  db
})

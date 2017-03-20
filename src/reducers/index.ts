import { combineReducers } from 'redux'

import displayMessage from './displayMessage'
import tabs from './tabs'

export default combineReducers({
  displayMessage,
  tabs
})

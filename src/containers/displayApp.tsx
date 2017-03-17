import { connect } from 'react-redux'

import { displayMessage } from '../actions'
import App from '../components/App'

const mapStateToProps = (state: any) => ({ mes: state.displayMessage.message })
const mapDispatchToProps = (dispatch: any) => {
  return {
    display: (message: string) => {
      dispatch(displayMessage(message))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

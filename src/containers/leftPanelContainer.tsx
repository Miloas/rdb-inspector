import { connect } from 'react-redux'

import { saveCurrentDbName } from '../actions'
import LeftPanel from '../components/LeftPanel'

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveCurrentDbName: (dbName: string) => {
      dispatch(saveCurrentDbName(dbName))
    }
  }
}
export default connect<{}, {}, any>(() => {return{}}, mapDispatchToProps)(LeftPanel)

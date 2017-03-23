import { connect } from 'react-redux'

import { saveCurrentDbName, saveCurrentTableName } from '../actions'
import LeftPanel from '../components/LeftPanel'

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveCurrentDbName: (dbName: string) => {
      dispatch(saveCurrentDbName(dbName))
    },
    saveCurrentTableName: (tableName: string) => {
      dispatch(saveCurrentTableName(tableName))
    }
  }
}
export default connect<{}, {}, any>(() => {return{}}, mapDispatchToProps)(LeftPanel)

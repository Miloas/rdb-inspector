import { connect } from 'react-redux'

import TabBar from '../components/TabBar'

import { saveCurrentTableName } from '../actions'

const mapStateToProps = (state: any) => ({
  tableNames: state.db.tableNames
})

const mapDispatchToProps = (dispatch: any, ) => ({
  saveCurrentTableName: (tableName: string) => {
    dispatch(saveCurrentTableName(tableName))
  }
})

export default connect<{}, {}, any>(mapStateToProps, mapDispatchToProps)(TabBar)

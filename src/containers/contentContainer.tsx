import { connect } from 'react-redux'

import Content from '../components/Content'

const mapStateToProps = (state: any) => ({
  currentDbName: state.db.dbName,
  currentTableName: state.db.tableName
})

export default connect(mapStateToProps, () => {return {}})(Content)

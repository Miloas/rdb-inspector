import { connect } from 'react-redux'

import TabBar from '../components/TabBar'

const mapStateToProps = (state: any) => ({
  tableNames: state.db.tableNames
})

export default connect<{}, {}, any>(mapStateToProps, () => {return {}})(TabBar)

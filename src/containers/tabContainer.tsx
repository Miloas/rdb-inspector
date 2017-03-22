import { connect } from 'react-redux'

import { saveSelected, saveCurrentTableName } from '../actions'
import Tab from '../components/Tab'

const mapStateToProps = (state: any) => ({
  selectedIdx: state.tabs.idx
})
const mapDispatchToProps = (dispatch: any) => {
  return {
    saveSelectedIdx: (idx: number) => {
      dispatch(saveSelected(idx))
    },
    saveCurrentTableName: (tableName: string) => {
      dispatch(saveCurrentTableName(tableName))
    }
  }
}
export default connect<{}, {}, any>(mapStateToProps, mapDispatchToProps)(Tab)

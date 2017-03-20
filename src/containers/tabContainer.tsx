import { connect } from 'react-redux'

import { saveSelected } from '../actions'
import Tab from '../components/Tab'

const mapStateToProps = (state: any) => ({ selectedIdx: state.tabs.idx })
const mapDispatchToProps = (dispatch: any) => {
  return {
    saveSelectedIdx: (idx: number) => {
      dispatch(saveSelected(idx))
    }
  }
}
export default connect<{}, {}, any>(mapStateToProps, mapDispatchToProps)(Tab)

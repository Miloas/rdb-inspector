import * as React from 'react'

import LeftPanelHeader from '../leftPanelHeader'
// import { listDb } from '../../db'

import './style.css'

export default class LeftPanel extends React.PureComponent<void, void> {
  render() {
    return (
      <div className='left-panel'>
        <LeftPanelHeader />
      </div>
    )
  }
}

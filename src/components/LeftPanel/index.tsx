import * as React from 'react'

import LeftPanelHeader from '../leftPanelHeader'
// import { listDb } from '../../db'

import './style.css'

export default class LeftPanel extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className='left-panel'>
        <LeftPanelHeader />
      </div>
    )
  }
}

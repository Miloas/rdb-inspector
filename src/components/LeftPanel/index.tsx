import * as React from 'react'
import * as CSSModuldes from 'react-css-modules'

// const FaDatabase = require('react-icons/lib/fa/database')

import { listDb } from '../../db'

const styles = require('./style.css')

@CSSModuldes(styles)
export default class LeftPanel extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      dbList: []
    }
  }
  componentDidMount() {
    listDb().then((dbList) => {
      this.setState({
        dbList: Object.keys(dbList)
      })
    })
  }
  render() {
    return (
      <div styleName='left-panel'>
        <div styleName='left-panel-container'>
          <select styleName='left-panel-select'>
            {/*{ this.state.dbList.map((dbName: string, idx: number) => {
              return <span><option value={dbName} key={idx}>{dbName}</option><FaDatabase /></span>
            })}*/}
            <option value='123'>123</option>
            <option value='123'>123</option>
            <option value='123'>123</option>
          </select>
          <br />
        </div>
      </div>
    )
  }
}

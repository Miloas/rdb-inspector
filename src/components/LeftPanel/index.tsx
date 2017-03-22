import * as React from 'react'
import * as CSSModuldes from 'react-css-modules'

// const FaDatabase = require('react-icons/lib/fa/database')

import { fakeListDb } from '../../db'
// import { listDb } from '../../db'
// import Select from '../Select'

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
    this.refresh()
  }
  handleChange = (e: any) => {
    this.props.saveCurrentDbName(e.target.value)
  }
  render() {
    console.info(this.props)
    return (
      <div styleName='left-panel'>
        <div styleName='left-panel-container'>
          <select styleName='left-panel-select' onChange={this.handleChange}>
            { this.state.dbList.map((dbName: string, idx: number) => {
              return <option value={dbName} key={idx}>{dbName}</option>
            })}
          </select>
          <br />
        </div>
      </div>
    )
  }
  private refresh = () => {
    fakeListDb().then((dbList) => {
      this.setState({
        dbList: Object.keys(dbList)
      })
      if (dbList) {
        this.props.saveCurrentDbName(Object.keys(dbList)[0])
      }
    })
  }

}

import * as React from 'react'
import * as CSSModules from 'react-css-modules'

import Tab from '../../containers/TabContainer'

const styles = require('./style.css')

@CSSModules(styles)
export default class TabBar extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    console.info(this.props)
    const tables = this.props.tableNames
    return (
      <div styleName='tabbed-area'>
        {tables && tables.length ?
          tables.map((tableName: any, idx: number) => <Tab tableName={tableName} key={idx} idx={idx} />)
          : this.props.children
        }
      </div>
    )
  }
}

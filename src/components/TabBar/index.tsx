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
    const { tables } = this.props
    return (
      <div styleName='tabbed-area'>
        { tables && tables.length ?
          tables.map((table: any, idx: number) => <Tab tableName={table.name} key={ idx } idx={ idx } />)
        : this.props.children
        }
      </div>
    )
  }
}

import * as React from 'react'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

// import Tab from '../../containers/TabContainer'
import './style.css'

export default class TabBar extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      activeKey: '0',
      panes: this.constructPanes(props.tableNames)
    }
  }
  constructPanes = (tableNames: string[]) => {
    return tableNames ? tableNames.map((tableName: string, idx: number) => {
      return { title: tableName, key: String(idx) }
    }) : []
  }
  componentWillReceiveProps(newValue: any) {
    if (newValue.tableNames && newValue.tableNames.length > 0) {
      this.props.saveCurrentTableName(newValue.tableNames[0])
    }
    this.setState({
      activeKey: '0',
      panes: this.constructPanes(newValue.tableNames)
    })
  }
  onChange = (activeKey: any) => {
    this.setState({ activeKey })
    const activeTitle = this.state.panes.find((pane: any) => pane.key === activeKey).title
    this.props.saveCurrentTableName(activeTitle)
  }
  onEdit = (targetKey: any, action: any) => {
    this[action](targetKey)
  }
  remove = (targetKey: any) => {
    let activeKey = this.state.activeKey
    let lastIndex = -1
    this.state.panes.forEach((pane: any, i: any) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter((pane: any) => pane.key !== targetKey)
    if (lastIndex !== -1 && lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key
    }
    this.setState({ panes, activeKey })
  }
  render() {
    const { panes } = this.state
    return (
      <div className='tabbed-area'>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type='editable-card'
          onEdit={this.onEdit}
        >
          {
            panes ? panes.map((pane: any) => <TabPane tab={pane.title} key={pane.key} />) : ''
          }
        </Tabs>
      </div>
    )
  }
}

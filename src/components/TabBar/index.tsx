import * as React from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

import './style.css'

type PaneType = {
  title: string,
  key: string
}

export interface TabBarProps extends React.Props<any> {
  tables: object[],
  setCurrentTableName: (tableName: string) => void
}

export interface TabBarState {
  activeKey: string,
  panes: PaneType[]
}

class TabBar extends React.PureComponent<TabBarProps, TabBarState> {
  constructor(props: TabBarProps) {
    super(props)
    this.state = {
      activeKey: '0',
      panes: this.constructPanes(props.tables)
    }
  }
  constructPanes = (tables: object) => {
    const tableNames = tables ? Object.keys(tables).sort() : undefined
    return tableNames ? tableNames.map((tableName: string, idx: number) => {
      return { title: tableName, key: String(idx) }
    }) : []
  }
  componentWillReceiveProps(newValue: TabBarProps) {
    this.setState({
      activeKey: '0',
      panes: this.constructPanes(newValue.tables)
    })
  }
  onChange = (activeKey: string) => {
    this.setState({ activeKey })
    const activeTitle = this.state.panes.find((pane: PaneType) => pane.key === activeKey).title
    this.props.setCurrentTableName(activeTitle)
  }
  onEdit = (targetKey: string, action: string) => {
    this[action](targetKey)
  }
  remove = (targetKey: string) => {
    let activeKey = this.state.activeKey
    let lastIndex = -1
    this.state.panes.forEach((pane: PaneType, i: number) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter((pane: PaneType) => pane.key !== targetKey)
    if (lastIndex !== -1 && lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key
    }
    this.setState({ panes, activeKey })
  }
  render() {
    const { panes } = this.state
    return (
      <div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type='editable-card'
          onEdit={this.onEdit}
        >
          {
            panes ? panes.map((pane: PaneType) => <TabPane tab={pane.title} key={pane.key} />) : ''
          }
        </Tabs>
      </div>
    )
  }
}

import { setCurrentTableName } from '../..//actions'

const mapStateToProps = (state: any) => ({
  tables: state.db.tables
})

const mapDispatchToProps = (dispatch: any, ) => ({
  setCurrentTableName: (tableName: string) => {
    dispatch(setCurrentTableName(tableName))
  }
})

export default connect<{}, {}, any>(mapStateToProps, mapDispatchToProps)(TabBar)

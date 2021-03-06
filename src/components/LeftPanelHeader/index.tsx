import * as React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Select, Button } from 'antd'
const Option = Select.Option

// import { fakeListDb } from '../../db'
import { listDb } from '../../db'

export interface LeftPanelHeaderProps extends React.Props<any> {
  setCurrentDbName: (dbName: string) => void,
  setCurrentTableName: (tableName: string) => void
}

export interface LeftPanelHeaderState {
  dbList: object,
  value: string
}

class LeftPanelHeader extends React.PureComponent<LeftPanelHeaderProps, LeftPanelHeaderState> {
  constructor(props: LeftPanelHeaderProps) {
    super(props)
    this.state = {
      dbList: [],
      value: ''
    }
  }
  componentDidMount() {
    this.refresh()
  }
  handleChange = (value: string) => {
    this.props.setCurrentDbName(value)
    this.setState({
      value
    })
  }
  render() {
    const { dbList, value } = this.state

    return (
      <div>
        <Row gutter={8}>
          <Col span={18}>
            <Select
              showSearch
              style={{ width: '100%' }}
              value={value}
              onChange={this.handleChange}
            >
              {Object.keys(dbList).map((dbName: string, idx: number) => {
                return <Option value={dbName} key={idx}>{`${dbName} (version: ${dbList[dbName].toString()})`}</Option>
              })}
            </Select>
          </Col>
          <Col span={6}>
            <Button icon='sync' onClick={this.refresh}>refresh</Button>
          </Col>
        </Row>
      </div>
    )
  }
  private refresh = () => {
    listDb().then((dbList) => {
      const dbNameList = Object.keys(dbList)
      this.setState({
        dbList
      })
      if (dbList) {
        this.setState({
          value: dbNameList[0]
        })
        this.props.setCurrentDbName(dbNameList[0])
      }
    })

  }
}

import { setCurrentDbName, setCurrentTableName } from '../../actions'

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentDbName: (dbName: string) => {
      dispatch(setCurrentDbName(dbName))
    },
    setCurrentTableName: (tableName: string) => {
      dispatch(setCurrentTableName(tableName))
    }
  }
}

export default connect<{}, {}, any>(() => {return{}}, mapDispatchToProps)(LeftPanelHeader)

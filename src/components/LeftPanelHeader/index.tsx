import * as React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Select, Button } from 'antd'
const Option = Select.Option

import { fakeListDb } from '../../db'
// import { listDb } from '../../db'

class LeftPanelHeader extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      dbList: [],
      value: ''
    }
  }
  componentDidMount() {
    this.refresh()
  }
  handleChange = (value: any) => {
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
              {dbList.map((dbName: string, idx: number) => {
                return <Option value={dbName} key={idx}>{dbName}</Option>
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
    fakeListDb().then((dbList) => {
      this.setState({
        dbList: Object.keys(dbList)
      })
      if (dbList) {
        this.setState({
          value: Object.keys(dbList)[0]
        })
        this.props.setCurrentDbName(Object.keys(dbList)[0])
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

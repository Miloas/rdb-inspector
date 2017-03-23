import * as React from 'react'
import { Select, Button, Row, Col } from 'antd'
const Option = Select.Option

import { fakeListDb } from '../../db'
// import { listDb } from '../../db'

import './style.css'

export default class LeftPanel extends React.PureComponent<any, any> {
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
    this.props.saveCurrentDbName(value)
    this.setState({
      value
    })
  }
  render() {
    const { dbList, value } = this.state

    return (
      <div className='left-panel'>
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
        this.setState({
          value: Object.keys(dbList)[0]
        })
        this.props.saveCurrentDbName(Object.keys(dbList)[0])
      }
    })
  }

}

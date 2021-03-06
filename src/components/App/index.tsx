import * as React from 'react'
import { Row, Col } from 'antd'

import LeftPanel from '../leftPanel'
import RightPanel from '../RightPanel'

import 'antd/dist/antd.css'

export default class App extends React.Component<void, void> {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <LeftPanel />
          </Col>
          <Col span={16}>
            <RightPanel />
          </Col>
        </Row>
      </div>
    )
  }
}

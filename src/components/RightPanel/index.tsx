import * as React from 'react'

import TabBar from '../TabBar'
import Content from '../Content'

export default class RightPanel extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div>
        <TabBar />
        <Content />
      </div>
    )
  }
}

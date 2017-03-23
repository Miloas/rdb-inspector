import * as React from 'react'

import TabBar from '../../containers/tabBarContainer'
import Content from '../../containers/contentContainer'

export default class RightPanel extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      content: ''
    }
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

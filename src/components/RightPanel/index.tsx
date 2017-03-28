import * as React from 'react'

import TabBar from '../TabBar'
import Content from '../Content'

export default class RightPanel extends React.PureComponent<void, void> {
  render() {
    return (
      <div>
        <TabBar />
        <Content />
      </div>
    )
  }
}

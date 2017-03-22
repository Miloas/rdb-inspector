import * as React from 'react'
import * as CSSModules from 'react-css-modules'

import TabBar from '../../containers/tabBarContainer'
import Content from '../Content'

const styles = require('./style.css')

import { fakeGetRows } from '../../db'

@CSSModules(styles)
export default class RightPanel extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      content: ''
    }
  }
  componentDidMount() {
    fakeGetRows('', '', 1, 1).then((result) => {
      const content = JSON.stringify(result)
      this.setState({
        content
      })
    })
  }
  render() {
    return (
      <div styleName='right-panel'>
        <TabBar />
        <Content>
          { this.state.content }
        </Content>
      </div>
    )
  }
}

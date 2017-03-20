import * as React from 'react'
import * as CSSModules from 'react-css-modules'

import TabBar from '../TabBar'
import Content from '../Content'

const styles = require('./style.css')

@CSSModules(styles)
export default class RightPanel extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const content = `
      {
        name: 123
      }
    `
    return (
      <div styleName='right-panel'>
        <TabBar tables={ tables } />
        <Content>
          { content }
        </Content>
      </div>
    )
  }
}

const tables = [
  { name: 'user' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'posts' },
  { name: 'user' }
]

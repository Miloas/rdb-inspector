import * as React from 'react'
import * as CSSModules from 'react-css-modules'

const styles = require('./style.css')

@CSSModules(styles)
export default class Content extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div>
        <pre>
          { this.props.children }
        </pre>
      </div>
    )
  }
}

import * as React from 'react'
import * as CSSModuldes from 'react-css-modules'


const styles = require('./style.css')

@CSSModuldes(styles)
export default class LeftPanel extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div styleName='left-panel'>
        <div styleName='left-panel-container'>
          <span><small>@Database name: </small></span>
          <select styleName='left-panel-select'>
            <option value='1123'>1123</option>
            <option value='1124'>1124</option>
            <option value='1125'>1125</option>
          </select>
          <br />
          <span><small>@version: 0 </small></span>
        </div>
      </div>
    )
  }
}

import * as React from 'react'
import * as CSSMoudles from 'react-css-modules'
import * as cx from 'classnames'

const FaTable = require('react-icons/lib/fa/table')

const styles = require('./style.css')

@CSSMoudles(styles)
export default class Tab extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
  }
  getClassName = () => {
    return cx({
      [styles['tab-selected']]: this.props.idx === this.props.selectedIdx
    })
  }
  handleClick = () => {
    this.props.saveSelectedIdx(this.props.idx)
    this.props.saveCurrentTableName(this.props.tableName)
  }
  render() {
    return (
      <div styleName='tab-item' className={this.getClassName()} onClick={this.handleClick}>
        <small><FaTable /></small> { this.props.tableName }
      </div>
    )
  }
}

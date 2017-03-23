import * as React from 'react'

import { fakeGetRows } from '../../db'

export default class Content extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      content: ''
    }
  }
  shouldComponentUpdate(newValue: any) {
    if (newValue.currentTableName === this.props.currentTableName) {
      return false
    }
    return true
  }
  componentWillReceiveProps(newValue: any) {
    if (this.props.currentTableName === newValue.currentTableName) {
      return
    }
    const { currentDbName, currentTableName } = newValue
    fakeGetRows(currentDbName, currentTableName, 1, 1).then((result) => {
      const content = JSON.stringify(result)
      this.setState({
        content
      })
    })
  }
  componentDidMount() {
    const { currentDbName, currentTableName } = this.props
    fakeGetRows(currentDbName, currentTableName, 1, 1).then((result) => {
      const content = JSON.stringify(result)
      this.setState({
        content
      })
    })
  }
  render() {
    console.info(this.props)
    return (
      <div>
        <pre>
          {this.state.content}
        </pre>
      </div>
    )
  }
}

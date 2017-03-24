import * as React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'

import { shallowEqual } from '../../utils'
import * as config from '../../config'

class Content extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
  }
  shouldComponentUpdate(newProps: any) {
    const { contents } = this.props
    if (!contents && newProps.contents) {
      return true
    }
    if (!contents && !newProps.contents) {
      return false
    }
    if (!shallowEqual(newProps.contents[0], contents[0])) {
      return true
    }
    return false
  }
  handleTableChange = (pagination: any) => {
    this.props.savePageNumber(pagination.current)
  }
  render() {
    const { tables, currentTableName, pageNumber, contents } = this.props
    const pagination = {
      pageSize: config.pageSize,
      total: tables ? tables[currentTableName] : undefined,
      current: pageNumber
    }
    return (
      <div>
        <pre>
          {this.renderTable(contents, pagination)}
        </pre>
      </div>
    )
  }
  private renderTable = (contents: any, pagination: any) => {
    if (!contents) {
      return ''
    }
    if (contents.length === 0) {
      return ''
    }
    const headers = Object.keys(contents[0]).map((header: any, idx: number, arr: any) => {
      const ret = {
        title: header,
        dataIndex: header,
        key: header
      }
      if (idx === 0) {
        ret['fixed'] = 'left'
      } else if (idx === arr.length - 1) {
        ret['fixed'] = 'right'
      }
      return ret
    })
    const data = contents.map((content: any, idx: any) => {
      const ret = {}
      for (const x in content) {
        if (typeof content[x] === 'object') {
          ret[x] = JSON.stringify(content[x])
        } else {
          ret[x] = content[x]
        }
      }
      return {
        ...ret,
        key: String(idx)
      }
    })
    return <Table
      columns={headers}
      pagination={pagination}
      dataSource={data}
      onChange={this.handleTableChange}
      scroll={{ x: 1300 }} />
  }
}

import { setCurrentPageNumber } from '../../actions'

const mapStateToProps = (state: any) => ({
  currentDbName: state.db.dbName,
  currentTableName: state.db.tableName,
  contents: state.db.rows,
  tables: state.db.tableNames,
  pageNumber: state.db.pageNumber
})

const mapDispatchToProps = (dispatch: any) => ({
  savePageNumber: (pageNumber: number) => dispatch(setCurrentPageNumber(pageNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)

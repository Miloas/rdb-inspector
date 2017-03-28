import * as React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'

// import { shallowEqual } from '../../utils'
import * as config from '../../config'

type tableType = {
  [name: string]: number
}

type paginationType = {
  pageSize: number,
  current: number,
  total: number
}

export interface ContentProps extends React.Props<any> {
  currentDbName: string,
  currentTableName: string,
  contents: object[],
  tables: tableType,
  pageNumber: number,
  setPageNumber: (pageNumber: number) => void
}

class Content extends React.PureComponent<ContentProps, void> {
  constructor(props: ContentProps) {
    super(props)
  }
  // shouldComponentUpdate(newProps: ContentProps) {
  //   const { contents } = this.props
  //   if (!contents && newProps.contents) {
  //     return true
  //   }
  //   if (!contents && !newProps.contents) {
  //     return false
  //   }
  //   if (!shallowEqual(newProps.contents[0], contents[0])) {
  //     return true
  //   }
  //   return false
  // }
  handleTableChange = (pagination: paginationType) => {
    this.props.setPageNumber(pagination.current)
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
  private renderTable = (contents: object[], pagination: paginationType) => {
    if (!contents) {
      return ''
    }
    if (contents.length === 0) {
      return ''
    }
    const headers = Object.keys(contents[0]).map((header: string, idx: number, arr: string[]) => {
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
    const data = contents.map((content: any, idx: number): any => {
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
  tables: state.db.tables,
  pageNumber: state.db.pageNumber
})

const mapDispatchToProps = (dispatch: any) => ({
  setPageNumber: (pageNumber: number) => dispatch(setCurrentPageNumber(pageNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)

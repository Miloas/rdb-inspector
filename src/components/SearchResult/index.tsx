import * as React from 'react'
import { Table, Modal } from 'antd'
import { connect } from 'react-redux'

import * as config from '../../config'
import './style.css'

type tableType = {
  [name: string]: number
}

type paginationType = {
  pageSize: number,
  current: number,
  total: number
}

export interface SearchResultState {
  visible: boolean,
  detailColumn: string
}

export interface SearchResultProps extends React.Props<any> {
  currentDbName: string,
  currentTableName: string,
  rows: object[],
  tables: tableType,
  pageNumber: number,
  setPageNumber: (pageNumber: number) => void
}

class SearchResult extends React.PureComponent<SearchResultProps, SearchResultState> {
  constructor(props: SearchResultProps) {
    super(props)
    this.state = {
      visible: false,
      detailColumn: ''
    }
  }

  // shouldComponentUpdate(newProps: ContentProps) {
  //   if (newProps.pageNumber !== this.props.pageNumber ||
  //       newProps.currentDbName !== this.props.currentDbName ||
  //       newProps.currentTableName !== this.props.currentTableName) {
  //     return true
  //   }
  //   if (newProps.rows !== undefined && this.props.rows === undefined) {
  //     return true
  //   }
  //   return false
  // }

  handleTableChange = (pagination: paginationType) => {
    this.props.setPageNumber(pagination.current)
  }
  handleOk = () => {
    this.setState({
      visible: false
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  showModal = (text: string) => {
    return () => {
      this.setState({
        visible: true,
        detailColumn: text
      })
    }
  }
  render() {
    const { tables, currentTableName, pageNumber, rows } = this.props
    const pagination = {
      pageSize: config.pageSize,
      total: tables ? tables[currentTableName] : undefined,
      current: pageNumber
    }
    return (
      <div>
        <pre>
          {this.renderTable(rows, pagination)}
        </pre>
        <Modal title='Detail' visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <pre className='detail-json'>
            {this.state.detailColumn}
          </pre>
        </Modal>
      </div>
    )
  }
  private renderTable = (rows: object[], pagination: paginationType) => {
    if (!rows) {
      return ''
    }
    if (rows.length === 0) {
      return ''
    }
    const headers = Object.keys(rows[0]).map((header: string, idx: number, arr: string[]) => {
      const ret = {
        title: header,
        dataIndex: header,
        key: header,
        render: (text: any) => {
          if (text.type === 'object' && text.value !== 'null') {
            return <a href='#' onClick={this.showModal(text.value)}>{'Object'}</a>
          }
          if (text.value.length < 29) {
            return text.value
          }
          return <a href='#' onClick={this.showModal(text.value)}>{`${text.value.substr(0, 5)}..`}</a>
        }
      }
      if (idx === 0) {
        ret['fixed'] = 'left'
      } else if (idx === arr.length - 1) {
        ret['fixed'] = 'right'
      }
      return ret
    })
    const data = rows.map((row: any, idx: number): any => {
      const ret = {}
      for (const x in row) {
        if (typeof row[x] === 'object') {
          ret[x] = { value: JSON.stringify(row[x], null, '\t'), type: 'object' }
        } else {
          ret[x] = { value: String(row[x]), type: 'string' }
        }
      }
      return {
        ...ret,
        key: String(idx)
      }
    })
    return <Table
      size='middle'
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
  rows: state.db.rows,
  tables: state.db.tables,
  pageNumber: state.db.pageNumber
})

const mapDispatchToProps = (dispatch: any) => ({
  setPageNumber: (pageNumber: number) => dispatch(setCurrentPageNumber(pageNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)

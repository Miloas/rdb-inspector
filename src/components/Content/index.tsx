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

export interface ContentState {
  visible: boolean,
  detailColumn: string
}

export interface ContentProps extends React.Props<any> {
  currentDbName: string,
  currentTableName: string,
  contents: object[],
  tables: tableType,
  pageNumber: number,
  setPageNumber: (pageNumber: number) => void
}

class Content extends React.PureComponent<ContentProps, ContentState> {
  constructor(props: ContentProps) {
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
  //   if (newProps.contents !== undefined && this.props.contents === undefined) {
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
          <Modal title='Detail' visible={this.state.visible}
            onOk={this.handleOk} onCancel={this.handleCancel}
          >
          <pre className='detail-json'>
            { this.state.detailColumn }
          </pre>
          </Modal>

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
        key: header,
        render: (text: any) => {
          if (text.type === 'object') {
            return <a href='#' onClick={this.showModal(text.value)}>{ 'Object' }</a>
          }
          if (text.value.length < 29) {
            return text.value
          }
          return <a href='#' onClick={this.showModal(text.value)}>{ `${text.value.substr(0, 5)}..` }</a>
        }
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
          ret[x] = { value: JSON.stringify(content[x], null, '\t'), type: 'object' }
        } else {
          ret[x] = { value: String(content[x]), type: 'string' }
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

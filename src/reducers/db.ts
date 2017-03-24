export default (state = {}, action: any) => {
  switch (action.type) {
    case 'SET_TABLES':
      return { ...state, tableNames: action.tableNames }
    case 'SET_ROWS':
      return { ...state, rows: action.rows }
    case 'SET_CURRENT_DBNAME':
      return { ...state, dbName: action.dbName }
    case 'SET_CURRENT_TABLENAME':
      return { ...state, tableName: action.tableName }
    case 'SET_CURRENT_PAGE_NUMBER':
      return { ...state, pageNumber: action.pageNumber }
    default:
      return state
  }
}

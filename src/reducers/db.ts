export default (state = {}, action: any) => {
  switch (action.type) {
    case 'GET_TABLES':
      return { ...state, tableNames: action.tableNames }
    case 'SAVE_CURRENT_DBNAME':
      return { ...state, dbName: action.dbName }
    case 'SAVE_CURRENT_TABLENAME':
      return { ...state, tableName: action.tableName }
    default:
      return state
  }
}

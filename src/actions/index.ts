export const setCurrentDbName = (dbName: string) => ({
  type: 'SET_CURRENT_DBNAME',
  dbName
})

export const setCurrentTableName = (tableName: string) => ({
  type: 'SET_CURRENT_TABLENAME',
  tableName
})

export const setCurrentPageNumber = (pageNumber: number) => ({
  type: 'SET_CURRENT_PAGE_NUMBER',
  pageNumber
})

export const setTables = (tableNames: string[]) => ({
  type: 'SET_TABLES',
  tableNames
})

export const setRows = (rows: any) => ({
  type: 'SET_ROWS',
  rows
})

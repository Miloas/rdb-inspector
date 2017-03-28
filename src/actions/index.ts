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

export const setTables = (tables: object[]) => ({
  type: 'SET_TABLES',
  tables
})

export const setRows = (rows: object[]) => ({
  type: 'SET_ROWS',
  rows
})

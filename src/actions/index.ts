export const displayMessage = (message: string) => ({
  type: 'SEND_MESSAGE',
  message
})

export const foo = () => ({
  type: 'FOO'
})

export const saveSelected = (idx: number) => ({
  type: 'SAVE_SELECTED',
  idx
})

export const saveCurrentDbName = (dbName: string) => ({
  type: 'SAVE_CURRENT_DBNAME',
  dbName
})

export const saveCurrentTableName = (tableName: string) => ({
  type: 'SAVE_CURRENT_TABLENAME',
  tableName
})

export const getTables = (tableNames: string[]) => ({
  type: 'GET_TABLES',
  tableNames
})

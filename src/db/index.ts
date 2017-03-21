const evalFn = 'window.top[\'#lfInspect\']'

export const listDb = () => {
  const evalStatement = `${evalFn}(null, null)`
  return new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(
      evalStatement,
      (results: string, exception: any) => {
        try {
          const dbList = JSON.parse(results)
          resolve(dbList)
        } catch (e) {
          reject(e)
        }
        reject(exception)
      }
    )
  })
}

export const selectDb = (dbName: string) => {
  const evalStatement = `${evalFn}(${dbName}, null)`
  // $('#db_version').text = dbList[dbName].toString()
  return new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(
      evalStatement,
      (results: string, exception: any) => {
        try {
          const tableList = JSON.parse(results)
          resolve(tableList)
        } catch (e) {
          reject(e)
        }
        reject(exception)
      }
    )
  })
}

// //@return how many rows
// const selectTable = (tableName) => {
//   return tableList[tableName]
// }

export const getRows = (dbName: string, tableName: string, numberPerPage: number, pageNumber: number) => {
  const evalStatement = `${evalFn}(${dbName}, ${tableName}, ${numberPerPage}, ${(pageNumber - 1) * numberPerPage})`
  return new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(
      evalStatement,
      (results: string, exception: any) => {
        let contents = []
        try {
          contents = JSON.parse(results)
          resolve(contents)
        } catch (e) {
          reject(e)
        }
        reject(exception)
      }
    )
  })
}

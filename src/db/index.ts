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

export const fakeListDb = () => {
  const dbs = {
    'tb0': 1,
    'tb1': 1
  }
  return new Promise((resolve) => {
    resolve(dbs)
  })
}

export const fakeSelectDb = (dbName: string) => {
  const tables1 = {
    'user': 1,
    'post': 1
  }
  const tables2 = {
    'lalala': 1,
    'haha': 2
  }
  return new Promise((resolve) => {
    if (dbName === 'tb0') {
      resolve(tables1)
    }
    if (dbName === 'tb1') {
      resolve(tables2)
    }
  })
}

export const fakeGetRows = (dbName: string, tableName: string, numberPerPage: number, pageNumber: number) => {
  const contents = {
    'name': 123
  }
  console.info(dbName, tableName, numberPerPage, pageNumber)
  return new Promise((resolve) => {
    resolve(contents)
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

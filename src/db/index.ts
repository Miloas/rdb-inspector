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
  const evalStatement = `${evalFn}("${dbName}", null)`
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
    'post': 3
  }
  const tables2 = {
    'lalala': 1,
    'haha': 1
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

export const fakeGetRows = (_: string, tableName: string, numberPerPage: number, page: number) => {
  const post = [{
    'post': 123
  },
  {
    'post': 234
  },
  {
    'post': 345
  }]
  const user = [{
    'user': 234
  }]
  const haha = [{
    'haha': 345
  }]
  const lalala = [{
    'lalala': 456
  }]
  return new Promise((resolve) => {
    if (tableName === 'post') {
      resolve(post.slice((page - 1) * numberPerPage, page * numberPerPage))
    }
    if (tableName === 'user') {
      resolve(user)
    }
    if (tableName === 'haha') {
      resolve(haha)
    }
    if (tableName === 'lalala') {
      resolve(lalala)
    }
  })
}

// //@return how many rows
// const selectTable = (tableName) => {
//   return tableList[tableName]
// }

export const getRows = (dbName: string, tableName: string, numberPerPage: number, pageNumber: number) => {
  const evalStatement = `${evalFn}("${dbName}", "${tableName}", ${numberPerPage}, ${(pageNumber - 1) * numberPerPage});`
  alert(evalStatement)
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

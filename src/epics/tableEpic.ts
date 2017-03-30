import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/frompromise'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'

// import { fakeSelectDb, fakeGetRows } from '../db'
import { setTables, setCurrentTableName, setRows } from '../actions'
import { selectDb, getRows } from '../db'
import * as config from '../config'

export const getTablesEpic = (action$: any) => {
  return action$.ofType('SET_CURRENT_DBNAME')
    .switchMap((action: any) =>
      Observable.fromPromise(selectDb(action.dbName))
        .switchMap((result: any): any => {
          const tableNames = Object.keys(result).sort()
          return [setTables(result), setCurrentTableName(tableNames[0])]
        }))
}

export const getInitRowsEpic = (action$: any, store: any) => {
  return action$.ofType('SET_CURRENT_TABLENAME')
    .switchMap((action: any) => {
      return Observable.fromPromise(getRows(store.getState().db.dbName, action.tableName, config.pageSize, 1))
        .map((result: any) => setRows(result))
    })
}

export const getRowsEpic = (action$: any, store: any) => {
  return action$.ofType('SET_CURRENT_PAGE_NUMBER')
    .switchMap((action: any) => {
      return Observable.fromPromise(getRows(store.getState().db.dbName, store.getState().db.tableName, config.pageSize, action.pageNumber))
        .map((result: any) => setRows(result))
    })
}


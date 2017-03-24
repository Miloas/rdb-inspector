import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/frompromise'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'

import { fakeSelectDb, fakeGetRows } from '../db'
import { setTables, setCurrentTableName, setRows } from '../actions'
// import { selectDb } from '../db'
import * as config from '../config'

export const getTablesEpic = (action$: any) => {
  return action$.ofType('SET_CURRENT_DBNAME')
    .mergeMap((action: any) =>
      Observable.fromPromise(fakeSelectDb(action.dbName))
        .mergeMap((result: any): any => {
          const tableNames = Object.keys(result).sort()
          return [setTables(result), setCurrentTableName(tableNames[0])]
        }))
}

export const getInitRowsEpic = (action$: any, store: any) => {
  return action$.ofType('SET_CURRENT_TABLENAME')
    .mergeMap((action: any) => {
      return Observable.fromPromise(fakeGetRows(store.getState().db.dbName, action.tableName, config.pageSize, 1))
        .map((result: any) => setRows(result))
    })
}

export const getRowsEpic = (action$: any, store: any) => {
  return action$.ofType('SET_CURRENT_PAGE_NUMBER')
    .mergeMap((action: any) => {
      return Observable.fromPromise(fakeGetRows(store.getState().db.dbName, store.getState().db.tableName, config.pageSize, action.pageNumber))
        .map((result: any) => setRows(result))
    })
}


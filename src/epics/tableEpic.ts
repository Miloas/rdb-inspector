import 'rxjs'
import * as Rx from 'rxjs'

import { fakeSelectDb } from '../db'
import { getTables } from '../actions'
// import { selectDb } from '../db'

export const getTablesEpic = (action$: any) =>
  action$.ofType('SAVE_CURRENT_DBNAME')
         .mergeMap((action: any) =>
            Rx.Observable.fromPromise(fakeSelectDb(action.dbName))
                         .map((result: any) => getTables(Object.keys(result))))


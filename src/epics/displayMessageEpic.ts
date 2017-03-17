import 'rxjs'
export const displayMessageEpic = (action$: any) =>
  action$.ofType('SEND_MESSAGE')
         .delay(200)
         .mapTo({ type: 'FOO' })

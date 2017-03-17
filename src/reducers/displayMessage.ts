export default (state = {}, action: any) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return { message: action.message }
    case 'FOO':
      return { message: 'FOO' }
    default:
      return state
  }
}

export default (state = {}, action: any) => {
  switch (action.type) {
    case 'SAVE_SELECTED':
      return { idx: action.idx }
    default:
      return state
  }
}

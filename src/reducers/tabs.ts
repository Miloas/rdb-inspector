export default (state = { idx: 0 }, action: any) => {
  switch (action.type) {
    case 'SAVE_SELECTED':
      return { idx: action.idx }
    default:
      return state
  }
}

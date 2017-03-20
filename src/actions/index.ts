export const displayMessage = (message: string) => ({
  type: 'SEND_MESSAGE',
  message
})

export const foo = () => ({
  type: 'FOO'
})

export const saveSelected = (idx: number) => ({
  type: 'SAVE_SELECTED',
  idx
})

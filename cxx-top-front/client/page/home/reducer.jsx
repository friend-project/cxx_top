const LANG = 'LANG'

const set = res => ({
  type: LANG,
  res,
})

export const setLang = res => (dispatch) => {
  dispatch(
    set(res),
  )
}


export const lang = (
  state = 'cn',
  action,
) => {
  switch (action.type) {
    case LANG:
      return action.res
    default:
      return state
  }
}

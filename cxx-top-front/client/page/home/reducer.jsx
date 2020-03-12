const LANG = 'LANG'
const AUTO_PLAY = 'AUTO_PLAY'

const set = res => ({
  type: LANG,
  res,
})

const setAuto = res => ({
  type: AUTO_PLAY,
  res,
})

export const setLang = res => (dispatch) => {
  dispatch(
    set(res),
  )
}

export const setAutoPlay = res => (dispatch) => {
  dispatch(
    setAuto(res),
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

export const autoPlay = (
  state = true,
  action,
) => {
  switch (action.type) {
    case AUTO_PLAY:
      return action.res
    default:
      return state
  }
}

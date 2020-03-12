import { combineReducers } from 'redux'

import { lang, autoPlay } from 'page/home/reducer'

export default combineReducers({
  autoPlay,
  lang,
})

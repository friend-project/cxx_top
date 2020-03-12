import React, {
  useState,
} from 'react'

import { useDispatch } from 'react-redux'

import { setAutoPlay } from 'page/home/reducer'

import './style.scss'

export default (props) => {
  const dispatch = useDispatch()
  const [pop, setPop] = useState(false)
  const show = () => {
    dispatch(setAutoPlay(false))
    setPop(true)
    setTimeout(() => {
      dispatch(setAutoPlay(true))
      props.history.push('/life')
    }, 1000)
  }

  return (
    <div
      className="swiper-life"
    >
      <span
        className={pop ? 'img pop' : 'img'}
        onClick={() => show()}
      />
      <p
        className="tit"
      >巢品TOPPING白酒</p>
    </div>
  )
}

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
    props.history.push('#c')
    setPop(true)
    setPop(true)
    setTimeout(() => {
      dispatch(setAutoPlay(true))
      props.history.push('/clothing#c')
    }, 1000)
  }

  return (
    <div
      className="swiper-clothing"
    >
      <span
        className={pop ? 'img pop' : 'img'}
        onClick={() => show()}
      />
      <p
        className="tit"
      >服装和饰品</p>
    </div>
  )
}

import React, {
  useState,
} from 'react'

import './style.scss'

export default (props) => {
  const [pop, setPop] = useState(false)
  const show = () => {
    setPop(true)
  }

  const jump = () => {
    props.history.push('/life')
  }

  return (
    <div
      className="swiper-life"
    >
      <span
        className="img"
        onClick={() => show()}
      />
      <p
        className="tit"
      >巢品TOPPING白酒</p>
      <div
        className={pop ? 'pop show' : 'pop'}
        onClick={() => jump()}
      />
    </div>
  )
}

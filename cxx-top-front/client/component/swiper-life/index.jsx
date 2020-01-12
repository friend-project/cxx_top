import React, {
  useState,
} from 'react'

import './style.scss'

export default (props) => {
  const [pop, setPop] = useState(false)
  const show = () => {
    if (pop) {
      props.history.push('/life')
    } else {
    setPop(true)
    }
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

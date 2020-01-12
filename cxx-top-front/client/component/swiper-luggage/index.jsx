import React, {
  useState,
} from 'react'

import './style.scss'

export default (props) => {
  const [pop, setPop] = useState(false)
  const show = () => {
    if (pop) {
      props.history.push('/luggage')
    } else {
      setPop(true)
    }
  }

  return (
    <div
      className="swiper-luggage"
    >
      <span
        className={pop ? 'img pop' : 'img'}
        onClick={() => show()}
      />
      <p
        className="tit"
      >箱包</p>
    </div>
  )
}

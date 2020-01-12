import React, {
  useState,
} from 'react'

import './style.scss'

export default (props) => {
  const [pop, setPop] = useState(false)
  const show = () => {
    if (pop) {
      props.history.push('/clothing#c')
    } else {
      props.history.push('#c')
      setPop(true)
    }
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

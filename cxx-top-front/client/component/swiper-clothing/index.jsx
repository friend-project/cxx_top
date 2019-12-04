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
    props.history.push('/clothing')
  }

  return (
    <div
      className="swiper-clothing"
    >
      <span
        className="img"
        onClick={() => show()}
      />
      <p
        className="tit"
      >服装和饰品</p>
      <div
        className={pop ? 'pop show' : 'pop'}
        onClick={() => jump()}
      />
    </div>
  )
}

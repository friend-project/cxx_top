import React, {
  useState,
} from 'react'

import './style.scss'

export default (props) => {
  const jump = () => {
    props.history.push('/brand')
  }

  return (
    <div
      className="swiper-brand"
    >
      <span
        className="img"
        onClick={() => jump()}
      />
      <p className="tit"/>
    </div>
  )
}

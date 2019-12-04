import React from 'react'
import Swiper from 'react-id-swiper'

import SwiperLife from 'component/swiper-life'
import SwiperBrand from 'component/swiper-brand'
import SwiperClothing from 'component/swiper-clothing'

import './style.scss'

export default (props) => {
  const params = {
    direction: 'vertical',
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
  }

  return (
    <div className="swiper">
      <Swiper
        {...params}
      >
        <div>
          <SwiperLife {...props} />
        </div>
        <div>
          <SwiperBrand {...props} />
        </div>
        <div>
          <SwiperClothing {...props} />
        </div>
      </Swiper>
      <div className="line" />
      {/* 待切换 */}
      <div
        className="lang"
      >
        <span
          className="cn act"
        />
        <span
          className="en"
        />
      </div>
    </div>
  )
}

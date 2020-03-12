import React from 'react'
import Swiper from 'react-id-swiper'
import { useSelector, useDispatch } from 'react-redux'

import SwiperLife from 'component/swiper-life'
import SwiperBrand from 'component/swiper-brand'
import SwiperClothing from 'component/swiper-clothing'
import SwiperLuggage from 'component/swiper-luggage'

import { setLang } from './reducer'

import './style.scss'

export default (props) => {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.lang)
  const { autoPlay } = useSelector(state => state)
  console.log(autoPlay)
  const params = {
    direction: 'horizontal',
    effect: 'fade',
    autoplay: autoPlay ? { delay: 5000 } : false,
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
        <div>
          <SwiperLuggage {...props} />
        </div>
      </Swiper>
      <div className="line" />
      {/* 待切换 */}
      <div
        className="lang"
      >
        {
          ['cn', 'en'].map(
            v => (
              <span
                className={lang === v ? `${v} act` : v}
                onClick={() => dispatch(setLang(v))}
              />
            )
          )
        }
      </div>
    </div>
  )
}

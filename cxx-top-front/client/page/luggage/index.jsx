import React, {
  useEffect,
  useState,
} from 'react'
import { useSelector } from 'react-redux'

import { img } from 'config/config'

import './style.scss'

export default (props) => {
  const lang = useSelector(state => state.lang)

  return (
    <>
      <div className={`luggage`} />
      <div className="luggage_show">
        <img src={`${img}image_${lang}/luggage/1.jpg`} />
        <img src={`${img}image_${lang}/luggage/2.jpg`} />
        <img src={`${img}image_${lang}/luggage/3.jpg`} />
      </div>
    </>
  )
}

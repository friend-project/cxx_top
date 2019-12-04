import React, {
  useState,
} from 'react'

import { img } from 'config/config'

import './style.scss'

export default () => {
  const jump = (v) => {
    window.open(`${v}`, '_blank')
  }
  return (
    <div className="bug">
      <div className="logo" />
      <div
        className="tianmao"
        onClick={() => jump('https://chaopinjl.tmall.com/?spm=a1z10.1-b-s.1997427721.d4918089.65ab421dGxLPH5')}
      />
      <div
        className="jingdong"
        onClick={() => jump('https://mall.jd.com/index-908526.html')}
      />
      <div className="mendian" />
    </div>
  )
}
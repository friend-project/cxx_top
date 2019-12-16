import React, {
  useState,
} from 'react'
import { useSelector } from 'react-redux'

import { img } from 'config/config'

import './style.scss'

export default () => {
  const lang = useSelector(state => state.lang)
  const [tab, setTab] = useState('品牌故事')

  return (
    <>
      <div className={`brand ${tab}`}>
        <ul className="tab">
          {
            ['品牌故事', '品牌愿景'].map(
              v => (
                <li
                  className={tab === v ? 'active' : ''}
                  onClick={() => setTab(v)}
                >
                  {v}
                </li>
              )
            )
          }
        </ul>
      </div>
      {
        tab === '品牌故事'
          ? (
            <div className="brand_show">
              <img src={`${img}image_${lang}/pinpai/2.png`} />
            </div>
          ) : null
      }
      {
        tab === '品牌愿景'
          ? (
            <div className="brand_show">
              <img src={`${img}image_${lang}/pinpai/1.png`} />
            </div>
          ) : null
      }
    </>
  )
}

import React, {
  useEffect,
  useState,
} from 'react'
import { useSelector } from 'react-redux'

import { img } from 'config/config'

import './style.scss'

export default (props) => {
  const lang = useSelector(state => state.lang)
  const [tab, setTab] = useState('a')

  const setT = (v) => {
    setTab(v)
  }

  useEffect(() => {
    if (['c', 'd'].indexOf(tab) > -1) {
      props.history.push('#c')
    } else {
      props.history.push('#')
    }
  }, [tab])

  return (
    <>
      <div className={`life ${tab}`}>
        <ul className="tab">
          {
            ['a', 'b', 'c', 'd', 'e', 'f'].map(
              v => (
                <li
                  className={tab === v ? 'active' : ''}
                  onClick={() => setT(v)}
                />
              )
            )
          }
        </ul>
      </div>
      {
        tab === 'a'
          ? (
            <div className="life_show">
              {
                [2, 3, 4, 5, 6, 7, 8].map(
                  v => (
                    <div className={`life_show_${v}`} />
                  ),
                )
              }
            </div>
          ) : null
      }
      {
        tab === 'a'
          ? (
            <div className="life_show">
              <img src={`${img}image_${lang}/rensheng53/1.png`} />
              <img src={`${img}image_${lang}/rensheng53/2.png`} />
              <img src={`${img}image_${lang}/rensheng53/3.png`} />
              <img src={`${img}image_${lang}/rensheng53/4.png`} />
              <img src={`${img}image_${lang}/rensheng53/5.png`} />
              <img src={`${img}image_${lang}/rensheng53/6.png`} />
            </div>
          ) : null
      }
      {
        tab === 'b'
          ? (
            <div className="ranliao_show">
              <img src={`${img}image_${lang}/ranliao/1.png`} />
              <img src={`${img}image_${lang}/ranliao/2.png`} />
              <img src={`${img}image_${lang}/ranliao/3.png`} />
              <img src={`${img}image_${lang}/ranliao/4.png`} />
            </div>
          ) : null
      }
      {
        tab === 'c'
          ? (
            <div className="duwu_show">
              <img src={`${img}image_${lang}/duwu/1.png`} />
              <img src={`${img}image_${lang}/duwu/2.png`} />
              <img src={`${img}image_${lang}/duwu/3.png`} />
              <img src={`${img}image_${lang}/duwu/4.png`} />
            </div>
          ) : null
      }
      {
        tab === 'd'
          ? (
            <div className="jijie_show">
              <img src={`${img}image_${lang}/jijie/1.png`} />
              <img src={`${img}image_${lang}/jijie/2.png`} />
              <img src={`${img}image_${lang}/jijie/3.png`} />
              <img src={`${img}image_${lang}/jijie/4.png`} />
              <img src={`${img}image_${lang}/jijie/5.png`} />
              <img src={`${img}image_${lang}/jijie/6.png`} />
            </div>
          ) : null
      }
      {
        tab === 'e'
          ? (
            <div className="xianliang_show">
              <img src={`${img}image_${lang}/renshengxianliang/1.png`} />
              <img src={`${img}image_${lang}/renshengxianliang/2.png`} />
              <img src={`${img}image_${lang}/renshengxianliang/3.png`} />
              <img src={`${img}image_${lang}/renshengxianliang/4.png`} />
              <img src={`${img}image_${lang}/renshengxianliang/5.png`} />
              <img src={`${img}image_${lang}/renshengxianliang/6.png`} />
            </div>
          ) : null
      }
      {
        tab === 'f'
          ? (
            <div className="rensheng42_show">
              <img src={`${img}image_${lang}/rensheng42/1.png`} />
              <img src={`${img}image_${lang}/rensheng42/2.png`} />
              <img src={`${img}image_${lang}/rensheng42/3.png`} />
              <img src={`${img}image_${lang}/rensheng42/4.png`} />
              <img src={`${img}image_${lang}/rensheng42/5.png`} />
            </div>
          ) : null
      }
    </>
  )
}

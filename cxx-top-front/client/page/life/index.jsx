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
        {
          tab === 'a'
            ? (
              <div className="life_ani">
                <img src={`${img}image_${lang}/life_ani/life_ani_1.jpg`} />
                <img src={`${img}image_${lang}/life_ani/life_ani_2.jpg`} />
              </div>
            ) : null
        }
        {
          tab === 'b'
            ? (
              <div className="ranliao_ani">
                <img src={`${img}image_${lang}/life_ani/ranliao_ani_1.jpg`} />
                <img src={`${img}image_${lang}/life_ani/ranliao_ani_2.jpg`} />
              </div>
            ) : null
        }
        {
          tab === 'c'
            ? (
              <div className="duwu_ani">
                <img src={`${img}image_${lang}/life_ani/duwu_ani_1.jpg`} />
                <img src={`${img}image_${lang}/life_ani/duwu_ani_2.jpg`} />
              </div>
            ) : null
        }
        {
          tab === 'd'
            ? (
              <div className="jijie_ani">
                <img src={`${img}image_${lang}/life_ani/jijie_ani_1.jpg`} />
                <img src={`${img}image_${lang}/life_ani/jijie_ani_2.jpg`} />
              </div>
            ) : null
        }
        {
          tab === 'e'
            ? (
              <div className="xianliang_ani">
                <img src={`${img}image_${lang}/life_ani/xianliang_ani_1.jpg`} />
                <img src={`${img}image_${lang}/life_ani/xianliang_ani_2.jpg`} />
              </div>
            ) : null
        }
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
              <img src={`${img}image_${lang}/rensheng53/1.jpg`} />
              <img src={`${img}image_${lang}/rensheng53/2.jpg`} />
              <img src={`${img}image_${lang}/rensheng53/3.jpg`} />
              <img src={`${img}image_${lang}/rensheng53/4.jpg`} />
              <img src={`${img}image_${lang}/rensheng53/5.jpg`} />
              <img src={`${img}image_${lang}/rensheng53/6.jpg`} />
            </div>
          ) : null
      }
      {
        tab === 'b'
          ? (
            <div className="ranliao_show">
              <img src={`${img}image_${lang}/ranliao/1.jpg`} />
              <img src={`${img}image_${lang}/ranliao/2.jpg`} />
              <img src={`${img}image_${lang}/ranliao/3.jpg`} />
              <img src={`${img}image_${lang}/ranliao/4.jpg`} />
            </div>
          ) : null
      }
      {
        tab === 'c'
          ? (
            <div className="duwu_show">
              <img src={`${img}image_${lang}/duwu/1.jpg`} />
              <img src={`${img}image_${lang}/duwu/2.jpg`} />
              <img src={`${img}image_${lang}/duwu/3.jpg`} />
              <img src={`${img}image_${lang}/duwu/4.jpg`} />
            </div>
          ) : null
      }
      {
        tab === 'd'
          ? (
            <div className="jijie_show">
              <img src={`${img}image_${lang}/jijie/1.jpg`} />
              <img src={`${img}image_${lang}/jijie/2.jpg`} />
              <img src={`${img}image_${lang}/jijie/3.jpg`} />
              <img src={`${img}image_${lang}/jijie/4.jpg`} />
              <img src={`${img}image_${lang}/jijie/5.jpg`} />
              <img src={`${img}image_${lang}/jijie/6.jpg`} />
            </div>
          ) : null
      }
      {
        tab === 'e'
          ? (
            <div className="xianliang_show">
              <img src={`${img}image_${lang}/renshengxianliang/1.jpg`} />
              <img src={`${img}image_${lang}/renshengxianliang/2.jpg`} />
              <img src={`${img}image_${lang}/renshengxianliang/3.jpg`} />
              <img src={`${img}image_${lang}/renshengxianliang/4.jpg`} />
              <img src={`${img}image_${lang}/renshengxianliang/5.jpg`} />
              <img src={`${img}image_${lang}/renshengxianliang/6.jpg`} />
            </div>
          ) : null
      }
      {
        tab === 'f'
          ? (
            <div className="rensheng42_show">
              <img src={`${img}image_${lang}/rensheng42/1.jpg`} />
              <img src={`${img}image_${lang}/rensheng42/2.jpg`} />
              <img src={`${img}image_${lang}/rensheng42/3.jpg`} />
              <img src={`${img}image_${lang}/rensheng42/4.jpg`} />
              <img src={`${img}image_${lang}/rensheng42/5.jpg`} />
            </div>
          ) : null
      }
    </>
  )
}

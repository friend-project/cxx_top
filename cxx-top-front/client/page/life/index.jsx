import React, {
  useEffect,
  useState,
} from 'react'

import { img } from 'config/config'

import './style.scss'

export default (props) => {
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
              <img src={`${img}rensheng53/1.png`} />
              <img src={`${img}rensheng53/2.png`} />
              <img src={`${img}rensheng53/3.png`} />
              <img src={`${img}rensheng53/4.png`} />
              <img src={`${img}rensheng53/5.png`} />
              <img src={`${img}rensheng53/6.png`} />
            </div>
          ) : null
      }
      {
        tab === 'b'
          ? (
            <div className="ranliao_show">
              <img src={`${img}ranliao/1.png`} />
              <img src={`${img}ranliao/2.png`} />
              <img src={`${img}ranliao/3.png`} />
              <img src={`${img}ranliao/4.png`} />
            </div>
          ) : null
      }
      {
        tab === 'c'
          ? (
            <div className="duwu_show">
              <img src={`${img}duwu/1.png`} />
              <img src={`${img}duwu/2.png`} />
              <img src={`${img}duwu/3.png`} />
              <img src={`${img}duwu/4.png`} />
            </div>
          ) : null
      }
      {
        tab === 'd'
          ? (
            <div className="jijie_show">
              <img src={`${img}jijie/1.png`} />
              <img src={`${img}jijie/2.png`} />
              <img src={`${img}jijie/3.png`} />
              <img src={`${img}jijie/4.png`} />
              <img src={`${img}jijie/5.png`} />
              <img src={`${img}jijie/6.png`} />
            </div>
          ) : null
      }
      {
        tab === 'e'
          ? (
            <div className="xianliang_show">
              <img src={`${img}renshengxianliang/1.png`} />
              <img src={`${img}renshengxianliang/2.png`} />
              <img src={`${img}renshengxianliang/3.png`} />
              <img src={`${img}renshengxianliang/4.png`} />
              <img src={`${img}renshengxianliang/5.png`} />
              <img src={`${img}renshengxianliang/6.png`} />
            </div>
          ) : null
      }
      {
        tab === 'f'
          ? (
            <div className="rensheng42_show">
              <img src={`${img}rensheng42/1.png`} />
              <img src={`${img}rensheng42/2.png`} />
              <img src={`${img}rensheng42/3.png`} />
              <img src={`${img}rensheng42/4.png`} />
              <img src={`${img}rensheng42/5.png`} />
            </div>
          ) : null
      }
    </>
  )
}

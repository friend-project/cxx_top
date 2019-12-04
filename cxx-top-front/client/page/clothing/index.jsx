import React, {
  useState,
} from 'react'

import { img } from 'config/config'

import './style.scss'

export default (props) => {
  const [tab, setTab] = useState('a')
  console.log(props)
  console.log(tab)

  return (
    <>
      <div className={`clothing ${tab}`}>
        <ul className="tab">
          {
            ['a', 'b'].map(
              v => (
                <li
                  className={tab === v ? 'active' : ''}
                  onClick={() => setTab(v)}
                />
              )
            )
          }
        </ul>
      </div>
      {
        tab === 'a'
          ? (
            <div className="tshirt_show">
              <img src={`${img}fuzhuang-tshirt/1.png`} />
              <img src={`${img}fuzhuang-tshirt/2.png`} />
            </div>
          ) : null
      }
      {
        tab === 'b'
          ? (
            <div className="shoubiao_show">
              <img src={`${img}fuzhuang-shoubiao/1.png`} />
              <img src={`${img}fuzhuang-shoubiao/2.png`} />
              <img src={`${img}fuzhuang-shoubiao/3.png`} />
            </div>
          ) : null
      }
    </>
  )
}

import React, {
  useState,
} from 'react'

import './style.scss'

export default (props) => {
  const [tab, setTab] = useState('a')
  console.log(props)
  console.log(tab)

  return (
    <>
      <div className={`life ${tab}`}>
        <ul className="tab">
          {
            ['a', 'b', 'c', 'd', 'e', 'f'].map(
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
    </>
  )
}

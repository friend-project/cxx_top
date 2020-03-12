import React, {
  useState,
} from 'react'

import './style.scss'

export default (props) => {
  const {
    location: {
      pathname,
      hash,
    },
  } = props
  const list = [
    {
      en: 'BRAND STORY',
      cn: '品牌故事',
      uri: 'brand',
    },
    {
      en: 'TOPPING LIQUOR',
      cn: '巢品白酒',
      uri: 'life',
    },
    {
      en: 'CLOTHING',
      cn: '服装和饰品',
      uri: 'clothing',
    },
    {
      en: 'LUGGAGE',
      cn: '箱包',
      uri: 'luggage',
    },
    /*
    {
      en: 'CUSTOMMADE',
      cn: '订制',
      uri: 'custommade',
    },
    */
    {
      en: 'HOT TO BUY',
      cn: '如何购买',
      uri: 'buy',
    },
  ]
  const [open, setOpen] = useState(false)

  const jump = v => {
    props.history.push(`/${v}${v === 'clothing' ? '#c' : ''}`)
    setOpen(false)
  }

  return (
    <div className={!open ? "nav" : "nav active"}>
      <div
        className={hash ? 'logo black' : 'logo'}
        onClick={() => props.history.push('/')}
      />
      {
        pathname === '/'
          ? (
            <div className="slogin" />
          ) : null
      }
      <div
        className={!open ? (hash ? 'btn black' : 'btn') : 'btn active'}
        onClick={() => setOpen(!open)}
      >
        <span className="one" />
        <span className="two" />
        <span className="thr" />
      </div>
      <ul className="list">
        {
          list.map(
            v => (
              <li
                className={open ? "active" : ""}
                onClick={() => jump(v.uri)}
              >
                <span className={v.uri} />
              </li>
            )
          )
        }
      </ul>
    </div>
  )
}

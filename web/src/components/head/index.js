import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Head.css';
class Head extends Component {
  static toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
  constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    handleClick() {
      this.setState({
        active: !this.state.active
      }, () => this.setOverflow())
    }
    setOverflow() {
        const that = this;
        const clientHeight = document.documentElement.clientHeight;
        if (that.state.active) {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            document.getElementsByTagName('html')[0].style.height = '100%';
            document.getElementsByTagName('html')[0].style.width = '100%';
            document.addEventListener('touchmove', Head.preHandler, false);
        } else {
            document.getElementsByTagName('html')[0].style.overflow = 'auto';
            // document.getElementsByTagName('html')[0].style.position = 'initial';
            // document.getElementsByTagName('html')[0].style.height = 'auto';
            document.removeEventListener('touchmove', Head.preHandler, false);
        }
    }
    render() {
      const navState = [false, false, false, false, false, false]
      const list = [
        {
          en: 'BRAND STORY',
          cn: '品牌故事',
          route: '/life'
        },
        {
          en: 'TOPPING LIQUOR',
          cn: '巢品白酒',
          route: '/liquor'
        },
        {
          en: 'CLOTHING',
          cn: '服装和饰品',
          route: '/dress'
        },
        {
          en: 'LUGGAGE',
          cn: '箱包',
          route: '/chest'
        },
        {
          en: 'CUSTOMMADE',
          cn: '订制',
          route: '/custommade'
        },
        {
          en: 'HOT TO BUY',
          cn: '如何购买',
          route: '/buy'
        },
      ]
      let Mname = 'menu';
      let Nname = 'nav';
      if (this.state.active) {
        Mname = 'menu active';
        Nname = 'nav nav_active'
      }
      const path = this.props.props.match.path;
      if (path == '/life') {
        navState[0] = true;
      }
      return (
        <div className="Head">
          <header className="App-header">
            <Link to='/'><i className="logo" /></Link>
            <span>IT’S TOPPING 喜欢而已</span>
            <div className={Mname} onClick={() => this.handleClick()}>
                <span className="one" />
                <span className="two" />
                <span className="thr" />
            </div>
            <div className={Nname}>
              <div className="nav_box">
                {
                  list.map((item, index) => {
                    let name = 'item';
                    if (navState[index]) {
                      name = 'item item_active'
                    }
                    return <div className={name} key={index}><Link to={item.route}><span>{item.en}</span><span className="cn">{item.cn}</span></Link></div>
                  })
                }

              </div>
            </div>
          </header>
        </div>
      );
    }
}

export default Head;

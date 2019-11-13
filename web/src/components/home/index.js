import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Head from './../head';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            cur: 1,
            spots: [
              <li className="cur"  onClick={() => this.handleTab(1, true)} key="1" />,
              <li className="spot" onClick={() => this.handleTab(2, true)} key="2" />,
              <li className="spot" onClick={() => this.handleTab(3, true)} key="3" />,
              <li className="spot" onClick={() => this.handleTab(4, true)} key="4" />,
              <li className="spot" onClick={() => this.handleTab(5, true)} key="5" />
            ]
        };
        this._mousewheel = this.mousewheel.bind(this);
    }
    componentDidMount() {
        window.addEventListener('mousewheel', this._mousewheel);
        this.setIntervalTab();
        // this.refs.line.style.width = '777px';
        setTimeout(() => {
            this.refs.line.style.width = '777px';
            this.refs.bannerItem.children[0].style.opacity = 1;
            this.handleTab(1)
        }, 0);
    }
    componentWillUnmount() {
        window.removeEventListener('mousewheel', this._mousewheel);
        clearInterval(this.state.tab);
    }
    mousewheel(event) {
        event = event || window.event;
        let num = this.state.index;
        if (event.wheelDelta < 0) { //向上滚动
            if (num === 1) {
                num = 6;
            }
            this.handleTab(num - 1, true, 'up');
        }
        if (event.wheelDelta > 0) { //向下滚动
            if (num === 5) {
                num = 0;
            }
            this.handleTab(num + 1, true, 'down');
        }
    }
    // 绑定定时器，10秒播放一次
    setIntervalTab() {
        const tab = setInterval(() => {
            this.handleTab(this.state.index);
        }, 10000);
        this.setState({
            tab: tab,
        });
    }
    // 绑定切换，支持自动播放及点击切换 clear：ture为点击后
    handleTab(n, clear, wheel) {
        console.log('nnnn', n, wheel)
        let num = n;
        const temp = [];
        // 更新按钮，i为按钮个数
        for (let i = 1; i <= 5; i++) {
            if (i === num) {
                temp.push(<li className="cur"  onClick={() => this.handleTab(i, true)} key={i} />);
                this.refs.bannerItem.children[num - 1].style.opacity = 1;
                this.refs.bannerItem.children[num - 1].style.display = 'block';
                this.setState({
                    cur: i,
                });
            } else {
                temp.push(<li className="spot"  onClick={() => this.handleTab(i, true)} key={i} />);
                console.log('this.refs.bannerItem', i)
                this.refs.bannerItem.children[i - 1].style.opacity = 0;
                this.refs.bannerItem.children[i - 1].style.display = 'none';
            }
        }
        // 5为图片个数，自动循环播放，1 2 3 4 5
        
        if (!wheel) {
            // return true;
            if (num === 5) {
                num = 1;
            } else {
                num++;   
            }
        }
        this.setState({
            spots: temp,
            index: num,
        });
        // 点击后重新切换计时 clear：ture为点击后
        if (clear) {
            clearInterval(this.state.tab);
            this.setIntervalTab();
        }
    }
    handleClick(index) {
        console.log('index', index)
      const clientHeight = document.documentElement.clientHeight;
      const clientWidth = document.documentElement.clientWidth;
        this.refs.bannerItem.style.opacity = 0;
      setTimeout(() => {
        // this.refs[`bg_${index}`].style.diplay = 'block';
        this.refs[`bg_${index}`].style.zIndex = 3;
        this.refs[`bg_${index}`].style.width = `${clientWidth}px`;
        this.refs[`bg_${index}`].style.height = `${clientHeight}px`;
        this.refs[`bg_${index}`].style.margin = 0;
        this.refs[`bg_${index}`].style.top = 0;
        this.refs[`bg_${index}`].style.left = 0;
      }, 0);
      clearInterval(this.state.tab);
    }
    render() {
        let toLink = "/life";
        if (this.state.cur == 3) {
            toLink = "/dress";
        } else if (this.state.cur == 4) {
            toLink = "/chest";
        }
        return (
          <div className="App">
            <Head props={this.props} cur={this.state.cur} />
            <div className="main">
              <ul ref="bannerItem">
                <li className="img_1" onClick={() => this.handleClick(1)} />
                <li className="img_2"><Link to="/brand"><span>Brand Story</span><span>品牌故事</span></Link></li>
                <li className="img_3" onClick={() => this.handleClick(3)} />
                <li className="img_4" onClick={() => this.handleClick(4)} />
                <li className="img_1" onClick={() => this.handleClick(5)} />
              </ul>
            </div>
            <div className="text" ref="text">TOPPING巢品白酒</div>
            <div className={`bg bg_${this.state.cur}`} ref={`bg_${this.state.cur}`}>
              <Link to={toLink} />
            </div>
            <div className="bottom">
              <div className="spots">
                <ul>
                  {this.state.spots}
                </ul>
              </div>
              <div className="line" ref="line" />
            </div>
          </div>
        );
    }
}

export default Home;
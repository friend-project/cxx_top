import React from 'react'
import {
  Route,
} from 'react-router-dom'

import Nav from 'component/nav'
import Home from 'page/home'
import Life from 'page/life'
import Clothing from 'page/clothing'
import Brand from 'page/brand'
import Buy from 'page/buy'

import './style.scss'

export default () => (
  <>
    <Route path="/" component={Nav} />
    <Route exact path="/" component={Home} />
    <Route exact path="/life" component={Life} />
    <Route exact path="/clothing" component={Clothing} />
    <Route exact path="/brand" component={Brand} />
    <Route exact path="/buy" component={Buy} />
  </>
)

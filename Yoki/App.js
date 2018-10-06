import React from 'react'
import Home from './views/Home'

export default class App extends React.Component {

  constructor () {
    super()
  }

  /*
   * Files :
   *  - components/*
   *  - functions/product.js
   *  - modals/*
   *  - styles/global.js
   *  - views/home.js
   */

  /**
   * Our App's entry point
   * Home component is created and rendered
   * Feel free to move App logic from Home.js here
   * @returns {*}
   */
  render () {
    return (
      <Home/>
    )
  }
}


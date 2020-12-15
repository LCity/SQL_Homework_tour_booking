import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';

import Flights from './component/flight/index'
import Hotels from './component/hotel/index'
import Bus from './component/bus/index'
import Res from './component/res/index'
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
const serverUrl = "http://localhost:8001/tourbooking/flights/"


class App extends React.Component {
  // 构造器
  constructor(props) {
    super(props);
    // 定义初始化状态
    this.state = {
      navValue:0,
      current:0,
    };
  }


  render() {
    // 定义变量
    const  current = this.state.current;
    const navList = [<Flights />,<Hotels />,<Bus/>,<Res/>];
   
    return (
      <div>
        <nav className="navbar navbar-inverse ">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="http://127.0.0.1:3000">Tour_Booking</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <button className="navbar-text mynav-button" onClick={()=>{this.setState({current:0})}}> Flights</button>
                <button className="navbar-text mynav-button" onClick={()=>{this.setState({current:1})}}> Hotels</button>
                <button className="navbar-text mynav-button" onClick={()=>{this.setState({current:2})}}> Buses</button>
                <button className="navbar-text mynav-button" onClick={()=>{this.setState({current:3})}}> Reservations</button>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
        
       { console.log(this.state.current,           navList[this.state.current])}
        {
           navList[this.state.current]
        }
        </div>

      </div>

    );
  }
}

/**
 * 任何使用this.context.xxx的地方，必须在组件的contextTypes里定义对应的PropTypes
 */

export default App;
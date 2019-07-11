import React, { Component } from 'react'
import {Row,Col} from 'antd'
import './index.less'

class Header extends Component{
  componentWillMount() {
    this.setState({
      userName: '3zz'
    })
  }
  
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎, {this.state.userName}</span>
            <a href="/">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="title">2019-07-10</span>
            <span className="weather-detail">晴</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
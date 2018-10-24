import Taro, { Component } from '@tarojs/taro'
import { set as setGlobalData } from './global_data'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/player/index',
      'pages/index/index',
      'pages/radio/index',
      'pages/onDemand/index',
      'pages/my/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#c20d23',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColorTop: '#c20d23'
      // navigationStyle: 'custom'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#c20d23',
      backgroundColor: '#efefef',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './icons/tab-00.png',
          selectedIconPath: './icons/tab-01.png',
          text: '发现'
        },
        {
          pagePath: 'pages/radio/index',
          iconPath: './icons/tab-20.png',
          selectedIconPath: './icons/tab-21.png',
          text: '我的'
        }
      ]
    }
  }
  componentWillMount() {
    let data = Taro.getSystemInfoSync()
    let totalTopHeight = 68
    if (data.model.indexOf('iPhone X') !== -1) {
      totalTopHeight = 88
    } else if (data.model.indexOf('iPhone') !== -1) {
      totalTopHeight = 64
    }
    console.log(data)
    let { screenHeight, screenWidth, windowHeight } = data

    setGlobalData('statusBarHeight', data.statusBarHeight)
    setGlobalData('titleBarHeight', totalTopHeight - data.statusBarHeight)
    setGlobalData('headHeight', totalTopHeight)
    setGlobalData('screenHeight', screenHeight)
    setGlobalData('screenWidth', screenWidth)
    setGlobalData('windowHeight', windowHeight)
  }
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))

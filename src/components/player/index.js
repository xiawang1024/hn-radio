import Taro, { Component } from '@tarojs/taro'
import { View, Image, Slider } from '@tarojs/components'

import './index.scss'

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlay: true
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  playSwitch(e) {
    e.preventDefault()
    let { isPlay } = this.state
    if (isPlay) {
      isPlay = false
    } else {
      isPlay = true
    }
    console.log('------------------------------------')
    console.log(isPlay)
    console.log('------------------------------------')
    this.setState({ isPlay })
  }

  render() {
    let { isPlay } = this.state
    return (
      <View className="player-box">
        <View className="bg-wrap">
          <Image
            className="logo-bg"
            src="http://program.hndt.com/files/images/2017/12/14/1513241881377763.png"
            mode="aspectFill"
          />
        </View>

        <View className="player-wrap">
          <View className={isPlay ? 'logo-wrap playing' : 'logo-wrap'}>
            <Image className="logo-bg" src={require('./logo-bg.png')} />
            <Image
              className="logo"
              src="http://program.hndt.com/files/images/2017/12/14/1513241881377763.png"
            />
          </View>
          <Slider step="1" value="50" blockSize="12" />
        </View>

        <View className="btn" onClick={this.playSwitch}>
          播放暂停
        </View>
      </View>
    )
  }
}

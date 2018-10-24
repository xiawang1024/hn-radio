import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.scss'

import PlayInfo from '../playInfo'
import PlayList from '../playList'

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlay: true,
      isShowInfo: false
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
  onCloseInfo = () => {
    this.setState({
      isShowInfo: false
    })
  }
  onOpenInfo = () => {
    this.setState({
      isShowInfo: true
    })
  }
  render() {
    let { isPlay, isShowInfo } = this.state
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
        </View>

        <View className="ctrl-wrap">
          <View className="info" onClick={this.onOpenInfo}>
            <Image className="icon-info" src={require('./icon-info.png')} />
          </View>
          <View className="btn-wrap">
            <Image className="icon-prev" src={require('./icon-prev.png')} />
            <View className="icon-play-wrap" onClick={this.playSwitch}>
              {isPlay ? (
                <Image
                  className="icon-play-pause"
                  src={require('./icon-pause.png')}
                />
              ) : (
                <Image
                  className="icon-play-pause"
                  src={require('./icon-play.png')}
                />
              )}
            </View>
            <Image className="icon-next" src={require('./icon-next.png')} />
          </View>
          <View className="list">
            <Image className="icon-list" src={require('./icon-list.png')} />
          </View>
        </View>
        {isShowInfo ? <PlayInfo onCloseInfo={this.onCloseInfo} /> : ''}
      </View>
    )
  }
}

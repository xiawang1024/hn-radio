import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.scss'

import PlayInfo from '../playInfo'
import PlayList from '../playList'

import dataList from '../../api'
const innerAudioContext = Taro.createInnerAudioContext()

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlayInfo: {},
      isPlay: true,
      isShowInfo: false,
      isShowList: false
    }
  }

  componentWillMount() {}

  componentDidMount() {
    this.selectPlay('117')
  }

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
  onCloseList = () => {
    this.setState({
      isShowList: false
    })
  }
  onOpenList = () => {
    this.setState({
      isShowList: true
    })
  }
  selectPlay = cid => {
    let selected = dataList.filter(item => item.cid == cid)

    this.setState({
      isPlayInfo: selected[0]
    })
    innerAudioContext.src = selected[0].streams[0]
  }
  onSwitchPlay = cid => {
    this.selectPlay(cid)
  }
  render() {
    let { isPlay, isShowInfo, isShowList, isPlayInfo } = this.state
    return (
      <View className="player-box">
        <View className="bg-wrap">
          <Image className="logo-bg" src={isPlayInfo.image} mode="aspectFill" />
        </View>

        <View className="player-wrap">
          <View className={isPlay ? 'logo-wrap playing' : 'logo-wrap'}>
            <Image className="logo-bg" src={require('./logo-bg.png')} />
            <Image className="logo" src={isPlayInfo.image} />
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
          <View className="list" onClick={this.onOpenList}>
            <Image className="icon-list" src={require('./icon-list.png')} />
          </View>
        </View>
        {isShowInfo ? <PlayInfo onCloseInfo={this.onCloseInfo} /> : ''}
        {isShowList ? (
          <PlayList
            onCloseList={this.onCloseList}
            onSwitchPlay={this.onSwitchPlay}
          />
        ) : (
          ''
        )}
      </View>
    )
  }
}

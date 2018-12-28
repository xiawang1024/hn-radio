import Taro, { Component } from '@tarojs/taro'
import { View, Image, Slider } from '@tarojs/components'

import './index.scss'

import PlayInfo from '../playInfo'
import PlayList from '../playList'

import dataList from '../../api'
import { AddCount } from '../../api/index'

const backgroundAudioManager = Taro.getBackgroundAudioManager()

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
    this.playEventListen()
    let { cid } = this.props
    // console.log('------------------------------------')
    console.log(cid)
    // console.log('------------------------------------')

    this.selectPlay(cid)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  playEventListen() {
    backgroundAudioManager.onCanplay(() => {
      Taro.hideLoading()
    })
    backgroundAudioManager.onPlay(() => {
      Taro.hideLoading()
    })
    backgroundAudioManager.onWaiting(() => {
      Taro.showLoading({
        title: '切换中...'
      })
    })
  }
  playSwitch(e) {
    e.preventDefault()
    let { isPlay } = this.state
    if (isPlay) {
      isPlay = false
      backgroundAudioManager.pause()
    } else {
      isPlay = true
      backgroundAudioManager.play()
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
    this.setPlaySrc(selected[0])
    this.setState({
      isPlayInfo: selected[0]
    })
  }
  setPlaySrc = data => {
    backgroundAudioManager.title = data.name
    backgroundAudioManager.epname = data.name
    backgroundAudioManager.coverImgUrl = data.image
    backgroundAudioManager.protocol = 'hls'
    backgroundAudioManager.src = data.streams[0]
    this.playHistory(data.cid)
    AddCount(parseInt(data.cid))
    Taro.setNavigationBarTitle({
      title: data.name
    })
  }

  formatDate = () => {
    let date = new Date()

    let year = date.getFullYear(),
      month = date.getMonth() + 1, //月份是从0开始的
      day = date.getDate(),
      hour = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds()
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec
    let newTime =
      year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
    return newTime
  }
  playHistory = cid => {
    let list = []
    let keyName = 'history_list'
    let time = this.formatDate()
    Taro.getStorage({
      key: keyName
    })
      .then(res => {
        list = res.data
        list.push({ cid, time })
        Taro.setStorage({ key: keyName, data: list })
      })
      .catch(err => {
        list = []
        Taro.setStorage({ key: keyName, data: list })
        console.log(err)
      })
  }
  onSwitchPlay = cid => {
    this.selectPlay(cid)
  }
  seeIndexCid = () => {
    let { isPlayInfo } = this.state
    let indexCid = 0
    dataList.forEach((item, index) => {
      if (isPlayInfo.cid == item.cid) {
        indexCid = index
      } else {
        return false
      }
    })

    return indexCid
  }
  clickNext = () => {
    let len = dataList.length
    let indexCid = this.seeIndexCid()
    if (indexCid == len - 1) {
      Taro.showToast({
        title: '没有更多数据',
        icon: 'none'
      })
    }
    ++indexCid
    let playInfo = dataList[indexCid]
    this.selectPlay(playInfo.cid)
  }
  clickPrev = () => {
    let indexCid = this.seeIndexCid()
    if (indexCid == 0) {
      Taro.showToast({
        title: '没有更多数据',
        icon: 'none'
      })
    }
    --indexCid
    let playInfo = dataList[indexCid]
    this.selectPlay(playInfo.cid)
  }

  render() {
    let { isPlay, isShowInfo, isShowList, isPlayInfo } = this.state
    return (
      <View className='player-box'>
        <View className='bg-wrap'>
          <Image className='logo-bg' src={isPlayInfo.image} mode='aspectFill' />
        </View>

        <View className='player-wrap'>
          <View className={isPlay ? 'logo-wrap playing' : 'logo-wrap'}>
            <Image className='logo-bg' src={require('./logo-bg.png')} />
            <Image className='logo' src={isPlayInfo.image} />
          </View>
          <View className='slide-wrap'>
            <Slider
              step='1'
              activeColor='#c20d23'
              backgroundColor='#ddd'
              blockSize='12'
              value='30'
              min='0'
              max='100'
              disabled
            />
          </View>
        </View>

        <View className='ctrl-wrap'>
          <View className='info' onClick={this.onOpenInfo}>
            <Image className='icon-info' src={require('./icon-info.png')} />
          </View>
          <View className='btn-wrap'>
            <Image
              onClick={this.clickPrev}
              className='icon-prev'
              src={require('./icon-prev.png')}
            />
            <View className='icon-play-wrap' onClick={this.playSwitch}>
              <Image
                className='icon-play-pause'
                src={
                  isPlay
                    ? require('./icon-pause.png')
                    : require('./icon-play.png')
                }
              />
            </View>
            <Image
              onClick={this.clickNext}
              className='icon-next'
              src={require('./icon-next.png')}
            />
          </View>
          <View className='list' onClick={this.onOpenList}>
            <Image className='icon-list' src={require('./icon-list.png')} />
          </View>
        </View>
        {isShowInfo ? (
          <PlayInfo onCloseInfo={this.onCloseInfo} playInfo={isPlayInfo} />
        ) : (
          ''
        )}
        {isShowList ? (
          <PlayList
            onCloseList={this.onCloseList}
            onSwitchPlay={this.onSwitchPlay}
            playCid={isPlayInfo.cid}
          />
        ) : (
          ''
        )}
      </View>
    )
  }
}

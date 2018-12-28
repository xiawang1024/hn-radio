import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.scss'
import orDataList from '../../api'

import { GetListCount } from '../../api/index'

export default class MyTabBar extends Component {
  static defaultProps = {
    dataList: []
  }
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    Taro.showLoading({
      title: '加载中...'
    })
  }

  componentDidMount() {
    this.getCountToList()
  }

  getCountToList = () => {
    GetListCount()
      .then(res => {
        let { data } = res.data

        Taro.hideLoading()
        this.addCountToList(data)
      })
      .catch(err => console.log(err))
  }
  addCountToList = data => {
    let dataKeys = Object.keys(data)
    let len = orDataList.length
    for (let key of dataKeys) {
      for (let i = 0; i < len; i++) {
        let item = orDataList[i]
        if (item.cid == key) {
          item.count = data[key]
          break
        }
      }
    }
    this.setState({
      dataList: orDataList
    })
  }
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  clickToPlay = cid => {
    // console.log(cid)
    Taro.navigateTo({
      url: `/pages/player/index?cid=${cid}`
    })
  }
  render() {
    let { dataList } = this.state
    return (
      <View className='radio-list'>
        <View className='list-wrap'>
          {dataList &&
            dataList.map(item => (
              <View
                className='item'
                key={item.cid}
                data-cid={item.cid}
                onClick={this.clickToPlay.bind(this, item.cid)}
              >
                <View className='logo-wrap'>
                  <Image className='logo' src={item.image} />
                  <View className='logo-mark' />
                  <Image
                    className='icon-play'
                    src={require('./icon-play.png')}
                  />
                </View>
                <View className='text-wrap'>
                  <View className='title-wrap'>
                    <View className='title'>{item.name}</View>
                    <View className='border' />
                  </View>
                  <View className='desc-wrap'>{item.description}</View>
                </View>
                {/* <View className="other-wrap"> */}
                {/* <View className="collect-wrap">
                  <Image
                    src={
                      isCollected
                        ? require('./icon-collect.png')
                        : require('./icon-collect-no.png')
                    }
                    className="icon-collect"
                  />

                  <Text className="text-collect">收藏</Text>
                </View> */}
                {/* <View className='time-wrap'>2018.07.21</View> */}
                {/* </View> */}
                <View className='play-num'>
                  <Image
                    className='icon-play-num'
                    src={require('./icon-play-num.png')}
                  />
                  <Text>{item.count}</Text>
                </View>
              </View>
            ))}
        </View>
      </View>
    )
  }
}

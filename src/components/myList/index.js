import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.scss'

export default class MyTabBar extends Component {
  static defaultProps = {
    dataList: []
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  clickToPlayer = cid => {
    Taro.navigateTo({
      url: `/pages/player/index?cid=${cid}`
    })
  }

  onShareAppMessage() {}

  render() {
    const { dataList, isHasMore, tabType } = this.props
    return (
      <View className="my-list">
        {dataList.map((item, index) => (
          <View
            className="item"
            key={index}
            onClick={this.clickToPlayer.bind(this, item.cid)}
          >
            <View className="logo-wrap">
              <Image className="logo" src={item.image} />
              <View className="logo-mark" />
              <Image className="icon-play" src={require('./icon-play.png')} />
            </View>
            <View className="text-wrap">
              <View className="title-wrap">
                <View className="title">{item.name}</View>
                <View className="border" />
              </View>
              <View className="desc-wrap">{item.description}</View>
            </View>
            <View className="other-wrap">
              {tabType === 0 ? (
                <View className="collect-wrap">
                  <Image
                    src={require('./icon-collect.png')}
                    className="icon-collect"
                  />
                  <Text className="text-collect">收藏</Text>
                </View>
              ) : (
                ''
              )}
              <View className="time-wrap">{item.timePlay}</View>
            </View>
          </View>
        ))}
        <View className="more-tips">
          {isHasMore ? <Text>加载中...</Text> : <Text>暂无更多数据</Text>}
        </View>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

import dataList from '../../api'
export default class HomeHot extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="home-hot">
        <View className="head-wrap">
          <Image className="icon-head" src={require('./icon-head.png')} />
          <Text className="text">网络电台</Text>
        </View>
        <View className="list-wrap">
          {dataList.map((item, index) => {
            return (
              <View className="item" key={index.toString()}>
                <View className="logo-wrap">
                  <Image className="logo" src={item.image} />
                  <View className="play-num-wrap">
                    <Image
                      className="icon-play"
                      src={require('./icon-play.png')}
                    />
                    <Text className="num">12345</Text>
                  </View>
                </View>
                <View className="name">{item.name}</View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

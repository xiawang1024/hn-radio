import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

import SwiperWrap from '../../components/swiperWrap'

import HomeHot from '../../components/homeHot'

import RadioList from '../../components/radioList'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '河南 RADIO',
    navigationBarTextStyle: 'white'
    // disableScroll: true
  }
  constructor(props) {
    super(props)
    this.state = {
      isType: true
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let fixedHead = true

    return (
      <View className="index">
        {this.state.isType ? (
          <View>
            <SwiperWrap />
            <HomeHot />
          </View>
        ) : (
          <RadioList dataList={[1, 2, 3, 4, 5, 6]} />
        )}
      </View>
    )
  }
}

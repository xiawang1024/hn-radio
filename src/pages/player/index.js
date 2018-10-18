import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Player from '../../components/player'

import dataList from '../../api'
export default class Radio extends Component {
  config = {
    navigationBarTitleText: '分类',
    navigationBarTextStyle: 'white',
    disableScroll: true
  }
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
      <View className="index">
        <Player />
      </View>
    )
  }
}

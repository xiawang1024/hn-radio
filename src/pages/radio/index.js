import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import RadioList from '../../components/radioList'

import TitleBackHead from '../../components/titleBackHead'

import dataList from '../../api'
export default class Radio extends Component {
  config = {
    navigationBarTitleText: '分类',
    navigationBarTextStyle: 'white'
    // disableScroll: true
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
        <RadioList dataList={dataList} />
      </View>
    )
  }
}

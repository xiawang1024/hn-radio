import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

import SwiperWrap from '../../components/swiperWrap'

import HomeHot from '../../components/homeHot'

import RadioList from '../../components/radioList'

import { GetSwiper } from '../../api/index'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '河南 RADIO',
    navigationBarTextStyle: 'white'
    // disableScroll: true
  }
  constructor(props) {
    super(props)
    this.state = {
      isType: true,
      listData: []
    }
  }

  componentWillMount() {}

  componentDidMount() {
    GetSwiper().then(res => {
      let { data } = res
      this.setState({
        listData: data
      })
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  onShareAppMessage() {}
  render() {
    let { listData } = this.state
    return (
      <View className='index'>
        {this.state.isType ? (
          <View>
            <SwiperWrap listData={listData} />
            <RadioList />
          </View>
        ) : (
          <HomeHot />
        )}
      </View>
    )
  }
}

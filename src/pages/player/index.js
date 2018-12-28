import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Player from '../../components/player'

import dataList from '../../api'
export default class Radio extends Component {
  config = {
    navigationBarTitleText: '',
    navigationBarTextStyle: 'white',
    disableScroll: true
  }
  constructor(props) {
    super(props)
  }

  componentWillMount() {}

  componentDidMount() {
    // let cid = this.$router.params.cid
    // let isPlayInfos = dataList.filter(item => {
    //   return item.cid == cid
    // })
    // let isPlayInfo = isPlayInfos[0]
    // Taro.setNavigationBarTitle({
    //   title: isPlayInfo.name
    // })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  onShareAppMessage() {
    let cid = this.$router.params.cid
    let isPlayInfos = dataList.filter(item => {
      return item.cid == cid
    })
    let isPlayInfo = isPlayInfos[0]
    return {
      title: isPlayInfo.name
    }
  }
  render() {
    let cid = this.$router.params.cid
    console.log(cid)
    return (
      <View className='index'>
        <Player cid={cid} />
      </View>
    )
  }
}

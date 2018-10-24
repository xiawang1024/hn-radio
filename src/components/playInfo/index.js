import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class PlayInfo extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  closeInfo = () => {
    let { onCloseInfo } = this.props
    onCloseInfo()
  }
  render() {
    return (
      <View className="play-info">
        <View className="title wrap">
          <View className="label">电台名称：</View>
          <View className="value">经典FM音乐台</View>
        </View>
        <View className="desc wrap">
          <View className="label">内容简介：</View>
          <View className="value">
            经典FM音乐台经典FM音乐台经典FM音乐台经典FM音乐台
          </View>
        </View>
        <View className="time wrap">
          <View className="label">播放时段：</View>
          <View className="value">全天</View>
        </View>
        <View className="icon" onClick={this.closeInfo}>
          <Image className="icon-close" src={require('./icon-close.png')} />
        </View>
      </View>
    )
  }
}

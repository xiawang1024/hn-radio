import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import './index.scss'

import dataList from '../../api'
export default class PlayList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlayIndex: 117
    }
  }

  componentWillMount() {}

  componentDidMount() {
    let { playCid } = this.props
    this.setState({
      isPlayIndex: playCid
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  closeList = () => {
    let { onCloseList } = this.props
    onCloseList()
  }

  switchPlay = cid => {
    this.setState({
      isPlayIndex: cid
    })
    let { onSwitchPlay } = this.props
    onSwitchPlay(cid)
  }

  render() {
    let { isPlayIndex } = this.state
    return (
      <View className="play-list">
        <ScrollView
          className="list-wrap"
          scrollY
          scrollWithAnimation
          scrollTop="0"
        >
          {dataList.map((item, index) => {
            return (
              <View
                className="item"
                key={item.cid}
                onClick={this.switchPlay.bind(this, item.cid)}
              >
                <Image
                  className={
                    isPlayIndex == item.cid ? 'icon-play' : 'icon-play none'
                  }
                  src={require('./icon-play.png')}
                />
                <Text className={isPlayIndex == item.cid ? 'name red' : 'name'}>
                  {item.name}
                </Text>
              </View>
            )
          })}
        </ScrollView>
        <View className="icon" onClick={this.closeList}>
          <Image className="icon-close" src={require('./icon-close.png')} />
        </View>
      </View>
    )
  }
}

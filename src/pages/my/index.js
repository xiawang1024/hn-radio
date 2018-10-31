import Taro, { Component } from '@tarojs/taro'
import { View, OpenData } from '@tarojs/components'
import { get as getGlobalData } from '../../global_data'
import MyTabBar from '../../components/myTabBar'
import MyList from '../../components/myList'
import './index.scss'

import dataList from '../../api'
export default class Index extends Component {
  config = {
    navigationBarTitleText: '我的',
    navigationBarTextStyle: 'white',
    onReachBottomDistance: 50
    // disableScroll: true
  }
  constructor(props) {
    super(props)
    this.state = {
      tabType: 1, // 0 收藏，1 历史
      historyList: [],
      page: 10
    }
  }

  componentWillMount() {}

  componentDidMount() {
    Taro.login({}).then(res => {
      console.log(res)
    })
    this.getPlayHistory()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  tabSwitchCb = tabType => {
    console.log(tabType)
    this.setState({ tabType })
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 500
    })
  }
  onReachBottom() {
    console.log('上拉加载更多开始')
    let { page } = this.state
    //模拟数据
    page += 10
    this.setState({ page })
    setTimeout(() => {
      this.pageAddOne(page)
    }, 500)
  }
  pageAddOne = page => {
    let historyList = [...Array(page).keys()]
    this.setState({ historyList })
  }

  getPlayHistory = () => {
    let keyName = 'history_list'
    Taro.getStorage({ key: keyName })
      .then(res => {
        this.getPlayInfoHistory(res.data)
      })
      .catch(err => {
        // 没有历史记录
        console.log(err)
      })
  }
  getPlayInfoHistory = data => {
    let historyDataList = data.map((itemCid, index) => {
      let itemHistorys = dataList.filter(item => {
        return item.cid == itemCid.cid
      })
      let itemHistory = itemHistorys[0]
      itemHistory.timePlay = itemCid.time
      return itemHistory
    })
    this.setState({
      historyList: historyDataList
    })
  }
  render() {
    let { historyList, tabType } = this.state

    let isHasMore = true

    return (
      <View className="index">
        <View className="fixed-head">
          <View className="head-wrap">
            <View className="user-info">
              <OpenData type="userAvatarUrl" className="avatar" />
              <View className="nick-name">
                <OpenData type="userNickName" />
              </View>
            </View>
          </View>
          <MyTabBar user="test" onTabSwitchCb={this.tabSwitchCb.bind(this)} />
        </View>
        <View>{this.state.msg}</View>
        <MyList
          dataList={historyList}
          isHasMore={isHasMore}
          tabType={tabType}
        />
      </View>
    )
  }
}

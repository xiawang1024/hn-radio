import Taro, { Component } from '@tarojs/taro'
import { View, OpenData } from '@tarojs/components'
import { get as getGlobalData } from '../../global_data'
import MyTabBar from '../../components/myTabBar'
import MyList from '../../components/myList'
import './index.scss'

import dataList from '../../api'
import { start } from 'pretty-error'
export default class Index extends Component {
  config = {
    navigationBarTitleText: '我的',
    navigationBarTextStyle: 'white',
    onReachBottomDistance: 50,
    enablePullDownRefresh: true
    // disableScroll: true
  }
  constructor(props) {
    super(props)
    this.state = {
      tabType: 1, // 0 收藏，1 历史
      historyList: [],
      page: 0,
      isHasMore: false
    }
  }

  componentWillMount() {}

  componentDidMount() {
    Taro.login({}).then(res => {
      console.log(res)
    })
    this.getPlayHistory(0)
  }

  componentWillUnmount() {
    this.setState({
      page: 0
    })
  }

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
  onPullDownRefresh() {
    Taro.showLoading({ title: 'loading...' })
    this.setState({
      historyList: []
    })
    this.getPlayHistory(0)
    this.setState({
      page: 0
    })
    setTimeout(() => {
      Taro.hideLoading()
      Taro.stopPullDownRefresh()
    }, 500)
  }
  onReachBottom() {
    console.log('上拉加载更多开始')
    let { page, isHasMore } = this.state
    //模拟数据
    if (isHasMore) {
      ++page
      this.setState({ page })
      setTimeout(() => {
        // this.pageAddOne(page)
        this.getPlayHistory(page)
      }, 300)
    }
  }
  pageAddOne = page => {
    // let historyList = [...Array(page).keys()]
    // this.setState({ historyList })
  }

  getPlayHistory = page => {
    let startIndex = page * 10
    let keyName = 'history_list'
    Taro.getStorage({ key: keyName })
      .then(res => {
        let reverseList = res.data.reverse()
        let endIndex = startIndex + 10
        let len = reverseList.length

        if (startIndex < len && len > 10) {
          this.setState({
            isHasMore: true
          })
        } else {
          this.setState({
            isHasMore: false
          })
        }
        if (endIndex >= len) {
          endIndex = len
        }
        let tenList = reverseList.slice(startIndex, endIndex)

        this.getPlayInfoHistory(tenList)
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
    let { historyList } = this.state
    historyList = historyList.concat(historyDataList)

    this.setState({
      historyList
    })
  }
  onShareAppMessage() {}
  onTabItemTap(item) {
    console.log(item)
    if (item.index == 1) {
      this.getPlayHistory(0)
    }
  }
  render() {
    let { historyList, tabType, isHasMore } = this.state

    return (
      <View className='index'>
        <View className='fixed-head'>
          <View className='head-wrap'>
            <View className='user-info'>
              <OpenData type='userAvatarUrl' className='avatar' />
              <View className='nick-name'>
                <OpenData type='userNickName' />
              </View>
            </View>
          </View>
          <MyTabBar user='test' onTabSwitchCb={this.tabSwitchCb.bind(this)} />
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

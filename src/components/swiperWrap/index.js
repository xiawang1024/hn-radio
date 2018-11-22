import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import { get as getGlobalData } from '../../global_data'

export default class SwiperWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  cliclToPlay = cid => {
    let url = `/pages/webView/index?url=https://mp.weixin.qq.com/s/IlQcuga1nVzFPcbXHcc7fQ`
    Taro.navigateTo({
      url
    })
  }

  render() {
    let swipers = [{ cid: '120' }, { cid: '120' }, { cid: '120' }]
    return (
      <Swiper
        className='swiper-wrap'
        indicatorColor='#efefef'
        indicatorActiveColor='#c20d23'
        circular
        indicatorDots
        autoplay
      >
        {swipers.map((item, index) => {
          return (
            <SwiperItem key={index}>
              <Image
                onClick={this.cliclToPlay.bind(this, item.cid)}
                src='http://www.hndt.com/original/201811/01/2254685/res/-174014083_wechat.jpg'
                className='item-img'
                mode='aspectFill'
              />
            </SwiperItem>
          )
        })}
      </Swiper>
    )
  }
}

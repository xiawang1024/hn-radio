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

  cliclToPlay = url => {
    Taro.navigateTo({
      url: `/pages/webView/index?url=${url}`
    })
  }

  render() {
    let swipers = this.props.listData
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
                onClick={this.cliclToPlay.bind(this, item.url)}
                src={item.src}
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

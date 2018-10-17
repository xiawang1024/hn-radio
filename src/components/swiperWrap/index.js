import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import { get as getGlobalData } from '../../global_data'

export default class SwiperWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headHeight: 0
    }
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      headHeight: getGlobalData('headHeight')
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { headHeight } = this.state
    let paddingTopStyle = {
      marginTop: `${headHeight}px`
    }
    return (
      <Swiper
        className="swiper-wrap"
        indicatorColor="#efefef"
        indicatorActiveColor="#c20d23"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image
            src="http://www.hndt.com/brand/612/res/pi3F3ZID.jpg?1497345245233"
            className="item-img"
            mode="aspectFill"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            src="http://www.hndt.com/brand/612/res/pi3F3ZID.jpg?1497345245233"
            className="item-img"
            mode="aspectFill"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            src="http://www.hndt.com/brand/612/res/pi3F3ZID.jpg?1497345245233"
            className="item-img"
            mode="aspectFill"
          />
        </SwiperItem>
      </Swiper>
    )
  }
}

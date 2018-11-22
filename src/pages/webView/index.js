import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'

export default class WebViewUI extends Component {
  config = {
    navigationBarTitleText: '河南 RADIO',
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
  onShareAppMessage() {}
  render() {
    let url = this.$router.params.url
    return <WebView src={url} />
  }
}

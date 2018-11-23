import Taro from '@tarojs/taro'

/**
 * 观看数+1
 * @param {*} cid
 */
const AddCount = cid =>
  Taro.request({
    url: `https://a.weixin.hndt.com/boom/openapi/visit/add?name=XMT&channelId=${cid}`
  })

const GetListCount = () =>
  Taro.request({
    url: `https://a.weixin.hndt.com/boom/openapi/visit/list?name=XMT`
  })

const GetSwiper = () =>
  Taro.request({
    url: 'https://api.hndt.com/api/page?template_id=404'
  })

export { AddCount, GetListCount, GetSwiper }

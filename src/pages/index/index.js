import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

import LogoSchHead from '../../components/logoSchHead';
import SchBackHead from '../../components/schBackHead';
import TitleBackHead from '../../components/titleBackHead';
import SwiperWrap from '../../components/swiperWrap';

export default class Index extends Component {
	config = {
		navigationBarTitleText: '首页',
		navigationBarTextStyle: 'white',
		disableScroll: true
	};
	constructor(props) {
		super(props);
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className='index'>
				<LogoSchHead />
				{/* <SchBackHead /> */}
				{/* <TitleBackHead /> */}
				<SwiperWrap />
				<Text>hello</Text>
			</View>
		);
	}
}

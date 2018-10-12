import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

import TitleBackHead from '../../components/titleBackHead';
import BoxList from '../../components/boxList';
import SwiperWrap from '../../components/swiperWrap';

export default class OnDemand extends Component {
	config = {
		navigationBarTitleText: '分类',
		navigationBarTextStyle: 'white'
		// disableScroll: true
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
		let headTitle = '点播节目';
		return (
			<View className='index'>
				<TitleBackHead headTitle={headTitle} />
				<SwiperWrap />
				<BoxList />
			</View>
		);
	}
}

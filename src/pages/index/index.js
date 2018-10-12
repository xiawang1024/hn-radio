import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import './index.scss';

import LogoSchHead from '../../components/logoSchHead';
import SwiperWrap from '../../components/swiperWrap';
import HomeType from '../../components/homeType';
import HomeHot from '../../components/homeHot';
import HomeLive from '../../components/homeLive';

export default class Index extends Component {
	config = {
		navigationBarTitleText: '首页',
		navigationBarTextStyle: 'white'
		// disableScroll: true
	};
	constructor(props) {
		super(props);
		this.state = {
			headHeight: 0
		};
	}

	componentWillMount() {
		this.setState({
			headHeight: getGlobalData('headHeight')
		});
	}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		let fixedHead = true;
		let { headHeight } = this.state;
		let paddingTopStyle = {
			marginTop: `${headHeight}px`
		};
		return (
			<View className='index'>
				<LogoSchHead fixedHead={fixedHead} />
				<View style={paddingTopStyle}>
					<SwiperWrap />
				</View>
				<HomeType />
				<View className='line-h' />
				<HomeHot />
				<View className='line-h' />
				<HomeLive />
			</View>
		);
	}
}

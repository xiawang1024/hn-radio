import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

import LogoSchHead from '../../components/logoSchHead';

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
				<Text>hello</Text>
			</View>
		);
	}
}

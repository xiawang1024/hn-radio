import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: 'boxList',
		navigationBarTextStyle: 'white'
		// disableScroll: true
	};
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className='box-list'>
				<View className='head-wrap'>
					<View className='icon-head' />
					<Text className='text'>音乐</Text>
				</View>
				<View className='list-wrap'>
					<View className='item'>
						<Image className='logo' src='http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg' />
						<View className='name'>开心一刻开心一刻开心一刻开心一刻开心一刻开心一刻</View>
					</View>
					<View className='item'>
						<Image className='logo' src='http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg' />
						<View className='name'>开心一刻</View>
					</View>
					<View className='item'>
						<Image className='logo' src='http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg' />
						<View className='name'>开心一刻</View>
					</View>
					<View className='item'>
						<Image className='logo' src='http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg' />
						<View className='name'>开心一刻</View>
					</View>
				</View>
			</View>
		);
	}
}

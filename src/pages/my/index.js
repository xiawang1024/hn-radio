import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import MyTabBar from '../../components/myTabBar';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: '我的',
		navigationBarTextStyle: 'white',
		disableScroll: true
	};
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0,
			titleBarHeight: 0,
			headHeight: 0,
			msg: ''
		};
	}

	componentWillMount() {}

	componentDidMount() {
		this.setState({
			statusBarHeight: getGlobalData('statusBarHeight'),
			titleBarHeight: getGlobalData('titleBarHeight'),
			headHeight: getGlobalData('headHeight')
		});
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	tabSwitchCb = (msg) => {
		console.log(msg);
		this.setState({ msg });
	};

	render() {
		let { statusBarHeight, titleBarHeight, headHeight } = this.state;
		let headStyle = {
			height: `${titleBarHeight}px`,
			lineHeight: `${titleBarHeight}px`,
			paddingTop: `${statusBarHeight}px`
		};
		return (
			<View className='index'>
				<View className='head-wrap'>
					<View className='head' style={headStyle}>
						我的
					</View>
					<View className='user-info'>
						<Image
							className='avatar'
							src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195'
						/>
						<View className='nick-name'>昵称</View>
					</View>
				</View>
				<MyTabBar user='test' onTabSwitchCb={this.tabSwitchCb.bind(this)} />
				<View>{this.state.msg}</View>
			</View>
		);
	}
}

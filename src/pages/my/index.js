import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import MyTabBar from '../../components/myTabBar';
import MyList from '../../components/myList';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: '我的',
		navigationBarTextStyle: 'white',
		onReachBottomDistance: 50
		// disableScroll: true
	};
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0,
			titleBarHeight: 0,
			headHeight: 0,
			tabType: 0, // 0 收藏，1 历史
			dataList: [],
			page: 10
		};
	}

	componentWillMount() {
		this.setState({
			statusBarHeight: getGlobalData('statusBarHeight'),
			titleBarHeight: getGlobalData('titleBarHeight'),
			headHeight: getGlobalData('headHeight')
		});
	}

	componentDidMount() {
		let dataList = [ ...Array(10).keys() ];
		this.setState({ dataList });
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	tabSwitchCb = (tabType) => {
		console.log(tabType);
		this.setState({ tabType });
	};
	onReachBottom() {
		console.log('上拉加载更多开始');
		let { page } = this.state;
		//模拟数据
		page += 10;
		this.setState({ page });
		setTimeout(() => {
			this.pageAddOne(page);
		}, 500);
	}
	pageAddOne = (page) => {
		let dataList = [ ...Array(page).keys() ];
		this.setState({ dataList });
	};
	render() {
		let { statusBarHeight, titleBarHeight, dataList, tabType } = this.state;
		let headStyle = {
			height: `${titleBarHeight}px`,
			lineHeight: `${titleBarHeight}px`,
			paddingTop: `${statusBarHeight}px`
		};
		let isHasMore = true;

		return (
			<View className='index'>
				<View className='fixed-head'>
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
				</View>
				<View>{this.state.msg}</View>
				<MyList dataList={dataList} isHasMore={isHasMore} tabType={tabType} />
			</View>
		);
	}
}

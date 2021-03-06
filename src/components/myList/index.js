import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import './index.scss';

export default class MyTabBar extends Component {
	static defaultProps = {
		dataList: []
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
		const { dataList, isHasMore, tabType } = this.props;
		return (
			<View className='my-list'>
				{dataList.map((item, index) => (
					<View className='item' key={index}>
						<View className='logo-wrap'>
							<Image className='logo' src='http://www.hndt.com/fm/900/res/dJkNYkGj.jpg?1503459110283' />
							<View className='logo-mark' />
							<Image className='icon-play' src={require('./icon-play.png')} />
						</View>
						<View className='text-wrap'>
							<View className='title-wrap'>
								<View className='title'>河南影视广播</View>
								<View className='border' />
							</View>
							<View className='desc-wrap'>河南影视广播内容简介河南影视广播内容简介</View>
						</View>
						<View className='other-wrap'>
							{tabType === 0 ? (
								<View className='collect-wrap'>
									<Image src={require('./icon-collect.png')} className='icon-collect' />
									<Text className='text-collect'>收藏</Text>
								</View>
							) : (
								''
							)}
							<View className='time-wrap'>2018.07.21</View>
						</View>
					</View>
				))}
				<View className='more-tips'>{isHasMore ? <Text>加载中...</Text> : <Text>暂无更多数据</Text>}</View>
			</View>
		);
	}
}

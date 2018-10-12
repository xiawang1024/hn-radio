import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';

export default class HomeHot extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	moreHandler = () => {
		Taro.showToast({
			title: '更多'
		});
	};

	render() {
		let numbers = [ 1, 2, 3 ];
		return (
			<View className='home-live'>
				<View className='head-wrap'>
					<View className='left'>
						<Image className='icon-head' src={require('./icon-head.png')} />
						<Text className='text'>直播电台</Text>
					</View>
					<View className='right' onClick={this.moreHandler}>
						<Text>更多</Text>
						<Image src={require('./icon-more.png')} className='icon-more' />
					</View>
				</View>
				<View className='list-wrap'>
					{numbers.map((item, index) => {
						return (
							<View className='item' key={index.toString()}>
								<View className='logo-wrap'>
									<Image
										className='logo'
										src='http://www.hndt.com/fm/900/res/dJkNYkGj.jpg?1503459110283'
									/>
									<View className='play-num-wrap'>
										<View className='num'>河南广播电视台影视广播</View>
									</View>
								</View>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}

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

	render() {
		let numbers = [ 1, 2, 3, 4, 5, 6 ];
		return (
			<View className='home-hot'>
				<View className='head-wrap'>
					<Image className='icon-head' src={require('./icon-head.png')} />
					<Text className='text'>热播推荐</Text>
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
										<Image className='icon-play' src={require('./icon-play.png')} />
										<Text className='num'>12345</Text>
									</View>
								</View>
								<View className='name'>河南广播电视台影视广播</View>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}

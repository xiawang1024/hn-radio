import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';

export default class SwiperWrap extends Component {
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
			<Swiper
				className='swiper-wrap'
				indicatorColor='#efefef'
				indicatorActiveColor='#c20d23'
				circular
				indicatorDots
				autoplay
			>
				<SwiperItem>
					<Image
						src='http://www.hndt.com/brand/612/res/pi3F3ZID.jpg?1497345245233'
						className='item-img'
						mode='aspectFill'
					/>
				</SwiperItem>
				<SwiperItem>
					<Image
						src='http://www.hndt.com/brand/612/res/pi3F3ZID.jpg?1497345245233'
						className='item-img'
						mode='aspectFill'
					/>
				</SwiperItem>
				<SwiperItem>
					<Image
						src='http://www.hndt.com/brand/612/res/pi3F3ZID.jpg?1497345245233'
						className='item-img'
						mode='aspectFill'
					/>
				</SwiperItem>
			</Swiper>
		);
	}
}

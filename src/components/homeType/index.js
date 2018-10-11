import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.scss';

import typeData from './data';

export default class HomeType extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	typeHandler = (msg) => {
		Taro.showToast({
			title: msg,
			icon: 'success'
		});
	};

	render() {
		return (
			<View className='home-type'>
				{typeData.map((item) => {
					return (
						<View
							className='item'
							key={item.id.toString()}
							onClick={this.typeHandler.bind(this, item.name)}
						>
							<Image src={item.icon} className='icon-type' />
							<View className='name-type'>{item.name}</View>
						</View>
					);
				})}
			</View>
		);
	}
}

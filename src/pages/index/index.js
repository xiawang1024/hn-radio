import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: '首页'
	};
	constructor(props) {
		super(props);
		this.state = {
			msg: ''
		};
	}

	componentWillMount() {}

	componentDidMount() {
		let obj = {
			name: 'wangx',
			age: 28
		};
		Taro.setStorage({
			key: 'user',
			data: obj
		}).then((res) => {
			console.log(res);
			this.setState({
				msg: res.errMsg
			});
		});

		setTimeout(() => {
			Taro.getStorage({ key: 'user' }).then((res) => {
				console.log(res.data);
				this.setState({
					msg: res.data.name
				});
			});
		}, 500);
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className='index'>
				<Text>{this.state.msg}</Text>
			</View>
		);
	}
}

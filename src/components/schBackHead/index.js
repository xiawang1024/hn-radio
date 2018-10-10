import Taro, { Component } from '@tarojs/taro';
import { View, Image, Input, Icon } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import './index.scss';

export default class SchBackHead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0,
			titleBarHeight: 0,
			headHeight: 0
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
	onInput = (e) => {
		console.log(e.target.value);
	};
	onConfirm = (e) => {
		console.log(e.target.value);
	};
	onBack = () => {
		Taro.showModal({
			title: 'back'
		});
	};
	render() {
		let { statusBarHeight, titleBarHeight, headHeight } = this.state;
		let headStyle = {
			height: `${headHeight}px`,
			paddingTop: `${statusBarHeight}px`
		};
		return (
			<View className='logo-sch-head'>
				<View className='head-wrap' style={headStyle}>
					<Image
						src={require('./icon-back.png')}
						className='icon-back'
						mode='aspectFit'
						onClick={this.onBack}
					/>
					<View className='sch-wrap'>
						<Icon size='16' type='search' />
						<Input
							onInput={this.onInput}
							onConfirm={this.onConfirm}
							className='sch-ipt'
							type='text'
							placeholder='搜索'
							placeholderStyle='color:gray'
							confirmType='search'
						/>
					</View>
				</View>
			</View>
		);
	}
}

import Taro, { Component } from '@tarojs/taro';
import { View, Image, Input, Icon } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import './index.scss';

export default class LogoSchHead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0,
			titleBarHeight: 0,
			headHeight: 0
		};
	}

	static defaultProps = {
		fixedHead: false
	};

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
	render() {
		let { statusBarHeight, titleBarHeight, headHeight } = this.state;
		let { fixedHead } = this.props;
		let headStyle = {
			height: `${headHeight}px`,
			paddingTop: `${statusBarHeight}px`
		};
		let fixedHeadStyle = {};
		if (fixedHead) {
			fixedHeadStyle = {
				position: 'fixed',
				zIndex: 1024,
				left: 0,
				top: 0,
				width: '100%'
			};
		}
		return (
			<View className='logo-sch-head' style={fixedHeadStyle}>
				<View className='head-wrap' style={headStyle}>
					<Image src={require('./icon-logo.png')} className='icon-logo' />
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

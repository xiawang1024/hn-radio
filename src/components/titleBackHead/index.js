import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
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
	static defaultProps = {
		headTitle: '直播电台'
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

	onBack = () => {
		Taro.navigateBack();
	};
	render() {
		let { statusBarHeight, titleBarHeight, headHeight } = this.state;
		let headStyle = {
			height: `${headHeight}px`,
			paddingTop: `${statusBarHeight}px`
		};
		let fixedHeadStyle = {
			position: 'fixed',
			zIndex: 1024,
			left: 0,
			top: 0,
			width: '100%'
		};
		let { headTitle } = this.props;
		return (
			<View className='logo-sch-head' style={fixedHeadStyle}>
				<View className='head-wrap' style={headStyle}>
					<Image
						src={require('./icon-back.png')}
						className='icon-back'
						mode='aspectFit'
						onClick={this.onBack}
					/>
					<Text className='title'>{headTitle}</Text>
				</View>
			</View>
		);
	}
}

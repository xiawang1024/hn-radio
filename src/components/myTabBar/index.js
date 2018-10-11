import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class MyTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSelected: 0
		};
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}
	tabSwitch = () => {
		let { isSelected } = this.state;
		if (isSelected === 0) {
			isSelected = 1;
		} else {
			isSelected = 0;
		}
		let { onTabSwitchCb } = this.props;
		onTabSwitchCb(isSelected);

		this.setState({
			isSelected
		});
	};
	render() {
		let isSelected = this.state.isSelected;
		return (
			<View className='my-tab-bar'>
				<View className='tab-item' onClick={this.tabSwitch}>
					<View className='text'>我的收藏</View>
					<View className={isSelected === 0 ? 'border z-curt' : 'border'} />
				</View>
				<View className='tab-item' onClick={this.tabSwitch}>
					<View className='text'>收听历史</View>
					<View className={isSelected === 1 ? 'border z-curt' : 'border'} />
				</View>
			</View>
		);
	}
}

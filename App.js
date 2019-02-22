import React, {Component} from 'react';
import {
	StyleSheet,
	Platform,
	TouchableHighlight,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	Alert,
	View
} from 'react-native';

export default class App extends Component {
	_onButtonPressed() {
		Alert.alert('Button pressed');
	}

	_onLongButtonPressed() {
		Alert.alert('Button pressed for long');
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={this._onButtonPressed} underlayColor={'white'}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableHighlight</Text>
					</View>
				</TouchableHighlight>
				<TouchableOpacity onPress={this._onButtonPressed}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableOpacity</Text>
					</View>
				</TouchableOpacity>
				<TouchableNativeFeedback
					onPress={this._onButtonPressed}
					background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableNativeFeedback</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableWithoutFeedback onPress={this._onButtonPressed}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableHighlight onPress={this._onPressButton}
				                    onLongPress={this._onLongButtonPressed}
				                    underlayColor="white">
					<View style={styles.button}>
						<Text style={styles.buttonText}>Touchable with Long Press</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		flex: 1,
		alignItems: 'center',
	},
	button: {
		marginBottom: 30,
		width: 260,
		alignItems: 'center',
		backgroundColor: '#2196F3',
	},
	buttonText: {
		padding: 20,
		color: 'white',
	},
});
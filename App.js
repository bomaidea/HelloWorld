import React, {Component} from 'react';
import {StyleSheet, Button, Alert, View} from 'react-native';

export default class App extends Component {
	_onButtonPressed() {
		Alert.alert('Button pressed');
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					<Button title={'Press Me'} onPress={this._onButtonPressed}/>
				</View>
				<View style={styles.buttonContainer}>
					<Button title={'Press Me'} onPress={this._onButtonPressed} color={'#841584'}/>
				</View>
				<View style={styles.alternativeLayoutButtonContainer}>
					<Button title={'This looks great!'} onPress={this._onButtonPressed}/>
					<Button title={'OK!'} onPress={this._onButtonPressed} color={'#841584'}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
	},
	buttonContainer: {
		margin: 20,
	},
	alternativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
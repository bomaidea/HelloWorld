import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Hello {this.props.name}!</Text>
			</View>
		);
	}
}

export default class App extends Component {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Greeting name='Rexxar' />
				<Greeting name='Jaina' />
				<Greeting name='Valeera' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		width: 217,
		height: 387,
	},
});
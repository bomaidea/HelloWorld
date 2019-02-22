import React, {Component} from 'react';
import {Button, Alert, View} from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={{padding: 50}}>
				<Button onPress={() => {
					Alert.alert('You tapped the button');
				}}
				        title="PressMe"
				/>
			</View>
		);
	}
}
import React, { Component } from 'react';
import { View } from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={{
				flex:1,
				flexDirection: 'colum',
				justifyContent: 'center',
				alignItems: 'stretch'
			}}>
				<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
				<View style={{height: 50, backgroundColor: 'skyblue'}}/>
				<View style={{height: 100, backgroundColor: 'steelblue'}}/>
			</View>
		);
	}
}
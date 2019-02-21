import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class App extends React.Component {
	render() {
		let pic = {
			uri: 'http://giuliobosco.ch/i.jpg'
		};
		return (
			<View style={styles.container}>
				<Text>Matteo Bosco's APP!</Text>
				<Image source={pic} style={{width:217, height: 387}}/>
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
	/*image: {
		width: 217,
		height: 387,
	},*/
});

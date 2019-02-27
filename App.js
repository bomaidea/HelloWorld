import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Modal,
	TouchableOpacity
} from 'react-native';
import {Permissions, Notifications} from 'expo';

export default class App extends Component {

	state = {
		notification: null,
		messageText: ''
	};

	registerForPushNotificationsAsync = async () => {
		const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
		if (status !== 'granted') {
			console.log(status) ;
			alert(status);
			return;
		}
		let token = await Notifications.getExpoPushTokenAsync();
		return fetch(PUSH_REGISTRATION_ENDPOINT, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token: {
					value: token,
				},
				user: {
					username: 'warly',
					name: 'Dan Ward'
				},
			}),
		});

		this.notificationSubscription = Notifications.addListener(this.handleNotification);
	};

	handleNotification = (notification) => {
		this.setState({notification});
	};

	handleChangeText = (text) => {
		this.setState({messageText: text});
	};

	componentDidMount() {
		this.registerForPushNotificationsAsync();
	}

	sendMessage = async () => {
		fetch(MESSAGE_ENPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				message: this.state.messageText,
			}),
		});
		this.setState({messageText: ''});
	};


	render() {
		return (
			<View style={styles.container}>
				<TextInput
					value={this.state.messageText}
					onChangeText={this.handleChangeText}
					style={styles.textInput}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={this.sendMessage}
				>
					<Text style={styles.buttonText}>Send</Text>
				</TouchableOpacity>
				{this.state.notification ?
					this.renderNotification()
					: null}
			</View>
		);
	}
}

const PUSH_REGISTRATION_ENDPOINT = 'http://c174239b.ngrok.io/token';
const MESSAGE_ENPOINT = 'http://c174239b.ngrok.io/message';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#474747',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		height: 50,
		width: 300,
		borderColor: '#f6f6f6',
		borderWidth: 1,
		backgroundColor: '#fff',
		padding: 10
	},
	button: {
		padding: 10
	},
	buttonText: {
		fontSize: 18,
		color: '#fff'
	},
	label: {
		fontSize: 18
	}
});
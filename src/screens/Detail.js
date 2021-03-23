/** @format */

import React from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import Todos from '../services/TodoList';
import BackButton from '../components/BackButton';
import { getStatusBarHeight } from 'react-native-status-bar-height';

function Detail({ navigation, route }) {
	const { idTodo } = route.params;
	const todo = Todos.filter((item) => item.id === idTodo)[0];

	return (
		<View style={styles.container}>
			
			<Header
				title={todo.name}
			></Header><BackButton goBack={navigation.goBack} />
			<ScrollView>
				<View style={styles.content}>
					<View style={styles.item}>
						<Text style={styles.header}>Time: </Text>
						<Text style={styles.info}>{todo.time}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Address: </Text>
						<Text style={styles.info}>{todo.address}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Description: </Text>
						<Text style={styles.info}>
							{todo.description}
						</Text>
					</View>
				</View>				
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
		marginLeft: 10,
        flex: 1
    },
    item: {
        padding: 10,
		backgroundColor: '#fff',
		marginVertical: 10,
		marginHorizontal: 10,
		flexDirection: 'row',
		borderRadius: 7,
		overflow: 'hidden',
    },
    header: {
        fontSize: 20,
		marginBottom: 10,
		fontWeight: 'bold'
    },
    info: {
        fontSize: 20,
		marginBottom: 10,
    },
    itemContainer: {
        width: '100%',
        height: 400
    }
});

export default Detail;

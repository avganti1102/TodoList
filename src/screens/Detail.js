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

function Detail({ navigation, route }) {
	const { idTodo } = route.params;
	const todo = Todos.filter((item) => item.id === idTodo)[0];

	return (
		<View style={styles.container}>
			
			<Header
				onBack={() => navigation.goBack()}
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
        flex: 1
    },
    item: {
        marginHorizontal: 16,
        marginVertical: 8
    },
    header: {
        fontSize: 20,
		marginBottom: 10,
		fontWeight: 'bold'
    },
    info: {
        fontSize: 15
    },
    itemContainer: {
        width: '100%',
        height: 400
    }
});

export default Detail;

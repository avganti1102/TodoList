import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Alert,
} from 'react-native';
import Header from "../components/Header";
import data from "../services/TodoList";

function ItemList({ data }) {
  	return (
		<TouchableOpacity onPress={() => Alert.alert('Buy')}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.header} numberOfLines={2}>
						{data.name}
					</Text>
					<Text>Colour: {data.colour}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

function Dashboard({ navigation }) {
	return (
		<View style={styles.waper}>
			<Header
				title='Todos'
			></Header>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ItemList data={item}></ItemList>}
			></FlatList></View>
	);
}

const styles = StyleSheet.create({
	waper: {
		flex: 1,
	},
	container: {
		padding: 10,
		backgroundColor: '#fff',
		marginVertical: 10,
		marginHorizontal: 10,
		flexDirection: 'row',
		borderRadius: 7,
		overflow: 'hidden',
	},
	content: {
		marginLeft: 10,
		flex: 1,
	},
	header: {
		fontSize: 20,
		marginBottom: 10,
	},
});

export default Dashboard;


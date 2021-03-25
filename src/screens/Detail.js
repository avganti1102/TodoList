/** @format */

import React, {useState, useContext, useEffect} from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Context from '../screens/Context';
import { useNavigation} from '@react-navigation/native';

function Detail({route }) {
	const [data, setData] = useState({});
	const navigation = useNavigation();
	const [context, setContext] = useContext(Context);

	const { transData } = route.params;

	useEffect(() => {
		const data = context.find((item) => item.id === transData.id);
		console.log(context, data, transData.id)
		setData(data);
	}, []);

	return (
		<View style={styles.container}>
			<Header
				title={data.name}
			></Header><BackButton goBack={navigation.goBack} />
			<ScrollView>
				<View style={styles.content}>
					<View style={styles.item}>
						<Text style={styles.header}>Time Create: </Text>
						<Text style={styles.info}>{data.time}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Address: </Text>
						<Text style={styles.info}>{data.address}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Description: </Text>
						<Text style={styles.info}>
							{data.description}
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

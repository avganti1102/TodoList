import React from 'react'
import {View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import Detail from '../screens/Detail'

function Create({navigation}) {
    return (
		<View style={styles.waper}><BackButton goBack={navigation.goBack} />
			<Header
				title='Add to do'
				goBack={() => navigation.navigate('Detail')}
			></Header>
			<Text>aklsdlkasbdl</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	waper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	  },
  });

export default Create;
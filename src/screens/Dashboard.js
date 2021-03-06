import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ItemList,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import data from "../services/TodoList";

const Item({ data }){
  return (
    <View style={{
      height: 50,
      width: '100%',
      backgroundColor: 'blue',
      marginBottom: 10,
    }}>
    </View>
  )
}

function Dashboard({ navigation }) {
  const LogoutButton = () => (
    <TouchableOpacity
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "StartScreen" }],
        })
      }
      style={styles.logoutButton}
    >
      <Text>Logout</Text>
    </TouchableOpacity>
  );
  return (
    <Background>
      <LogoutButton></LogoutButton>
      <View style={styles.waper}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemList data={item}></ItemList>}
        ></FlatList>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
  waper: {
    flex: 1,
  }
});

export default Dashboard;

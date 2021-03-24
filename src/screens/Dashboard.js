import React, { useContext, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import data from "../services/TodoList";
import Context from "../screens/Context";
import {useNavigation} from '@react-navigation/native';

const ItemList = ({ data }) => {
const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Detail', {
      transData: data
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header} numberOfLines={2}>
            {data.name}
          </Text>
          <Text>Time: {data.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function Dashboard({ navigation }) {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
	  setContext([...data]);
  }, [])
  return (
    <View style={styles.waper}>
      <Header
        title="List"
        rightComponent={<Text style={styles.create}>+</Text>}
        rightButton={() => navigation.navigate("Create")}
      />
      <FlatList
        data={context}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemList data={item}></ItemList>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
  },
  container: {
    margin: 20,
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  create: {
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    top: -20,
    right: 30,
  },
});

export default Dashboard;

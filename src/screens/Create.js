import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Context from "../screens/Context";
import { useNavigation } from "@react-navigation/native";
import { fieldValidator } from "../helpers/fieldValidator";

function ItemInputTodo({ value, onChange, index }) {
  return (
    <TextInput
      onChangeText={(text) => onChange(text, index)}
      value={value}
    ></TextInput>
  );
}

ItemInputTodo.defaultProps = {
  value: "",
  onChange: () => {},
  index: -1,
};

function Create() {
  const [name, setName] = useState({ value: "", error: "" });
  const [address, setAddress] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const navigation = useNavigation();
  const [context, setContext] = useContext(Context);

  const handlerKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleAdd = () => {
    const nameError = fieldValidator(name.value);
    const addressError = fieldValidator(address.value);
    const descriptionError = fieldValidator(description.value);
    if (nameError || addressError || descriptionError) {
      setName({ ...name, error: nameError });
      setAddress({ ...address, error: addressError });
      setDescription({ ...description, error: descriptionError });
      return;
    }

    var time = new Date();
    const currentTime = `${time.getHours()}h${time.getMinutes()} - ${time.getDate()}/${
      time.getMonth() + 1
    }/${time.getFullYear()}`;
    setContext((state) => [
      ...state,
      {
        id: context.length + 1,
        name: name.value,
        time: currentTime,
        address: address.value,
        description: description.value,
      },
    ]);
    navigation.navigate("Dashboard");
  };

  return (
    <TouchableWithoutFeedback onPress={handlerKeyboard}>
      <View>
        <View style={styles.container}>
          <Header title="Add to do" />
          <BackButton goBack={navigation.goBack} />
            <Text style={styles.header}>Name</Text>
            <View style={styles.item}>
              <TextInput
                label="Name"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: "" })}
                errorText={name.error}
              ></TextInput>
            </View>
            <Text style={styles.header}>Address</Text>
            <View style={styles.item}>
              <TextInput 
                label="Address"
                value={address.value}
                onChangeText={(text) => setAddress({ value: text, error: "" })}
                errorText={address.error}
              ></TextInput>
            </View>
            <Text style={styles.header}>Description</Text>
            <View style={styles.item}>
              <TextInput
                label="Drescription"
                value={description.value}
                onChangeText={(text) =>
                  setDescription({ value: text, error: "" })
                }
                errorText={description.error}
              ></TextInput>
            </View>
            <View style={styles.button}>
              <Button mode="contained" onPress={handleAdd}>
                Done
              </Button>
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignContent: "center",
  },
  item: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    paddingLeft: '25%'
  }
});

export default Create;

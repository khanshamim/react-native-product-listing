import React  from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from "react-native";
import Axios from "axios";
import { AuthContext } from "../App";

console.log(AuthContext);
export default  function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

    return (
      <View style={styles.productEntryView}>
        <TextInput
          style={styles.text}
          value={username}
          placeholder="Username"
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.text}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button style={styles.btn} title="Login" onPress={() => signIn({username, password})}>
          Login
        </Button>
      </View>
    );
  
}

const styles = StyleSheet.create({
  productEntryView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "5%",
    borderColor: "lightgray",
    borderRadius: 4,
    borderWidth: 1
  },
  text: {
    backgroundColor: "",
    borderRadius: 4,
    borderColor: "darkgray",
    borderWidth: 1,
    paddingLeft: 5,
    height:'40px'
  },
  btn:{
    height:'40px',
  }
});

import React from "react";
import { Text, StyleSheet, View, Button, Picker } from "react-native";
import { AuthContext } from "../App";

export default function Home() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: "28px",
    alignItems: "center",
    justifyContent: "center",
    color: "yellow"
  }
});

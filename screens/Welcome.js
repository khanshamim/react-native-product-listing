import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Home from "./Home";

export function Welcome({ navigation }) {
  return (
    <View style={styles.WelcomeView}>
      <Text style={styles.WelcomeHeader}>
        Welcome to Product Management App
      </Text>
      <Button
        title="Go to Admin Profile"
        style={styles.WelcomeButton}
        onPress={() => navigation.navigate("Home", { userName: "admin" })}
      />
      <Button
        title="Go to Products"
        style={styles.WelcomeButton}
        onPress={() => navigation.navigate("NavigationTab", { userName: "admin" })}
      />
      <Button
        title="Go to Products By Category"
        style={styles.WelcomeButton}
        onPress={() => navigation.navigate("ProductList", { category: "Mouse" })}
      />
      <Button
        title="Go to Product List"
        style={styles.WelcomeButton}
        onPress={() => navigation.navigate("ProductListSecListView", { userName: "admin" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  WelcomeView: {
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
  },
  WelcomeHeader:{
    fontSize: 24,
    fontWeight:'bold',
    padding: 10, 
    textAlign: "center", 
    marginBottom:'40px'
  },
  WelcomeButton : {
   height:'50px',
   textAlign:'center',
   justifyContent:'center'
  }
})

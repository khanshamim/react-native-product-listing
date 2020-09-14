import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";

//Layout
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { Welcome } from "./screens/Welcome";
import NavigationTab from "./screens/NavigationTab";


//Component 
import { ProductList } from "./screens/components/PrdouctList";
import { ProductListSecListView } from "./screens/components/ProductListSectionListView";

import * as LoginActionType from './redux/actions/ActionTypes';


export const AuthContext = React.createContext();

const Stack = createStackNavigator();


const initialState = {
    isLoading: true,
    isSignOut: false,
    userToken: null
}

const reducer = (prevState, action) => {
    switch (action.type) {
      case  LoginActionType.RESTORE_TOKEN:
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case LoginActionType.SIGN_IN:
        return {
          ...prevState,
          isSignOut: false,
          userToken: action.token
        };
      case LoginActionType.SIGN_OUT:
        return {
          ...prevState,
          isSignOut: true,
          userToken: null
        };
      default:
        return prevState;
    }
  };



export default function App({ navigation }) {

  const [state, dispatch] = React.useReducer(reducer,initialState);
    
  React.useEffect(() => {
    //fetch token from storage
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken: await AsyncStorage.getItem("userToken");
      } catch (e) {
        //Restore if failed
      }
      //validate with the production App
      dispatch({ type: LoginActionType.RESTORE_TOKEN, token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        //In Production - send data to server, after getting token we need to persist the token using
        // AsyncStorage,

        dispatch({ type: LoginActionType.SIGN_IN , token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: LoginActionType.SIGN_OUT }),
      signUp: async data => {
        //send data to server and get a token
        dispatch({ type: LoginActionType.SING_IN, token: "dummy-auth-token" });
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {
          state.isLoading ? (
            //still checking token
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          ) : state.userToken == null ? (
            //no token found.. user isn't signIn
            <Stack.Screen name="Login" component={Login} 
            options={{title:'Sign In',
                //When Login out, a pop animations 
                animationTypeForReplace: state.isSignOut ? 'pop': 'push',
              }}
           />

          ): (
            //User Sign In
            <Stack.Screen name="Welcome" component={Welcome}  />
          )}
      
          <Stack.Screen
            name="NavigationTab"
            options={{ title: "Manage Products" }}
            component={NavigationTab}
          />
          <Stack.Screen
            name="ProductListSecListView"
            title="Product List"
            component={ProductListSecListView}
          />
          <Stack.Screen
            name="ProductList"
            title="Product List"
            component={ProductList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'left',
    justifyContent: "flex-start"
  },
  title: {
    backgroundColor: "#fff",
    color: "blue",
    fontSize: "28px",
    alignSelf: "center"
  }
});

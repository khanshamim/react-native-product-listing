import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ProductListSecListView } from "./components/ProductListSectionListView";
import { ProductList } from "./components/PrdouctList";
import ProductEntry from "./components/ProductEntry";
import TabBarIcon from './components/TabBarIcon';
 

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ProductEntry" 
      options={{title:'Add Product',
      tabBarIcon: ({focused})=>
      <TabBarIcon focused={focused} name="md-code-working" />}} component={ProductEntry}></Tab.Screen>

      <Tab.Screen name="ProductList"
      options={{title:'Product List',
      tabBarIcon: ({focused})=>
      <TabBarIcon focused={focused} name="md-list" />}}  component={ProductList} ></Tab.Screen>
     
      <Tab.Screen
        name="ProductListSecListView"
        options={{title:'Product Section View',
        tabBarIcon: ({focused})=>
        <TabBarIcon focused={focused} name="md-list" />}} 
        component={ProductListSecListView}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

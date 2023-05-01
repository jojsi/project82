import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import Feed from "../screens/Feeds";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator
    screenOptions={({focused, color, size}) => ({
      let iconName;
      if (route.name === 'Feed') {
        iconName = focused
          ?"book"
          :"book-outline";
      } else if (route.name === 'CreatePost') {
        iconName = focused ? 'create' : 'create-outline'
      }
      return <Ionicons name={iconName} size={size} color={color}/>
    }
  })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }}

    <Tab.Screen name= "Feed" component={Feed}/>
    <Tab.Screen name="CreatePost" component={CreatePost}
    </TabNavigator>
  );
}

export default BottomTabNavigator;
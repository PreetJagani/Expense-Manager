import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import AddExpenseScreen from './AddExpenseScreen';
import ProfileScreen from './ProfileScreen';
import DetailsScreen from './DetailsScreen';
import Expense from '../models/Expense';

export type RootStackParamList = {
  HomeTab: undefined;
  Add_Expense: undefined;
  Detail_Screen: {expense: Expense};
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardShadowEnabled: false,
          gestureEnabled: true,
          headerShown: false,
        }}>
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="Add_Expense" component={AddExpenseScreen} />
        <Stack.Screen name="Detail_Screen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;

const HomeTab: React.FC = () => {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

import React , {Component} from 'react'

import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Login from './screens/Login';
import HomeScreen from './screens/Home';
import ParentsScreen from './screens/ParentsScreen';
import KidsScreen from './screens/KidsScreen'


export default class App extends Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}


const AppSwitchNavigator = createSwitchNavigator(
  {
    Login:  Login ,
    Home : HomeScreen,
    Parent : ParentsScreen,
    Kid : KidsScreen
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
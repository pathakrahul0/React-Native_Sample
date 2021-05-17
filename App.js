import React, { Component, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, SafeAreaView, } from 'react-native';
import SplashScreen from './src/screen/SplashScreen';
import Dashboard from './src/screen/Dashboard';
import UserProfile from './src/screen/UserProfile';
import navigationTheme from './src/res/navigationTheme';

const Stack = createStackNavigator()


export default FunctionOne = () => {
  return (
    <NavigationContainer
      style={{ flex: 1 }} 
      theme={navigationTheme}
       >
      <Stack.Navigator >
        <Stack.Screen name='User List' component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name='User Profile' component={UserProfile} options={{headerShown:false}}/>
      </Stack.Navigator>

      {/* <UserProfile
       fName={fName}
      /> */}
    </NavigationContainer>
  )
}




FunctionTwo = () => {
  return (
    <SafeAreaView>
      <Text>Welcom To React Native Function Two Component</Text>
    </SafeAreaView>
  )
}

class SampleClassOneComponent extends Component {
  render() {
    return (
      <SafeAreaView >
        <Text>Welcom To React Native Class One Component</Text>
      </SafeAreaView>
    )
  }
}

class SampleClassTwoComponent extends Component {
  render() {
    return (
      <SafeAreaView >
        <Text>Welcom To React Native Class Two Component</Text>
      </SafeAreaView>
    )
  }
}





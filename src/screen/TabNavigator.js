import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Text,
    Image,
} from 'react-native'

import UserList from './UserList';
import SplashScreen from './SplashScreen';


const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component {

    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeBackgroundColor: "tomato",
                    activeTintColor: "#fff",
                    inactiveBackgroundColor: "#eee",
                    inactiveTintColor: "#000"
                }}
            >
                <Tab.Screen name="User List" component={UserList}
                    options={{
                    
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <Image
                                source={require("../image/home.png")}
                            />
                        ),
                    }}
                />
                <Tab.Screen name="Splash Screen" component={SplashScreen}
                
                options={{
                    
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}/>
            </Tab.Navigator>
        )
    }
}

import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserList from './UserList';
import UserProfile from './UserProfile';
import TabNavigator from './TabNavigator';


const Drawer = createDrawerNavigator();

export default class Dashboard extends Component {

    render() {
        return (
            <Drawer.Navigator >
                 <Drawer.Screen name="Tab Navigater" component={TabNavigator} />
                <Drawer.Screen name="User List" component={UserList} />
                <Drawer.Screen name="User Profile" component={UserProfile} />
            </Drawer.Navigator>
        )
    }
}





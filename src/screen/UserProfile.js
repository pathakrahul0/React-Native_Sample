import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Text,
    SafeAreaView,
    Button,
    Image,
    StyleSheet,
    View,
    Pressable,
    TextInput,
    ScrollView,


} from 'react-native';


export default class UserProfile extends Component {

    constructor(props) {
        super(props)
        console.warn(props)
        this.state = {
            item: this.props.route.params.item,
            email:''
        }

    }

    setStorage = async (value) => {
        try {
            await AsyncStorage.setItem('email', value)
            alert('Data Store Successfuly')
        } catch (error) {
            console.log(error)
        }


    }


    getStorage = async () => {
        try {
            const emails = await AsyncStorage.getItem('email')
            this.setState({ email: emails })
            alert('New email is ' + this.state.email)
            console.log(emails)
        } catch (error) {
            console.log(error)
        }

    }

    render() {

        return (
            <SafeAreaView
                style={styles.container}
            >
                <Image source={
                    { uri:  this.state.item.image }}
                    style={styles.logo}
                />
                <View
                    style={{ flex: 2 }}
                >

                    <TextInput
                        placeholder='Email'
                        style={styles.bgText}
                        autoCompleteType="email"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ email: text })}
                    >
                        {this.state.item.email}
                    </TextInput>


                    <TextInput
                        placeholder='Name'
                        style={styles.bgText}
                    >
                        {this.state.item.name}
                    </TextInput>

                    <TextInput
                        placeholder='Mobile Number'
                        style={styles.bgText}
                    >
                        {this.state.item.phone}
                    </TextInput>
                </View>
                <Pressable
                    onPress={() => { this.setState({ fullName: 'Pathak Ji' }) }}
                >
                    <Text
                        style={styles.bgButton2}
                    >State Update</Text>
                </Pressable>

                <Pressable
                    onPress={() => { this.setStorage(this.state.email) }}
                >
                    <Text
                        style={styles.bgButton2}

                    >Store Email</Text>
                </Pressable>
                <Pressable
                    onPress={() => { this.getStorage() }}
                >
                    <Text
                        style={styles.bgButton1}
                    >Get Update Email</Text>
                </Pressable>
            </SafeAreaView>


        )
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 16,
        flex: 1,

    },
    logo: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        marginBottom: 24
    },
    bgText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'normal',
        marginVertical: 4,
        borderColor: 'orange',
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 50,
        textAlignVertical: 'center',

    },

    bgButton1: {
        backgroundColor: 'orange',
        borderRadius: 50,
        fontSize: 18,
        color: 'white',
        fontWeight: 'normal',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 45,
    },

    bgButton2: {
        backgroundColor: 'orange',
        borderRadius: 50,
        fontSize: 18,
        color: 'white',
        fontWeight: 'normal',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 45,
        marginBottom: 8
    },



});



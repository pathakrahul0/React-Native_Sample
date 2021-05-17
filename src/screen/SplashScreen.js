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


export default class SplashScreen extends Component {

    constructor(props) {
        super(props)
        // console.warn(props)
        this.state = {
            fullName: props.fName,
            email: '',

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
                    { uri: 'data:image/jpeg;base64,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' }}
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
                        onChangeText={(text) => this.setState({email:text})}
                    >
                     
                    </TextInput>


                    <TextInput
                        placeholder='Name'
                        style={styles.bgText}
                    >
                        {this.state.fullName}
                    </TextInput>

                    <TextInput
                        placeholder='Mobile Number'
                        style={styles.bgText}
                    >
                        1234567890
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



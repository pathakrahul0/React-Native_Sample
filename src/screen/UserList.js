import React, { Component } from 'react';

import {
    Text,
    SafeAreaView,
    Button,
    Image,
    StyleSheet,
    View,
    Pressable,
    FlatList,


} from 'react-native';



const User = ({ names, email, phone, image, onPress }) => (
    <Pressable
        onPress={onPress} >
        <View
            style={styles.container}

        >
            <Image source={
                { uri: image }}
                style={styles.logo}
               
            />
            <View
                style={{
                    flex: 2,
                    marginLeft:8
                }}
            >
                <Text
                    style={styles.bgText}
                >{names}</Text>
                <Text
                    style={styles.bgText}

                >{email}</Text>
                <Text style={styles.bgText}
                >{phone}</Text>
            </View>

        </View>
    </Pressable>

);

export default class UserList extends Component {

constructor(props){
    super(props)
    this.state= {
        users : [
            {
                id: 1,
                name: 'Rahul',
                email: 'rahul.p@divii.com',
                phone: 1234567890,
                image: 'data:image/jpeg;base64,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',
            },
            {
                id: 2,
                name: 'Pathak',
                email: 'pathak.p@divii.com',
                phone: 6789012345,
                image: 'http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png',
            },
            {
                id: 3,
                name: 'Rahul Pathak',
                email: 'rahul.pathak@divii.com',
                phone: 4561237890,
                image: 'data:image/png;base64,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',
            },
            {
                id: 4,
                name: 'Pathk Rahul',
                email: 'r.pathak@divii.com',
                phone: 8901234567,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&usqp=CAU',
            },
            {
                id: 5,
                name: 'Rahul Rahul',
                email: 'p.rahul@divii.com',
                phone: 9012345678,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHWFss7T4f3QifjwCTUJ-VGqffPBBDI1VlQ&usqp=CAU',
            },
            {
                id: 6,
                name: 'Rahul',
                email: 'rahul.p@divii.com',
                phone: 1234567890,
                image: 'data:image/jpeg;base64,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',
            },
            {
                id: 7,
                name: 'Pathak',
                email: 'pathak.p@divii.com',
                phone: 6789012345,
                image: 'http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png',
            },
            {
                id: 8,
                name: 'Rahul Pathak',
                email: 'rahul.pathak@divii.com',
                phone: 4561237890,
                image: 'data:image/png;base64,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',
            },
            {
                id: 9,
                name: 'Pathk Rahul',
                email: 'r.pathak@divii.com',
                phone: 8901234567,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&usqp=CAU',
            },
            {
                id: 10,
                name: 'Rahul Rahul',
                email: 'p.rahul@divii.com',
                phone: 9012345678,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHWFss7T4f3QifjwCTUJ-VGqffPBBDI1VlQ&usqp=CAU',
            }
        ]
    }
    
}

    render() {
        const renderUser = ({ item }) => (
            <User
                names={item.name}
                email={item.email}
                phone={item.phone}
                image={item.image}
                onPress={() =>
                    this.props.navigation.navigate('User Profile', { item })
                }
            />
        );

        var fName = "Rahul Pathak"
        var lName = "Pathak"
        var age = 24
        return (
            <SafeAreaView  >
                <FlatList
                    data={this.state.users}
                    keyExtractor={item => item.id}
                    renderItem={renderUser}

                />

                {/* 
                <Pressable
                    onPress={() => this.props.navigation.navigate('User Profile', { fName })} >
                    <Text
                        style={styles.bgButton1}
                    >Get User Details</Text>
                </Pressable> */}
            </SafeAreaView>


        )
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 8,
        margin: 8,
        marginVertical: 4,
        borderColor: 'orange',
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        flex: 1,
        flexDirection: 'row'

    },
    logo: {
        width: 70,
        alignSelf: 'center',
        height: 70,
        flex: 1,
        resizeMode:'contain'
    },
    bgText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'normal',
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

 


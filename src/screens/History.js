import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Text, FlatList, Image, View, Alert } from 'react-native';
import styles from './../Styles';
import { TextInput } from 'react-native-gesture-handler';

class ContactsScreen extends Component {
    constructor(){
      super();
    }
    render() {
        const sums = [
            {
                "Id": 0,
                "ClienteId": 10,
                "Valor": 24,
                "Token": global.token,
                "Data": "2016-08-02T14:25:37.55"
            }
        ];

        const renderSum = ({ item }) => {
            <View style={styles.graphicItem}>
                
            </View>
        };

        return (
          <LinearGradient colors={['rgb(40, 44, 56)', 'rgb(23, 79, 126)']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={styles.row}>
              <FlatList data={sums} renderItem={renderSum}/>
            </View>
            <StatusBar style="auto" />
          </LinearGradient>
        );
    }
};

export default ContactsScreen;
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Text, FlatList, Image, View } from 'react-native';
import styles from './../Styles';
import { TextInput } from 'react-native-gesture-handler';

class ContactsScreen extends Component {
    constructor(){
      super();
      this.state = {
        showDialog: false,
        pressedContact: null
      }  
    }
    render() {
        const contacts = [
          {
            name: 'Fulano',
            imageFile: require('./../images/contact1.jpg'),
            phoneNumber: '981775644',
            id: '0'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact2.jpg'),
            phoneNumber: '981667899',
            id: '1'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact3.jpg'),
            phoneNumber: '981998755',
            id: '2'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact4.jpg'),
            phoneNumber: '981337218',
            id: '3'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact5.jpg'),
            phoneNumber: '982334445',
            id: '4'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact6.jpg'),
            phoneNumber: '988765321',
            id: '5'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact7.jpg'),
            phoneNumber: '982445585',
            id: '6'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact8.jpg'),
            phoneNumber: '988747566',
            id: '7'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact9.jpg'),
            phoneNumber: '992149788',
            id: '8'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact10.jpg'),
            phoneNumber: '998564444',
            id: '9'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact11.jpg'),
            phoneNumber: '997190909',
            id: '10'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact12.jpg'),
            phoneNumber: '995132121',
            id: '11'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact13.jpg'),
            phoneNumber: '983445168',
            id: '12'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact14.jpg'),
            phoneNumber: '997165456',
            id: '13'
          },
          {
            name: 'Fulano',
            imageFile: require('./../images/contact15.jpg'),
            phoneNumber: '988777655',
            id: '14'
          },
        ];
        
        const renderContact = ({ item }) => (
          <TouchableOpacity onPress={() => this.setState({ showDialog: true, pressedContact: item })}>
            <View style={styles.row}>
              <Image style={styles.contactImg} source={item.imageFile}/>
              <View style={styles.contactColumn}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.phoneNumber}>(51){item.phoneNumber}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      
        return (
          <LinearGradient colors={['rgb(40, 44, 56)', 'rgb(23, 79, 126)']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={styles.column}>
              <FlatList data={contacts} renderItem={renderContact}/>
            </View>
            { this.state.showDialog ? <View style={styles.dialog}>
                <View style={styles.column}>
                  <View style={styles.row}>
                    <TouchableOpacity onPress={ () => this.setState({ showDialog: false, pressedContact: null })}><Text style={styles.close}>X</Text></TouchableOpacity>
                    <Image style={styles.contactImg} source={this.state.pressedContact.imageFile}/> 
                  </View>
                  <Text style={styles.pressedContactName}>{this.state.pressedContact.name}</Text>
                  <Text style={styles.pressedContactNumber}>(51){this.state.pressedContact.phoneNumber}</Text>
                  <Text>Valor a enviar:</Text>
                  <TextInput value="R$ 0,00"></TextInput>
                  <TouchableOpacity>
                    <View style={styles.sendButton}>
                      <Text style={styles.sendButtonText}>ENVIAR</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </View> : null }
            <StatusBar style="auto" />
          </LinearGradient>
        );
    }
};

export default ContactsScreen;
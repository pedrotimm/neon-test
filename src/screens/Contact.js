import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Text, FlatList, Image, View } from 'react-native';
import styles from './../Styles';
import { TextInput } from 'react-native-gesture-handler';
import contacts from './../ContactsList';

class ContactsScreen extends Component {
    constructor(){
      super();
      this.state = {
        showDialog: false,
        pressedContact: null,
        value: 'R$ 0,00'
      }  
    }
    render() {        
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

        const sendMoney = () => {
          if(!this.state.value || parseFloat(this.state.value.replace('R$ ', '').trim()) <= 0){
            return null;
          }

          const data = [];
          data.push(encodeURIComponent('ClienteId') + '=' + encodeURIComponent(this.state.pressedContact.id));
          data.push(encodeURIComponent('token') + '=' + encodeURIComponent(global.token));
          data.push(encodeURIComponent('valor') + '=' + encodeURIComponent(this.state.value.replace('R$ ', '').replace(',', '.')));

          fetch('http://processoseletivoneon.azurewebsites.net/SendMoney', {
            method: 'POST',
            body: data.join('&')
          }).then( (response) => {
            if(response) {
              this.setState({ showMessage: true, message: 'Sucesso!', messageStatus: 'success' });
            } else {
              this.setState({ showMessage: true, message: 'Falha na solicitação!', messageStatus: 'fail' });
            }
          }).catch( () => {
            this.setState({ showMessage: true, message: 'Falha na solicitação!', messageStatus: 'fail' });
          })
        };
      
        return (
          <LinearGradient colors={['#001f33', '#006bb3']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={[styles.column, { position: 'relative', top: 80 } ]}>
              <FlatList data={contacts} renderItem={renderContact} keyExtractor={(contact) => contact.id.toString()}/>
            </View>
            { this.state.showDialog && <View style={styles.dialog}>
                { this.state.showMessage && ( 
                    <Text style={this.state.messageStatus === 'success' ? [styles.dialog, styles.banner, styles.success] : [styles.dialog, styles.banner, styles.failed]}>{this.state.message}</Text>
                  ) 
                }
                <View style={styles.column}>
                  <View style={styles.contactDetailsRow}>
                    <TouchableOpacity onPress={ () => this.setState({ 
                      showDialog: false, 
                      pressedContact: null,
                      showMessage: false,
                      messageStatus: null,
                      message: null,
                      value: 'R$ 0,00'
                    })}><Text style={styles.close}>X</Text></TouchableOpacity>
                    <Image style={styles.pressedContactImg} source={this.state.pressedContact.imageFile}/> 
                  </View>
                  <Text style={styles.pressedContactName}>{this.state.pressedContact.name}</Text>
                  <Text style={{ color: '#ccefff' }}>(51){this.state.pressedContact.phoneNumber}</Text>
                  <Text style={{ color: 'white', marginBottom: 15, marginTop: 15 }}>Valor a enviar:</Text>
                  <TextInput value={this.state.value} onChangeText={(value) => this.setState({ value: value })} style={styles.inputValue}></TextInput>
                  <TouchableOpacity onPress={sendMoney}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>ENVIAR</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </View> }
            <StatusBar style="auto" />
          </LinearGradient>
        );
    }
};

export default ContactsScreen;
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TextInput, Text, FlatList, Image, View, Alert } from 'react-native';
import styles from './../Styles';

class HomeScreen extends Component {
    constructor(){
        super();

        //captura o token para as transações de envio de dinheiro
        fetch('http://processoseletivoneon.azurewebsites.net/GenerateToken?nome=Pedro Timm da Silveira&email=pedrotimm@hotmail.com', {
          headers: {
            'Content-Type': 'text/plain',
            'mode': 'cors'
          }
        })
          .then( (response) => {
            global.token = response._bodyInit._data.blobId;
          });
    }
    render(){
        const navigation = this.props.navigation;
        const buttons = [
          {
            title: 'ENVIAR DINHEIRO',
            targetPage: 'ENVIAR DINHEIRO',
            key: '0'
          },
          {
            title: 'HISTÓRICO DE ENVIOS',
            targetPage: 'History',
            key: '1'
          }
        ];
        
        const renderButton = ({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.targetPage) }>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      
        return (
          <LinearGradient colors={['rgb(40, 44, 56)', 'rgb(23, 79, 126)']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
              <View style={styles.column}>
                <View style={styles.column}>
                  <Image style={styles.profileImg} source={ require('./../images/perfil.jpg') }/>
                  <TextInput style={styles.name} value="Pedro Timm da Silveira" disabled="true" />
                  <TextInput style={styles.subtitle} value="pedrotimm@hotmail.com" disabled="true"/>
                </View>
                <View style={styles.column}>
                  <FlatList data={buttons} renderItem={renderButton} contentContainerStyle={styles.column}/>
                </View>
              </View>
              <StatusBar style="auto" />
            </LinearGradient>
        );
    }
};

export default HomeScreen;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, TextInput, FlatList, Image, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const buttons = [
  {
    title: 'Enviar dinheiro',
    action: 'sendMoney'
  },
  {
    title: 'Ver histórico de envios',
    action: 'viewHistory'
  }
];

const renderButton = ({ item }) => (
  <Button style={styles.button} title={item.title}></Button>
);

export default function App() {
  return (
    <LinearGradient  colors={['#002233', '#0077b3']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <View style={styles.row}>
        <Image style={styles.profileImg} source={ require('./src/images/perfil.jpg') }/>
      </View>
      <View style={styles.row}>
        <TextInput style={styles.name} value="Pedro Timm da Silveira" disabled="true" />
      </View>
      <View style={styles.row}>
        <TextInput style={styles.subtitle} value="pedrotimm@hotmail.com" disabled="true"/>
      </View>
      <View style={styles.row}>
        <FlatList data={buttons} renderItem={renderButton} keyExtractor={(item) => item.action} contentContainerStyle={styles.endContainer}/>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    marginHorizontal: 15,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 0,
    width: 50,
    height: 50,
    marginTop: 15
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#006666',
    borderWidth: 4
  },
  endContainer: {
    height: 200,
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'flex-end', 
    alignItems: 'center'
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#fff',
    fontSize: 14
  }
});

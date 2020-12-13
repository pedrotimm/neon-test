import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity, TextInput, FlatList, Image, View } from 'react-native';

const Stack = createStackNavigator();

//Profile's Home Screen
const HomeScreen = ({ navigation }) => {
  const buttons = [
    {
      title: 'Enviar dinheiro',
      targetPage: 'Contacts'
    },
    {
      title: 'Ver histórico de envios',
      targetPage: 'History'
    }
  ];
  
  const renderButton = ({ item }) => (
    <TouchableOpacity onPress={() => {
      navigation.navigate(item.targetPage);
    }}>
      <View style={styles.button}>
        <Text style = {{color: 'white'}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient  colors={['#002233', '#0077b3']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={styles.column}>
          <View style={styles.column}>
            <Image style={styles.profileImg} source={ require('./src/images/perfil.jpg') }/>
            <TextInput style={styles.name} value="Pedro Timm da Silveira" disabled="true" />
            <TextInput style={styles.subtitle} value="pedrotimm@hotmail.com" disabled="true"/>
          </View>
          <View style={styles.column}>
            <FlatList data={buttons} renderItem={renderButton} keyExtractor={(item) => item.action} contentContainerStyle={styles.column}/>
          </View>
        </View>
        <StatusBar style="auto" />
      </LinearGradient>
  );
};

const ContactsScreen = ({ navigation }) => {
  const contacts = [
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact1.jpg'),
      id: '0'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact2.jpg'),
      id: '1'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact3.jpg'),
      id: '2'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact4.jpg'),
      id: '3'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact5.jpg'),
      id: '4'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact6.jpg'),
      id: '5'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact7.jpg'),
      id: '6'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact8.jpg'),
      id: '7'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact9.jpg'),
      id: '8'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact10.jpg'),
      id: '9'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact11.jpg'),
      id: '10'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact12.jpg'),
      id: '11'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact13.jpg'),
      id: '12'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact14.jpg'),
      id: '13'
    },
    {
      title: 'Fulano',
      imageFile: require('./src/images/contact15.jpg'),
      id: '14'
    },
  ];
  
  const renderContact = ({ item }) => (
    <Image style={ styles.profileImg } source={ item.imageFile }/>
  );

  return (
    <LinearGradient  colors={['#002233', '#0077b3']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <View style={styles.column}>
        <FlatList data={contacts} renderItem={renderContact} keyExtractor={(item) => item.id} contentContainerStyle={styles.column}/>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },  
  button: {
    flex: 0,
    width: "100%",
    height: 200,
    marginTop: 15
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#006666',
    borderWidth: 4
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

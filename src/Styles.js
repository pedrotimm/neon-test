import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003366',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flex: 0,
      width: 350,
      marginLeft: 25,
      marginRight: 50,
      height: 105,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderBottomWidth: 0.5,
      borderBottomColor: 'rgb(31,70,91)',
    },
    contactDetailsRow: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 330,
      flexDirection: 'row'
    },
    close: {
      flex: 1,
      width: 112,
      position: 'relative',
      top: 5,
      fontSize: 25,
      fontWeight: 'bold',
      color: 'rgb(204,204,204)',
      alignSelf: 'flex-start',
    },
    whiteText: {
      color: 'white'
    },
    contactColumn: {
      flex: 1,
      height: 100,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 15,
    },
    column: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },  
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,
      maxHeight: 50,
      marginBottom: 15,
      backgroundColor: 'rgb(0, 166, 168)',
      borderRadius: 25
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    inputValue: {
      fontSize: 28,
      flex: 1,
      width: 250,
      maxHeight: 67,
      marginBottom: 15,
      borderRadius: 8,
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: 2,
      color: 'rgb(0, 166, 168)'
    },
    dialog: {
      position: 'absolute',
      flex: 1,
      top: 250,
      height: 360,
      left: 25,
      right: 25,
      padding: 12,
      paddingTop: 2,
      backgroundColor: 'rgb(57,88,106)',
      borderRadius: 30
    },
    pressedContactImg: {
      width: 80,
      height: 80,
      borderRadius: 38,
      borderColor: 'rgb(0, 166, 204)',
      borderWidth: 2,
      marginLeft: 15,
    },
    pressedContactName: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16
    },
    profileImg: {
      width: 150,
      height: 150,
      borderRadius: 80,
      borderColor: 'rgb(9, 209, 171)',
      borderWidth: 4
    },
    contactImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderColor: 'rgb(0, 166, 204)',
      borderWidth: 2,
      marginLeft: 15
    },
    contactName: {
      fontSize: 16,
      color: 'rgb(0, 166, 168)',
      fontWeight: '500'
    },
    phoneNumber: {
      fontSize: 15,
      color: 'rgb(25, 115, 122)'
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
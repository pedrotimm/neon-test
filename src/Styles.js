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
      color: '#0088cc',
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
      backgroundColor: '#1a8cff',
      borderRadius: 25
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    banner: { 
      width: 250, 
      backgroundColor: '#f00',
      color: '#fff',
      zIndex: 5000, 
      height: 40, 
      flex: 0,
      top: -50, 
      left: 50, 
      right: 15,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      shadowRadius: 6.68,
      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowOffset: {
        width: 0,
        height: 5
      },
      elevation: 11
    },
    failed: {
      backgroundColor: '#f00'
    },
    success: {
      backgroundColor: 'rgb(0, 166, 204)'
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
      color: '#001a33'
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
      backgroundColor: '#33d6ff',
      borderRadius: 30
    },
    pressedContactImg: {
      width: 80,
      height: 80,
      borderRadius: 38,
      borderColor: '#b3daff',
      borderWidth: 2,
      marginLeft: 15,
    },
    pressedContactName: {
      color: '#0088cc',
      fontWeight: 'bold',
      fontSize: 16
    },
    profileImg: {
      width: 150,
      height: 150,
      borderRadius: 80,
      borderColor: '#00a3cc',
      borderWidth: 4
    },
    contactImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderColor: '#00e6e6',
      borderWidth: 2,
      marginLeft: 15
    },
    contactName: {
      fontSize: 16,
      color: '#b3e7ff',
      fontWeight: '500'
    },
    phoneNumber: {
      fontSize: 15,
      color: '#e0ebeb'
    },
    name: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    },
    subtitle: {
      color: '#fff',
      fontSize: 14,
      position: 'relative',
      top: -15
    }
});
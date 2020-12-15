import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, FlatList, Image, View } from 'react-native';
import styles from './../Styles';
import contacts from './../ContactsList';

class HistoryScreen extends Component {
    constructor(){
      super();
      this.state = {
        showDialog: false,
        transactions: null,
        sums: []
      }
    }
    
    render() {
      const getTransfers = () => {
        fetch('http://processoseletivoneon.azurewebsites.net/GetTransfers', {
          }).then( (response) => {
            response = null;

            if(response) {
              const sums = [];
              this.state.transactions = response.json();
              if (this.state.transactions.length) {
                  for(const c in contacts) {
                    for(const t in this.state.transactions) {
                      if (t.ClienteId === c.id) {
                        if (!sums[c.id]) {
                          sums[c.id] = {
                            id: c.id,
                            value: 0
                          };
                        }
                        sums[c.id].value += t.Valor;
                      }
                    }
                  }
                }
                this.state.sums = sums;
            }
          });
      };

        if (!this.state.transactions) {
          this.state.transactions = [];
          getTransfers();
        }

        const renderSum = ({ item }) => {
            <View style={styles.graphicItem}>
                <Text>{item.Valor}</Text>
            </View>
        };

        const renderTransaction = ({ item }) => {
          let contact = null,
            i = 0;

          while(i < contacts.length) {
            if (contacts[i].id === item.ClienteId) {
              contact = contacts[i];
            }
            i++;
          }
          
          return (
            <View style={styles.row}>
              <Image style={styles.contactImg} source={contact.imageFile}/>
              <View style={styles.contactColumn}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.phoneNumber}>(51){contact.phoneNumber}</Text>
                <Text style={styles.phoneNumber}>R$ {item.Valor}</Text>
              </View>
            </View>
          )
        };

        return (
          <LinearGradient colors={['#001f33', '#006bb3']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={styles.row}>
              <FlatList data={this.state.sums} renderItem={renderSum} keyExtractor={(item) => item.Id.toString()}/>
            </View>
            <View style={styles.column}>
              <FlatList data={this.state.transactions} renderItem={renderTransaction} keyExtractor={(item) => item.Id.toString()}/>
            </View>
            <StatusBar style="auto" />
          </LinearGradient>
        );
    }
};

export default HistoryScreen;
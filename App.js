import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from 'react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.menuBar}>
        <View style ={styles.button}>

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#144357',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBar:{
    marginLeft: 291,
    marginTop: 0,
    width:69,
    height:640,
    backgroundColor: '#0F3140'
  },
  button:{

  }

});

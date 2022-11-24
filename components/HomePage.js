import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Navigator } from "react-native";
import Square from "./Square.js";
import { connect } from 'react-redux'
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import { createStackNavigator, createAppContainer } from 'react-navigation';  

const HomePage = (props) => {
    return (
      <ImageBackground 
      style= {styles.container} 
      source={require('../assets/logo5.jpg')}
      >
    <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'black',fontFamily:"sans-serif-thin", fontSize: 50 }}>Whack-A-Mole</Text>
      {/* <Image source={require('../assets/logo.png')} /> */}
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}></Text>
      <Btn bgColor={green} textColor={darkGreen} btnLabel="Play" Press={() => props.navigation.navigate("GameBoard")} />
      <Btn bgColor={green} textColor={darkGreen} btnLabel="About" Press={() => props.navigation.navigate("")} />
      </View>
      </ImageBackground>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      fontWeight: 20
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20,
    },
    font: {
      fontSize: 40,
      padding:20,
      marginTop:10,
      fontWeight: 'bold'
    }
  });
  
 const mapStateToProps = state => {
  return {
    score: state.score
  }
 }
export default connect(mapStateToProps) (HomePage)
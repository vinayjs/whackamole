import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Square from "./Square.js";
import { connect } from 'react-redux'


const GameBoard = (props) => {
  const[timeLeft, setTimeLeft] = useState(60)

  useEffect(()=>{
    if(!timeLeft) return
    const timerId = setInterval(()=>{
      setTimeLeft(timeLeft - 1)
    },1000)
    return () => clearInterval(timerId)
  },[timeLeft])

    return (
      <ImageBackground 
      style= {styles.container} 
      source={require('../assets/background.png')}
      >
      <Text style={styles.font}>Whack-A-Mole</Text>
      <Text> You have {timeLeft} seconds left </Text>
      <Text></Text>
      <Text> {props.score} Moles whacked! </Text>
        <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
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
export default connect(mapStateToProps) (GameBoard)
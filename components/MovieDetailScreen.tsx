import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovieDetailScreen = ({navigation}) => {

    return(
    <ImageBackground
        source={require("../assets/images/background.jpeg")}
        resizeMode="repeat"
        style={styles.imgBackground}>

        <SafeAreaView style={styles.container}>

            <Text>a </Text>
        
        </SafeAreaView>
    </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      fontSize: 30,
      fontFamily: "Arial",
      paddingTop: 16,
      fontWeight: 'bold',
      marginBottom: 16,
      alignSelf: 'center',
      color:'#ad7d37'
    },
    movieList:{
      flex:1,
      width: 'auto',
    },
    item: {
      backgroundColor: '#f0f0f0',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
    },
    itemText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    itemDescription: {
      fontSize: 14,
    },
    imgBackground: {
      flex: 1,
    },
    
  });

export default MovieDetailScreen;
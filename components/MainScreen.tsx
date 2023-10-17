import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAxiosFetch } from '../hooks/useAxiosFetch';
import MovieCard from './MovieCard'


function MainScreen({navigation}) {

  const {data, error, isLoading } =  useAxiosFetch('/films');
  const navigateToMovieDetailScreen = (movie) => {
    navigation.navigate('MovieDetailScreen', { movie });
  };

  return  (
    <ImageBackground
    source={require("../assets/images/background.jpeg")}
    resizeMode="repeat"
    style={styles.imgBackground}
  >
     <SafeAreaView style={styles.container}>
        <Text style={styles.header}>STAR WARS MOVIES</Text>
        {isLoading ? (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#ad7d37" />
          </View>
        ) : data ? (
        <FlatList
          style={styles.movieList} 
          data={data}
          keyExtractor={(item) => item.episode_id}
          renderItem={({ item }) => (
            
            <TouchableOpacity onPress={() => navigateToMovieDetailScreen(item)}>
              <MovieCard movie={item} ></MovieCard>
            </TouchableOpacity>

          )}
          numColumns={2}
        />
        ) : (<View style={styles.container}>
              <Text style={styles.header}>{error}</Text>
            </View>)}
    </SafeAreaView>
    </ImageBackground>
  );
          
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
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



export default MainScreen;

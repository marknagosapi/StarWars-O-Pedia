import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import MovieCard from './MovieCard'


const API_URL = 'https://swapi.dev/api/films'; // Replace with your API endpoint

function MainScreen({navigation}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
     
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return  (
    <ImageBackground
    source={require("../assets/background.jpeg")}
    resizeMode="repeat"
    style={styles.imgBackground}
  >
     <SafeAreaView style={styles.container}>
        <Text style={styles.header}>STAR WARS MOVIES</Text>
        <FlatList
          style={styles.movieList} 
          data={data}
          keyExtractor={(item) => item.episode_id}
          renderItem={({ item }) => (
            
            <TouchableOpacity onPress={() => navigation.navigate("MovieDetailScreen")}>
              <MovieCard movie={item} ></MovieCard>
            </TouchableOpacity>

          )}
          numColumns={2}
        />
        
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
  },
  header: {
    fontSize: 24,
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

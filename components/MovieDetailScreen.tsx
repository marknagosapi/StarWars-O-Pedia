import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const MovieDetailScreen = ({route}) => {

    const { movie } = route.params;

    const charactersData = [
      { id: '1', name: 'Character 1' },
      { id: '2', name: 'Character 2' },
      { id: '3', name: 'Character 3' },
      { id: '4', name: 'Character 4' },
      { id: '5', name: 'Character 5' },
      { id: '6', name: 'Character 6' },
      { id: '7', name: 'Character 7' },
      { id: '8', name: 'Character 8' },
      { id: '9', name: 'Character 9' },
      { id: '10', name: 'Character 10' },
    ];
    

    function handleOptionChange(option) {
      switch (option) {
        case 1:
          return "https://m.media-amazon.com/images/I/61lzlKzfcCL._AC_UF894,1000_QL80_.jpg";
        case 2:
          return "https://m.media-amazon.com/images/I/81q32fc38GL._AC_UF894,1000_QL80_.jpg";
        case 3:
          return "https://m.media-amazon.com/images/I/71WgjTKJ00L._AC_UF894,1000_QL80_.jpg";
        case 4:
          return "https://m.media-amazon.com/images/I/51ZgxqNRqWL._AC_UF894,1000_QL80_.jpg";
        case 5:
          return "https://i.etsystatic.com/13367669/r/il/5638b0/3200098139/il_570xN.3200098139_qv2r.jpg";
        case 6:
          return "https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/03/IMG_1702-scaled.jpeg";
        default:
          return "https://i.ebayimg.com/images/g/EMEAAOSwjGxf1WHU/s-l1600.jpg";
      }
    }

    return(
    <ImageBackground
        source={require("../assets/images/background.jpeg")}
        resizeMode="repeat"
        style={styles.imgBackground}>

        <SafeAreaView >

            <ScrollView style={styles.container}>
            <Image source={{ uri: handleOptionChange(movie.episode_id) }} style={styles.poster} />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
              <Text style={styles.title}> Opening Crawl: </Text>
              <Text style={styles.description}>{movie.opening_crawl}</Text>
            </View>
            <View style={styles.characterListContainer}>
              <Text style={styles.characterListTitle}>Characters:</Text>
              <FlatList
                data={charactersData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Text style={styles.characterItem}>{item.name}</Text>
                )}
              />
            </View>
        </ScrollView>
          
        
        </SafeAreaView>
    </ImageBackground>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  
  },


  poster: {
    width: '100%',
    height: 400,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    marginTop: -20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  releaseDate: {
    fontSize: 18,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
  },
  characterListContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 20,
  },
  characterListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  characterItem: {
    fontSize: 16,
  },
    imgBackground: {
      flex: 1,
    },
  
  });



export default MovieDetailScreen;
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MovieCard = ({ movie }) => {
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

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: handleOptionChange(movie.episode_id),
        }}
        style={styles.poster}
      ></Image>
      <Text style={styles.title}>{movie["title"]}</Text>
      <Text style={styles.releaseDate}>{movie["director"]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(46,85,124,0.75)",
    width: 180,
    borderRadius: 8,
    elevation: 4,
    margin: 8,
    padding: 16,
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 8,
  },
  releaseDate: {
    fontSize: 14,
    color: "#f2f2f2",
    marginTop: 4,
  },
});

export default MovieCard;

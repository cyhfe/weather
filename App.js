import React from "react"
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native"

import { SearchInput } from "./src/components/searchInput"

import { textSize } from "./src/utils/style"
import getImageForWeather from "./src/utils/getImageForWeather"
import { fetchLocationId } from "./src/utils/api"

const App = () => {
  const handleUpdateLocation = async (text) => {
    const data = await fetchLocationId(text)
    console.log(data)
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={getImageForWeather("Clear")}
        imageStyle={styles.image}
        style={styles.imageContainer}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.largeText}>Shanghai</Text>
          <Text>rain</Text>
          <Text style={styles.smallText}>24</Text>
          <SearchInput onSubmit={handleUpdateLocation} />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  largeText: {
    fontSize: textSize.large,
  },
  smallText: {
    fontSize: textSize.small,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
})

export default App

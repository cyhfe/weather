import React, { useEffect, useState } from "react"
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from "react-native"

import { SearchInput } from "./src/components/searchInput"
import useAsync from "./src/hooks/useAsync"
import { textSize } from "./src/utils/style"
import getImageForWeather from "./src/utils/getImageForWeather"
import { fetchLocationId, fetchWeather } from "./src/utils/api"

const App = () => {
  const [location, setLocation] = useState("Beijing")
  const { data, error, isLoading, run } = useAsync()

  const renderWeather = () => {
    const { location, weather, temperature } = data
    return (
      <>
        <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
        <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
        <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(
          temperature
        )}°`}</Text>
      </>
    )
  }
  useEffect(() => {
    const promise = fetchLocationId(location).then((locationId) => {
      if (!locationId) {
        return Promise.reject("不支持的地区")
      } else {
        return Promise.resolve(fetchWeather(locationId))
      }
    })

    run(promise)
  }, [location])
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={data ? getImageForWeather(data.weather) : null}
        imageStyle={styles.image}
        style={styles.imageContainer}
        resizeMode="cover"
      >
        <View style={styles.detailsContainer}>
          <ActivityIndicator animating={isLoading} color="white" size="large" />
          {!isLoading && (
            <View style={styles.contentContainer}>
              {data && renderWeather()}
              {error && (
                <Text style={[styles.error, styles.smallText]}>{error}</Text>
              )}
              <SearchInput onSubmit={setLocation} />
            </View>
          )}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495E",
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
  error: {
    color: "red",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "white",
  },
})

export default App

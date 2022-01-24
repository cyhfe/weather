import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native"
import { textSize } from "./src/utils"

export default function App() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.largeText}>Fuzhou</Text>
      <Text>Light Cloud</Text>
      <Text style={styles.smallText}>34</Text>
      <TextInput
        autoCorrect={false}
        placeholder="Search any city"
        placeholderTextColor="white"
        clearButtonMode="always"
        style={styles.textInput}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  largeText: {
    fontSize: textSize.large,
  },
  smallText: {
    fontSize: textSize.small,
  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
})

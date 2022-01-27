import { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"

export function SearchInput({ onSubmit }) {
  const [input, setInput] = useState("")
  const handleSubmit = (text) => {
    if (!input) return
    onSubmit(input)
    setInput("")
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="select a city"
        value={input}
        onChangeText={setInput}
        onSubmitEditing={handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    marginTop: 20,
    backgroundColor: "#eee",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: "black",
  },
})

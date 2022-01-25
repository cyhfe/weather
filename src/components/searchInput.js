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
    width: 300,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    flex: 1,
  },
})

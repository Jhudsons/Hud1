import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [plc, setPlc] = useState(50);
  return (
    <View style={styles.container}>
      <Text style={styles.Label}>Retail Price</Text>
      <View style={styles.PriceBox}>
        <Text style={styles.Price}>$</Text>
        <View style={styles.rt}>
          <TextInput
            keyboardType="numeric"
            style={[{ fontSize: plc }, { textAlign: "center" }]}
            placeholder={"Enter Retail Price"}
            placeholderTextColor={"gray"}
            padding={10}
            defaultValue={text}
            onChangeText={(newText) => {
              if (newText.localeCompare("") == 0) {
                setPlc(50);
              } else {
                setPlc(140);
              }
              setText(newText);
            }}
          />
        </View>
        <Text style={styles.Price}>.99</Text>
      </View>
      {/* 20% */}
      <Text style={styles.Label}>20%</Text>
      <View style={styles.PriceBox}>
        <Text style={styles.Price}>
          $ {Math.round(parseInt(String(text), 10) * 0.8)} .99
        </Text>
      </View>
      {/* 20% + 20% */}
      <Text style={styles.Label}>20% + 20%</Text>
      <View style={styles.PriceBox}>
        <Text style={styles.Price}>
          $ {Math.round(parseInt(String(text), 10) * 0.8 * 0.8)} .99
        </Text>
      </View>
      {/* 20% + 20% + 20% */}
      <Text style={styles.Label}>20% + 20% + 20%</Text>
      <View style={styles.PriceBox}>
        <Text style={styles.SPrice}>
          $ {Math.round(parseInt(String(text), 10) * 0.8 * 0.8 * 0.8)} .99
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  rt: {
    width: "50%",
  },
  Label: {
    padding: 0,
    fontSize: 60,
    color: "#858585",
    fontWeight: "100",
  },
  input: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  Price: {
    padding: 10,
    fontSize: 140,
  },
  SPrice: {
    padding: 10,
    fontSize: 140,
    fontWeight: "700",
    color: "#ff0000",
  },
  PriceBox: {
    borderColor: "#919191",
    borderWidth: "1px",
    borderRadius: "10px",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginBottom: 120,
    marginTop: 15,
    flexDirection: "row",
  },
});

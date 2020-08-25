import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/public/resources/Colors";

export default function DivisionText({ color, text }) {
  return (
    <View style={styles.container}>
      <View style={styles.divisionLine} />
      <View
        style={{
          position: "absolute",
        }}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    marginTop: 30,
    marginBottom: 30,
    position: "relative",
    // backgroundColor: "rgba(255,255,255,0)",
  },
  divisionLine: {
    height: 3,
    backgroundColor: Colors.textColor,
    width: "80%",
  },
  textStyle: {
    fontSize: 34,
    backgroundColor: "rgb(255,255,255)",
    marginTop: -34,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    paddingTop: 0,
    fontWeight: "bold",
    color: Colors.textColor,
  },
});

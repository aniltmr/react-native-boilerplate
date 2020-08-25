import { StyleSheet, Dimensions } from "react-native";
import Colors from "./Colors";

const { width, height } = Dimensions.get("window");

// common style for center align
const centerAlign = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
};

export const Styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.backgoundColor,
    width: width,
    height: "100%",
  },
});

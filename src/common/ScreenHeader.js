import React from "react";
import { View, Text } from "react-native";
import { H2 } from "native-base";
import { Styles } from "../utils/public/resources/StyleSheet";

export default function ScreenHeader({ title }) {
  return (
    <View>
      {/* <H2 style={Styles.screenHeaderText}>{title}</H2>
      <View style={Styles.screenHeader_bottom_border} /> */}
    </View>
  );
}

import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { Button } from "native-base";

export default function Button_({
  buttonStyle,
  labelStyle,
  onPress,
  type,
  blockType,
  label,
}) {
  var buttonProps = {};
  buttonProps[type] = true;
  buttonProps[blockType] = true;

  return (
    <Button {...buttonProps} onPress={onPress} style={buttonStyle}>
      <Text style={labelStyle}>{label}</Text>
    </Button>
  );
}

Button_.propType = {
  labelStyle: PropTypes.any,
  buttonStyle: PropTypes.any,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  blockType: PropTypes.string,
};

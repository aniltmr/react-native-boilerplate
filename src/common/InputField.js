import React from "react";
import { Item, Input } from "native-base";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Styles } from "../utils/public/resources/StyleSheet";

export default function InputField(
  { type, icon, placeholder, value, onChange, secureTextEntry, inputType },
  props
) {
  let inputProps = {};
  inputProps[type] = true;

  return (
    <Item {...inputProps} style={Styles.inputStyles}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          style={Styles.inputIconStyle}
          color="#900"
        />
      )}
      <Input
        placeholder={placeholder}
        value={value}
        type={inputType || "text"}
        onChangeText={(text) => onChange(text)}
        secureTextEntry={secureTextEntry}
      />
    </Item>
  );
}

InputField.propTypes = {
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  type: PropTypes.any,
  props: PropTypes.any,
  secureTextEntry: PropTypes.bool,
};

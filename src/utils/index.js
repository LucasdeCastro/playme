import React from "react";
import Colors from "./colors";
import style from "../styles/utils";
import IO from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MD from 'react-native-vector-icons/MaterialIcons';
import MDC from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const AllIcons = props => {
  props.name = props.name || "";

  const iconProps = {
    name: props.name || "exclamation",
    size: props.size || 10,
    color: props.color || "#444"
  };

  switch (props.type) {
    case "FW":
      return <Icon {...iconProps} />
    case "MD":
      return <MD {...iconProps} />
    case "MDC":
      return <MDC {...iconProps} />
    case "IO":
      return <IO {...iconProps} />
    default:
      return <Icon {...iconProps} />
  }
}


const makeInputIcon = (icon) => (props) => {
  return (
    <View style={style.inputIcon}>
      <View style={style.inputIconIcon}>
        <AllIcons type={icon} name={props.icon} size={props.size || 25} />
      </View>

      <TextInput
        style={style.inputIconInput}
        underlineColorAndroid={"transparent"}
        defaultValue={props.defaultValue || ""}
        secureTextEntry={props.secureTextEntry || false}
        {...props} />
    </View>
  )
}

const InputIconIO = makeInputIcon("IO");
const InputIconFW = makeInputIcon("FW");
const InputIconMD = makeInputIcon("MD");
const InputIconMDC = makeInputIcon("MDC");


const FullButton = ({ title, onPress, color, background }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[style.fullButton, { backgroundColor: background }]}>
      <Text style={{ color, fontSize: 20 }}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const IconButton = ({ onPress, icon, size = 25, type="FW" }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={style.iconButton}>
      <AllIcons type={type} name={icon} size={size} />
    </View>
  </TouchableOpacity>
)

const CheckBox = ({ label, bol, onPress, type="FW", size = 25 }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={style.checkboxMain}>
    <View style={style.checkbox}>
      {bol && <AllIcons type={type} size={size} name={"check"} color={"#FFF"} />}
    </View>
    <Text style={{ color: '#FFF' }}>{label}</Text>
  </TouchableOpacity>
)

export default {
  InputIconFW,
  InputIconIO,
  InputIconMD,
  InputIconMDC,

  FullButton,
  CheckBox,
  IconButton,
  AllIcons
}
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const LinkBar = ({ questionText, linkText, onPress }: any) => {
  return (
    <View style={styles.container}>
      <Text>{questionText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  )};

export default LinkBar;
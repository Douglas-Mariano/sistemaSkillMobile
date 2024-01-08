import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const LinkBar = ({ questionText, linkText, onPress }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questionText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkBar;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface LinkBarProps {
  questionText: string;
  linkText: string;
  onPress: () => void;
}

const LinkBar: React.FC<LinkBarProps> = ({
  questionText,
  linkText,
  onPress,
}) => {
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

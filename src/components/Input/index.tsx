import React from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
  TouchableOpacity,
} from "react-native";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "./styles";
import GlobalStyle from "../../styles/GlobalStyle";

interface InputProps extends TextInputProps {
  customStyle?: StyleProp<ViewStyle>;
  icon: IconDefinition;
  title: string;
  rightIcon?: React.ReactNode;
  mostrarSenha?: () => void;
}

const Input = ({
  style,
  title,
  customStyle,
  icon,
  rightIcon,
  mostrarSenha,
  ...props
}: InputProps) => {
  return (
    <View>
      <Text style={GlobalStyle.texto}>{title}</Text>
      <View
        style={[
          styles.inputContainer,
          styles.inputContainerCustom,
          customStyle,
        ]}
      >
        <FontAwesomeIcon icon={icon} size={20} style={styles.icon} />
        <TextInput style={[styles.input, style]} {...props} />
        {rightIcon && (
          <TouchableOpacity style={styles.monstrarSenha} onPress={mostrarSenha}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

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
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface InputProps extends TextInputProps {
  customStyle?: StyleProp<ViewStyle>;
  icon?: IconDefinition;
  title: string;
  rightIcon?: React.ReactNode;
  onPressIcon?: () => void;
  onSearch?: () => void;
}

const Input = ({
  style,
  title,
  customStyle,
  icon,
  rightIcon,
  onPressIcon,
  onSearch,
  ...props
}: InputProps) => {
  return (
    <View>
      {icon ? (
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
              <TouchableOpacity style={styles.inputIcon} onPress={onPressIcon}>
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <View>
          <Text style={GlobalStyle.texto}>{title}</Text>
          <View style={[styles.inputContainer, customStyle]}>
            <TextInput {...props} />
            <TouchableOpacity onPress={onSearch}>
              <FontAwesomeIcon
                icon={faSearch}
                size={20}
                style={styles.iconSearch}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Input;

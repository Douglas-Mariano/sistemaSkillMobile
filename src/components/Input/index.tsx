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
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/theme";

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
      <Text
        style={{ fontSize: theme.FONT_SIZE.MD, color: theme.COLORS.GRAY_700 }}
      >
        {title}
      </Text>
      <View style={[styles.inputContainer, customStyle]}>
        {icon && <FontAwesomeIcon icon={icon} size={20} style={styles.icon} />}
        <TextInput style={[styles.input, style]} {...props} />
        {rightIcon && (
          <TouchableOpacity style={styles.inputIcon} onPress={onPressIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
        {onSearch && (
          <TouchableOpacity onPress={onSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              size={20}
              style={styles.iconSearch}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

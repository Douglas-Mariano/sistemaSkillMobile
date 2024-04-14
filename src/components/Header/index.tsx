import React from "react";
import { deslogar } from "../../service/api/Api";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

interface HeaderProps {
  navigation?: any;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ navigation, title }) => {
  const handleLogout = async () => {
    try {
      await deslogar();
      if (navigation) {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="sign-out" size={20} style={styles.logoutButton} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

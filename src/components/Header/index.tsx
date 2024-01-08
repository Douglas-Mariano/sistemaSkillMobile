import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { deslogar } from "../../service/api/Api";
import styles from "./styles";
import GlobalStyle from "../../globalStyles/GlobalStyle";

interface HeaderProps {
  navigation?: any;
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
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
      <View style={{ flex: 1 }}></View>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="sign-out" size={40} color={GlobalStyle.veryLightGray.color} style={styles.logoutButton} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import LinkBar from "../../components/LinkBar";
import Button from "../../components/Button";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "./styles";
import { logarUsuario } from "../../service/api/Api";

const Login = ({ navigation }: any) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [salvo, setSalvo] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(true);

  useEffect(() => {
    const fetchLoginData = async () => {
      const storedLogin = await AsyncStorage.getItem("login");
      const storedSenha = await AsyncStorage.getItem("senha");

      if (storedLogin !== null) setLogin(storedLogin);
      if (storedSenha !== null) setSenha(storedSenha);
    };

    fetchLoginData();
  }, []);

  const handleLogin = async () => {
    try {
      const token = await logarUsuario(login, senha);

      if (salvo) {
        await AsyncStorage.setItem("login", login);
        await AsyncStorage.setItem("senha", senha);
      } else {
        await AsyncStorage.removeItem("login");
        await AsyncStorage.removeItem("senha");
      }
      navigation.navigate("Home");
      return token;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.titulo}>Login</Text>
        </View>
        <View style={styles.content}>
          <Input
            style={styles.input}
            title="Email"
            value={login}
            onChangeText={(text) => setLogin(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            icon={faEnvelope}
          />
          <Input
            style={styles.input}
            title="Senha"
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={mostrarSenha}
            icon={faKey}
            rightIcon={
              <FontAwesomeIcon
                icon={mostrarSenha ? faEyeSlash : faEye}
                size={20}
                color="gray"
              />
            }
            onPressIcon={() => setMostrarSenha(!mostrarSenha)}
          />
          <CheckBox
            title="Lembrar-me"
            checked={salvo}
            onPress={() => setSalvo(!salvo)}
          />
        </View>
      </ScrollView>
      <View style={styles.content}>
        <Button buttonStyle={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Login</Text>
        </Button>
        <LinkBar
          questionText="Não tem Cadastro? "
          linkText="Cadastre-se"
          onPress={() => navigation.navigate("Cadastro")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

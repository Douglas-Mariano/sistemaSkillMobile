import { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  faUser,
  faEnvelope,
  faKey,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "../../globalStyles/GlobalStyle";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LinkBar from "../../components/LinkBar";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Usuario } from "../../service/api/Types";
import { adicionarUsuario } from "../../service/api/Api";

const Cadastro = ({ navigation }: any) => {
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(true);

  const handleCadastro = async () => {
    if (
      nome.length < 3 ||
      login.length < 10 ||
      senha.length < 3 ||
      senha !== confirmarSenha
    ) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha todos os campos corretamente."
      );
      return null;
    }

    try {
      const res = await adicionarUsuario({ nome, login, senha } as Usuario);
      if (res) {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }

    setNome("");
    setLogin("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.titulo}>Cadastro</Text>
        </View>
        <View style={styles.content}>
          <Input
            title="Nome Completo"
            style={styles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
            icon={faUser}
          />
          <Input
            title="Email"
            style={styles.input}
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
            mostrarSenha={() => setMostrarSenha(!mostrarSenha)}
          />
          <Input
            title="Confirmar Senha"
            style={[
              styles.input,
              confirmarSenha !== senha && styles.inputError,
            ]}
            value={confirmarSenha}
            onChangeText={(text) => setConfirmarSenha(text)}
            secureTextEntry={mostrarSenha}
            icon={faKey}
            rightIcon={
              <FontAwesomeIcon
                icon={mostrarSenha ? faEyeSlash : faEye}
                size={20}
                color="gray"
              />
            }
            mostrarSenha={() => setMostrarSenha(!mostrarSenha)}
          />
        </View>
        <View style={styles.content}>
          <Button
            buttonStyle={{ backgroundColor: GlobalStyle.lightGray.color }}
            onPress={handleCadastro}
          >
            <Text style={styles.textoBotao}>Finalizar</Text>
          </Button>
        </View>
      </ScrollView>
      <View style={styles.content}>
        <LinkBar
          questionText="Já tem Cadastro? "
          linkText="Logar-se"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cadastro;

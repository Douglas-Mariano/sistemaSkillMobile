import React, { useContext } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  faUser,
  faEnvelope,
  faKey,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LinkBar from "../../components/LinkBar";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Usuario } from "../../service/api/Types";
import { adicionarUsuario } from "../../service/api/Api";
import { SkillsContext } from "../../contexts/SkillsContext";
import * as yup from "yup";

const schemaCadastro = yup.object().shape({
  nome: yup.string().required("O campo nome é obrigatório."),
  email: yup
    .string()
    .email("O email não é válido.")
    .required("O campo email é obrigatório."),
  senha: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres.")
    .required("O campo senha é obrigatório."),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("senha"), undefined], "As senhas devem corresponder.")
    .required("O campo confirmar senha é obrigatório."),
});

const Cadastro = ({ navigation }: any) => {
  const {
    nome,
    setNome,
    login,
    setLogin,
    senha,
    setSenha,
    confirmarSenha,
    setConfirmarSenha,
    mostrarSenha,
    setMostrarSenha,
  } = useContext(SkillsContext);

  const handleCadastro = async () => {
    try {
      await schemaCadastro.validate({
        nome,
        email: login,
        senha,
        confirmarSenha,
      });
      const res = await adicionarUsuario({ nome, login, senha } as Usuario);
      if (res) {
        navigation.navigate("Login");
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert("Erro de validação", error.message);
      } else {
        console.error("Erro ao cadastrar usuário:", error);
        Alert.alert("Erro", "Não foi possível cadastrar usuário. Tente novamente mais tarde.");
      }
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
            onPressIcon={() => setMostrarSenha(!mostrarSenha)}
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
            onPressIcon={() => setMostrarSenha(!mostrarSenha)}
          />
        </View>
        <View style={styles.content}>
          <Button buttonStyle={styles.button} onPress={handleCadastro}>
            <Text style={styles.textButton}>Finalizar</Text>
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

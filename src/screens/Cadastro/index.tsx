import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckBox } from "react-native-elements";
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
import HeaderLoginCadastro from "../../components/HeaderLoginCadastro";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Cadastro = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [salvo, setSalvo] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(true);

  const handleCadastro = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <HeaderLoginCadastro>
            <Text style={styles.titulo}>Cadastro</Text>
          </HeaderLoginCadastro>
        </View>
        <View style={styles.content}>
          <Input
            title="Nome Completo"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
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
      </ScrollView>
      <View style={styles.content}>
        <Button
          buttonStyle={{ backgroundColor: GlobalStyle.color3.color }}
          onPress={handleCadastro}
        >
          <Text style={styles.textoBotao}>Finalizar</Text>
        </Button>
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

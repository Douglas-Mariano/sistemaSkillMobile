import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  picker: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  botaoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoAdicionar: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  botaoCancelar: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoBotao: {
    marginLeft: 10,
  },
});

export default styles;

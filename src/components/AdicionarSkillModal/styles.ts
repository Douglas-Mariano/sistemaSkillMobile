import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: GlobalStyle.veryLightGray.color,
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
  },
  modalTitle: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: GlobalStyle.mediumGray.color,
    borderRadius: 5,
    backgroundColor: GlobalStyle.lightGray.color,
  },
  botaoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoAdicionar: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  botaoCancelar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  textoBotao: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default styles;

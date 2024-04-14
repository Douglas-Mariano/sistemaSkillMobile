import { StyleSheet } from "react-native";
import GlobalStyle from "../../styles/GlobalStyle";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: GlobalStyle.veryLightGray.color,
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: GlobalStyle.darkGray.color,
    textAlign: "center",
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
    justifyContent: "center",
  },
  botaoAdicionar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: GlobalStyle.darkGray.color,
  },
  botaoCancelar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: GlobalStyle.darkGray.color,
  },
  textoBotao: {
    marginLeft: 10,
    fontWeight: "bold",
    color: GlobalStyle.darkGray.color,
  },
});

export default styles;

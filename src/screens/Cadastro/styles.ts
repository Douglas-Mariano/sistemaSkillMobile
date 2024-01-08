import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    marginTop: 50,
  },
  content: {
    alignItems: "center",
    padding: 5,
  },
  titulo: {
    marginTop: 10,
    fontSize: 36,
    lineHeight: 36,
    fontWeight: "bold",
    color: GlobalStyle.darkGray.color,
  },
  input: {
    marginTop: 7,
    backgroundColor: GlobalStyle.veryLightGray.color,
    borderColor: GlobalStyle.mediumGray.color,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  textoBotao: {
    fontWeight: "bold",
  },
});

export default styles;

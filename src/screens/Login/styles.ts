import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50
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
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: GlobalStyle.veryLightGray.color,
    borderColor: GlobalStyle.mediumGray.color,
  },
  button: {
    backgroundColor: GlobalStyle.lightGray.color,
  },
  textoBotao: {
    fontWeight: "bold",
  },
});

export default styles;

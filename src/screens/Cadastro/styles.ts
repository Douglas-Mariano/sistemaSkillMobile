import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    marginTop: 50
  },
  content: {
    alignItems: "center",
    padding: 5
  },
  titulo: {
    marginTop: 10,
    fontSize: 36,
    lineHeight: 36,
    fontWeight: "bold",
    color: GlobalStyle.color2.color,
  },
  input: {
    marginTop: 7,
    backgroundColor: GlobalStyle.color5.color,
    borderColor: GlobalStyle.color2.color,
    opacity: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  textoBotao: {
    color: GlobalStyle.color5.color,
    fontWeight: "bold",
    textShadowRadius: 5,
    textShadowColor: GlobalStyle.color1.color,
  }
});
export default styles;
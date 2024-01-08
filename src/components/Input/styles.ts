import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 25,
    padding: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  inputContainerCustom: {
    borderColor: GlobalStyle.mediumGray.color,
  },
  icon: {
    marginRight: 10,
    color: GlobalStyle.darkGray.color,
  },
  monstrarSenha: {
    position: "absolute",
    top: 0,
    right: 15,
    bottom: 0,
    justifyContent: "center",
  },
});

export default styles;

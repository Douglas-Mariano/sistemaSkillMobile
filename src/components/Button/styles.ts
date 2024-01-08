import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    backgroundColor: GlobalStyle.lightGray.color,
  },
});

export default styles;

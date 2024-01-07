import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.color5.color,
    margin: 15,
  },
  titulo: {
    alignItems: "center",
    backgroundColor: GlobalStyle.color3.color,
    color: GlobalStyle.color5.color,
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  lista: {
    borderColor: GlobalStyle.color1.color,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default styles;

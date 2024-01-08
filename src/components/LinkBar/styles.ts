import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  questionText: {
    color: GlobalStyle.darkGray.color,
    marginRight: 5,
  },
  link: {
    textDecorationLine: "underline",
    color: GlobalStyle.mediumGray.color,
    fontWeight: "bold",
  },
});

export default styles;
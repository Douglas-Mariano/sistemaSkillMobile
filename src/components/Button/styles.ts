import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  text: {
    fontSize: theme.FONT_SIZE.MD,
  },
});

export default styles;

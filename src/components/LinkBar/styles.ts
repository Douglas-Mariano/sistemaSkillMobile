import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  questionText: {
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_700,
    marginRight: 5,
  },
  link: {
    textDecorationLine: "underline",
    color: theme.COLORS.GREEN_500,
    fontWeight: "bold",
  },
});

export default styles;

// styles.ts
import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  content: {
    alignItems: "center",
    padding: 5,
  },
  titulo: {
    marginTop: 10,
    fontSize: theme.FONT_SIZE.XL,
    lineHeight: theme.FONT_SIZE.XL,
    fontWeight: "bold",
    color: theme.COLORS.GRAY_700,
  },
  input: {
    marginTop: 7,
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: theme.COLORS.GRAY_100,
    borderColor: theme.COLORS.GRAY_500,
  },
  button: {
    backgroundColor: theme.COLORS.GREEN_700,
  },
  textButton: {
    fontWeight: "bold",
    color: theme.COLORS.WHITE,
  },
});

export default styles;

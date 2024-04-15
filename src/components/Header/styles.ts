import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: theme.COLORS.GRAY_700,
  },
  signOut: {
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.GRAY_100,
    fontWeight: "bold",
    marginLeft: 20,
  },
  button: {
    color: theme.COLORS.GRAY_100,
    fontWeight: "bold",
    marginRight: 20,
  },
});

export default styles;

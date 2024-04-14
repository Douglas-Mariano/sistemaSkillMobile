import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    gap: 10,
    backgroundColor: theme.COLORS.GRAY_700,
  },
  title: {
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.GRAY_100,
    fontWeight: "bold",
  },
  logoutButton: {
    color: theme.COLORS.GRAY_100,
    fontWeight: "bold",
  },
});

export default styles;

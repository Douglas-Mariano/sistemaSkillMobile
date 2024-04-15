import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 25,
    padding: 5,
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_700,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_500,
  },
  icon: {
    marginRight: 10,
    color: theme.COLORS.GRAY_700,
  },
  inputIcon: {
    position: "absolute",
    top: 0,
    right: 15,
    bottom: 0,
    justifyContent: "center",
  },
  iconSearch: {
    color: theme.COLORS.GRAY_700,
  },
});

export default styles;

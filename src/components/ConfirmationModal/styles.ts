import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: theme.COLORS.GRAY_200,
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: theme.FONT_SIZE.MD,
    marginBottom: 10,
    color: theme.COLORS.GRAY_700,
  },
  confirmButton: {
    backgroundColor: theme.COLORS.GREEN_700,
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: theme.COLORS.RED_DARK,
    marginTop: 10,
  },
  buttonText: {
    color: theme.COLORS.WHITE,
    fontWeight: "bold",
  },
});

export default styles;

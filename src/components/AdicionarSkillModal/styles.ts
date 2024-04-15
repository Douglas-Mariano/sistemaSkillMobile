import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: theme.COLORS.GRAY_400,
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: theme.FONT_SIZE.XL,
    marginBottom: 10,
    textAlign: "center",
    color: theme.COLORS.GRAY_100,
  },
  input: {
    marginBottom: 10,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.COLORS.GRAY_400,
    backgroundColor: theme.COLORS.GRAY_100,
    color: theme.COLORS.GRAY_700,
  },
  dropDownPicker: {
    backgroundColor: theme.COLORS.GRAY_100,
  },
  botaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoAdicionar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: theme.COLORS.GREEN_700,
  },
  botaoCancelar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: theme.COLORS.RED_DARK,
  },
  textoBotao: {
    marginLeft: 10,
    fontWeight: "bold",
    color: theme.COLORS.WHITE,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import GlobalStyle from "../../styles/GlobalStyle";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: GlobalStyle.veryLightGray.color,
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: GlobalStyle.darkGray.color,
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: GlobalStyle.darkGray.color,
    marginTop: 10,
  },
  buttonText: {
    color: GlobalStyle.veryLightGray.color,
    fontWeight: "bold",
  },
});
export default styles;

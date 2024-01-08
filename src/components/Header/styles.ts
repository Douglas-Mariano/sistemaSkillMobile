import { StyleSheet } from 'react-native';
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: GlobalStyle.darkGray.color,
  },
  title: {
    fontSize: 18,
    color: GlobalStyle.lightGray.color,
    fontWeight: 'bold',
  },
  logoutButton: {
    fontSize: 16,
    color: GlobalStyle.lightGray.color,
    fontWeight: 'bold',
  },
});

export default styles;
import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 15,
    },
    link: {
        textDecorationLine: 'underline',
        color: GlobalStyle.color4.color,
        fontWeight: 'bold',
    }
})
export default styles;
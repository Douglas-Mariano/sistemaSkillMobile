import { StackActions, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "../TabRoute";
import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.pop())}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={24}
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="Tab"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};
export default StackRoutes;

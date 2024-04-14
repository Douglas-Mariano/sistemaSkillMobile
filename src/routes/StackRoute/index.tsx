import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header";
import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro";
import Home from "../../screens/Home";

const Stack = createStackNavigator();

const StackRoute: React.FC = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      try {
        const name = await AsyncStorage.getItem("userName");
        if (name !== null) {
          setUserName(name);
        }
      } catch (error) {
        console.error("Erro ao obter o nome do usuário:", error);
      }
    };

    getUserName();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            header: () => (
              <Header title={userName || "Home"} navigation={navigation} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro";
import Home from "../../screens/Home";
import Header from "../../components/Header";

const Stack = createStackNavigator();

const StackRoute: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;

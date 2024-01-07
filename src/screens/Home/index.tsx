import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUsuarioPorId } from "../../service/api/Api";
import styles from "./styles";
import { Usuario } from "../../service/api/Types";

const Home = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = await AsyncStorage.getItem("userId");
      if (userId) {
        const response = await getUsuarioPorId(Number(userId));
        setUsuario(response.data);
      }
    };

    fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {usuario && (
        <View>
          <Text>Nome: {usuario.nome}</Text>
          <Text>Skills:</Text>
          <FlatList
  data={usuario.skills || []}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View>
      <Text>Skill: {item.skills?.nome || "N/A"}</Text>
      <Text>Descrição: {item.skills?.descricao || "N/A"}</Text>
      <Text>Imagem: {item.skills?.imagem || "N/A"}</Text>
      <Text>Level: {item.level || "N/A"}</Text>
    </View>
  )}
/>

        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

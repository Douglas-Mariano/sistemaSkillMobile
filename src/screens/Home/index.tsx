import React, { useEffect, useState } from "react";
import { FlatList, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deletarSkillsUsuario, getUsuarioPorId } from "../../service/api/Api";
import styles from "./styles";
import { SkillsUsuario, Usuario } from "../../service/api/Types";
import GlobalStyle from "../../globalStyles/GlobalStyle";
import Button from "../../components/Button";
import ConfirmationModal from "../../components/ConfirmationModal";
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [skillToDeleteId, setSkillToDeleteId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = await AsyncStorage.getItem("userId");
      if (userId) {
        const response = await getUsuarioPorId(Number(userId));
        setUsuario(response.data);
      }
    };

    fetchUser();
  }, [isConfirmationVisible]);

  const handleDeleteSkill = (idSkillUsuario: number) => {
    setSkillToDeleteId(idSkillUsuario);
    setIsConfirmationVisible(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (skillToDeleteId) {
        await deletarSkillsUsuario(skillToDeleteId);
      }
    } catch (error) {
      console.error("Erro ao deletar a skill do usuário:", error);
    } finally {
      setIsConfirmationVisible(false);
      setSkillToDeleteId(null);
    }
  };

  const handleCancelDelete = () => {
    setIsConfirmationVisible(false);
    setSkillToDeleteId(null);
  };

  const handleUpdateSkill = (idSkillUsuario: number) => {
  };

  return (
    <SafeAreaView style={styles.container}>
      {usuario && (
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Olá {usuario.nome}!</Text>
          <Text style={styles.addSkillText}>
            Gostaria de cadastrar uma nova skill?
            <Button style={styles.button}>
              adicionar
            </Button>
          </Text>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={[GlobalStyle.titulo, { color: GlobalStyle.color5.color }]}>
          Skills
        </Text>
      </View>
      {usuario && (
        <View style={styles.skillsContainer}>
          <FlatList
            data={usuario.skills || []}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.skillItemContainer}>
                <View>
                  {item.skills?.imagem ? (
                    <Image
                      source={{ uri: item.skills.imagem }}
                      style={{ width: 50, height: 50, marginRight: 10 }}
                    />
                  ) : (
                    <Image
                      source={require("../../assets/images/imagem.png")}
                      style={{ width: 50, height: 50, marginRight: 10 }}
                    />
                  )}
                </View>
                <View>
                  <Text style={GlobalStyle.texto}>
                    Skill: {item.skills?.nome}
                  </Text>
                  <Text style={GlobalStyle.texto}>
                    Descrição: {item.skills?.descricao || "..."}
                  </Text>
                  <Text style={GlobalStyle.texto}>Level: {item.level}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => handleDeleteSkill(item.id)}>
                    <Icon name="trash" size={25} color="red" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
      <ConfirmationModal
        isVisible={isConfirmationVisible}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </SafeAreaView>
  );
};

export default Home;

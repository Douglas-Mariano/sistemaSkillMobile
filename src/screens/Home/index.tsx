import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import {
  deletarSkillsUsuario,
  atualizarSkillsUsuario,
  adicionarSkillsUsuario,
  getSkillUsuario,
} from "../../service/api/Api";
import styles from "./styles";
import { Skill, SkillsUsuario } from "../../service/api/Types";
import GlobalStyle from "../../globalStyles/GlobalStyle";
import ConfirmationModal from "../../components/ConfirmationModal";
import Icon from "react-native-vector-icons/FontAwesome";
import AdicionarSkillModal from "../../components/AdicionarSkillModal";

const Home = () => {
  const [skills, setSkills] = useState<SkillsUsuario[]>([]);

  const [modalDeletarVisivel, setModalDeletarVisivel] = useState(false);
  const [idSkillUsuario, setIdSkillUsuario] = useState<number | null>(null);
  const [inputAtualizarVisivel, setInputAtualizarVisivel] = useState(false);
  const [levelAtualizado, setLevelAtualizado] = useState("");
  const [modalAdicionarSkillVisivel, setModalAdicionarSkillVisivel] =
    useState(false);

  useEffect(() => {
    const fetchUserSkills = async () => {
      try {
        const response = await getSkillUsuario("", 0, 10);
        console.log(response.data.content);
        setSkills(response.data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserSkills();
  }, [modalDeletarVisivel, inputAtualizarVisivel]);

  const handleDeleteSkill = (idSkillUsuario: number) => {
    setIdSkillUsuario(idSkillUsuario);
    setModalDeletarVisivel(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (idSkillUsuario) {
        await deletarSkillsUsuario(idSkillUsuario);
      }
    } catch (error) {
      console.error("Erro ao deletar a skill do usuário:", error);
    } finally {
      setModalDeletarVisivel(false);
      setIdSkillUsuario(null);
    }
  };

  const handleCancelDelete = () => {
    setModalDeletarVisivel(false);
    setIdSkillUsuario(null);
  };

  const handleUpdateSkill = (idSkillUsuario: number) => {
    setInputAtualizarVisivel(true);
    setIdSkillUsuario(idSkillUsuario);
  };

  const handleConfirmUpdate = async () => {
    try {
      if (idSkillUsuario) {
        const skillsUsuarioAtualizada: SkillsUsuario = {
          level: parseInt(levelAtualizado),
        };

        await atualizarSkillsUsuario(idSkillUsuario, skillsUsuarioAtualizada);

        Alert.alert("Level alterado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao atualizar a skill do usuário:", error);
    } finally {
      setInputAtualizarVisivel(false);
      setIdSkillUsuario(null);
      setLevelAtualizado("");
    }
  };

  const handleCancelUpdate = () => {
    setInputAtualizarVisivel(false);
    setIdSkillUsuario(null);
    setLevelAtualizado("");
  };

  const handleAdicionarSkill = async (novaSkill: Skill, level: number) => {
    try {
        const skillsUsuarioNova: SkillsUsuario = {
          level: level,
          skill: novaSkill,
        };

        console.log(skillsUsuarioNova);
        await adicionarSkillsUsuario(skillsUsuarioNova);

        Alert.alert("Nova skill adicionada com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar nova skill:", error);
    } finally {
      setModalAdicionarSkillVisivel(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={[
            GlobalStyle.titulo,
            { color: GlobalStyle.veryLightGray.color },
          ]}
        >
          Skills
        </Text>
        <TouchableOpacity
          style={styles.adicionarSkillButton}
          onPress={() => setModalAdicionarSkillVisivel(true)}
        >
          <Icon name="plus-circle" size={30} color="blue" />
        </TouchableOpacity>
      </View>
        <View style={styles.skillsContainer}>
          <FlatList
            data={skills}
            keyExtractor={(item) => (item.id ? item.id.toString() : "default")}
            renderItem={({ item }) => (
              <View style={styles.skillItemContainer}>
                <View>
                  {item.skill?.imagem ? (
                    <Image
                      source={{ uri: item.skill.imagem }}
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
                    Skill: {item.skill?.nome}
                  </Text>
                  <Text style={GlobalStyle.texto}>
                    Descrição: {item.skill?.descricao || "..."}
                  </Text>
                  {inputAtualizarVisivel && idSkillUsuario === item.id ? (
                    <View style={styles.updateContainer}>
                      <Text style={styles.fixedText}>Level:</Text>
                      <TextInput
                        style={styles.input}
                        placeholder={item.level.toString()}
                        value={levelAtualizado}
                        onChangeText={(text) => setLevelAtualizado(text)}
                      />
                      <TouchableOpacity
                        onPress={handleConfirmUpdate}
                        style={styles.iconButton}
                      >
                        <Icon name="check" size={20} color="green" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={handleCancelUpdate}
                        style={styles.iconButton}
                      >
                        <Icon name="times" size={20} color="red" />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.updateContainer}>
                      <Text style={GlobalStyle.texto}>Level:</Text>
                      <Text style={GlobalStyle.texto}>{item.level}</Text>
                      <TouchableOpacity
                        onPress={() => item.id && handleUpdateSkill(item.id)}
                        style={styles.iconButton}
                      >
                        <Icon name="pencil" size={15} color="blue" />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() => item.id && handleDeleteSkill(item.id)}
                  >
                    <Icon
                      name="trash"
                      size={25}
                      color="red"
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      <ConfirmationModal
        isVisible={modalDeletarVisivel}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      <AdicionarSkillModal
        isVisible={modalAdicionarSkillVisivel}
        onClose={() => setModalAdicionarSkillVisivel(false)}
        onAdicionarSkill={handleAdicionarSkill}
      />
    </SafeAreaView>
  );
};
export default Home;

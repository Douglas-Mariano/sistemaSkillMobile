import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  deletarSkillsUsuario,
  atualizarSkillsUsuario,
  adicionarSkillsUsuario,
  getSkillsUsuario,
} from "../../service/api/Api";
import styles from "./styles";
import { Skill, SkillsUsuario } from "../../service/api/Types";
import Icon from "react-native-vector-icons/FontAwesome";
import ConfirmationModal from "../../components/ConfirmationModal";
import AdicionarSkillModal from "../../components/AdicionarSkillModal";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { theme } from "../../styles/theme";
import { SkillsContext } from "../../contexts/SkillsContext";

const Home = ({ navigation }: any) => {
  const {
    skill,
    setSkill,
    page,
    setPage,
    filter,
    setFilter,
    loading,
    setLoading,
    modalDeletarVisivel,
    setModalDeletarVisivel,
    idSkillUsuario,
    setIdSkillUsuario,
    inputAtualizarVisivel,
    setInputAtualizarVisivel,
    levelAtualizado,
    setLevelAtualizado,
    modalAdicionarSkillVisivel,
    setModalAdicionarSkillVisivel,
    setTotalElements,
  } = useContext(SkillsContext);

  const fetchUserSkills = async () => {
    setLoading(true);
    try {
      const response = await getSkillsUsuario(filter, page);
      const { content, totalElements: newTotalElements } = response.data;
      const newSkills = page === 0 ? content : [...skill, ...content];
      setSkill(newSkills);
      setTotalElements(newTotalElements);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao carregar as skills do usuário.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchUserSkills();
    }
  }, [page, filter, modalDeletarVisivel, inputAtualizarVisivel]);

  const handleDeleteSkill = (idSkillUsuario: number) => {
    setIdSkillUsuario(idSkillUsuario);
    setModalDeletarVisivel(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (idSkillUsuario) {
        await deletarSkillsUsuario(idSkillUsuario);
        setPage(0);
      }
    } catch (error) {
      console.error("Erro ao deletar a skill do usuário:", error);
      Alert.alert("Erro", "Ocorreu um erro ao deletar a skill do usuário.");
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
        setPage(0);

        Alert.alert("Level alterado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao atualizar a skill do usuário:", error);
      Alert.alert("Erro", "Ocorreu um erro ao atualizar a skill do usuário.");
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

      await adicionarSkillsUsuario(skillsUsuarioNova);
      setPage(0);

      Alert.alert("Nova skill adicionada com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar nova skill:", error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao adicionar a skill para o usuário."
      );
    } finally {
      setModalAdicionarSkillVisivel(false);
    }
  };

  const handleBuscarSkill = () => {
    setPage(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          navigation={navigation}
          onAddSkill={() => setModalAdicionarSkillVisivel(true)}
        />
      </View>
      <View style={styles.skillsContainer}>
        <View style={styles.containerFilter}>
          <Input
            style={styles.filterInput}
            placeholder="Filtrar por nome..."
            value={filter}
            onChangeText={setFilter}
            title="Buscar Skill:"
            onSearch={handleBuscarSkill}
          />
        </View>
        <FlatList
          data={skill}
          keyExtractor={(item, index) =>
            (item.id ? item.id.toString() : "default") + "_" + index
          }
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
                <Text style={styles.fixedText}>Skill: {item.skill?.nome}</Text>
                <Text style={styles.fixedText}>
                  Descrição: {item.skill?.descricao ?? "..."}
                </Text>
                {inputAtualizarVisivel && idSkillUsuario === item.id ? (
                  <View style={styles.updateContainer}>
                    <Text style={styles.fixedText}>Level:</Text>
                    <TextInput
                      style={styles.input}
                      placeholder={item.level.toString()}
                      value={levelAtualizado}
                      onChangeText={(text) => {
                        if (!isNaN(Number(text))) {
                          setLevelAtualizado(text);
                        }
                      }}
                      keyboardType="numeric"
                    />
                    <TouchableOpacity
                      onPress={handleConfirmUpdate}
                      style={styles.iconButton}
                    >
                      <Icon
                        name="check"
                        size={20}
                        color={theme.COLORS.GREEN_500}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleCancelUpdate}
                      style={styles.iconButton}
                    >
                      <Icon name="times" size={20} color={theme.COLORS.RED} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.updateContainer}>
                    <Text style={styles.fixedText}>Level:</Text>
                    <Text style={styles.fixedText}>{item.level}</Text>
                    <TouchableOpacity
                      onPress={() => item.id && handleUpdateSkill(item.id)}
                      style={styles.iconButton}
                    >
                      <Icon
                        name="pencil"
                        size={15}
                        color={theme.COLORS.GREEN_700}
                      />
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
                    size={20}
                    color={theme.COLORS.RED_DARK}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          onEndReached={fetchUserSkills}
          onEndReachedThreshold={0}
          refreshing={loading}
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

import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, Image, SafeAreaView, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { deletarSkillsUsuario, atualizarSkillsUsuario, adicionarSkillsUsuario, getSkillsUsuario } from '../../service/api/Api';
import styles from './styles';
import { Skill, SkillsUsuario } from '../../service/api/Types';
import GlobalStyle from '../../styles/GlobalStyle';
import ConfirmationModal from '../../components/ConfirmationModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import AdicionarSkillModal from '../../components/AdicionarSkillModal';
import Input from '../../components/Input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [skills, setSkills] = useState<SkillsUsuario[]>([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);

  const [modalDeletarVisivel, setModalDeletarVisivel] = useState(false);
  const [idSkillUsuario, setIdSkillUsuario] = useState<number | null>(null);
  const [inputAtualizarVisivel, setInputAtualizarVisivel] = useState(false);
  const [levelAtualizado, setLevelAtualizado] = useState('');
  const [modalAdicionarSkillVisivel, setModalAdicionarSkillVisivel] = useState(false);

  const [totalElements, setTotalElements] = useState<number>(0);

const fetchUserSkills = async () => {
  setLoading(true);
  try {
    const response = await getSkillsUsuario(filter, page, order);
    const { content, totalElements: newTotalElements } = response.data;
    const newSkills = page === 0 ? content : [...skills, ...content];
    setSkills(newSkills);
    setTotalElements(newTotalElements);
    setPage((prevPage) => prevPage + 1);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  

  useEffect(() => {
    if (!loading) {
      fetchUserSkills();
    }
  }, [page, order]);

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
      console.error('Erro ao deletar a skill do usuário:', error);
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

        Alert.alert('Level alterado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao atualizar a skill do usuário:', error);
    } finally {
      setInputAtualizarVisivel(false);
      setIdSkillUsuario(null);
      setLevelAtualizado('');
    }
  };

  const handleCancelUpdate = () => {
    setInputAtualizarVisivel(false);
    setIdSkillUsuario(null);
    setLevelAtualizado('');
  };

  const handleAdicionarSkill = async (novaSkill: Skill, level: number) => {
    try {
      const skillsUsuarioNova: SkillsUsuario = {
        level: level,
        skill: novaSkill,
      };

      console.log(skillsUsuarioNova);
      await adicionarSkillsUsuario(skillsUsuarioNova);

      Alert.alert('Nova skill adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar nova skill:', error);
    } finally {
      setModalAdicionarSkillVisivel(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePrevPage = () => {
    if (page > 0) {
      handlePageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    handlePageChange(page + 1);
  };

  const handleToggle = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.filterContainer}>
          <Input
            style={styles.filterInput}
            placeholder='Filtrar por nome...'
            value={filter}
            onChangeText={setFilter}
            icon={faSearch}
            title='Filtrar:'
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              checked={order === 'desc'}
              onPress={handleToggle}
              title='Ordenar por level'
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.adicionarSkillButton}
          onPress={() => setModalAdicionarSkillVisivel(true)}
        >
          <Icon name='plus-circle' size={30} color='blue' />
        </TouchableOpacity>
      </View>
      <View style={styles.skillsContainer}>
        <FlatList
          data={skills}
          keyExtractor={(item, index) => (item.id ? item.id.toString() : 'default') + '_' + index}
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
                    source={require('../../assets/images/imagem.png')}
                    style={{ width: 50, height: 50, marginRight: 10 }}
                  />
                )}
              </View>
              <View>
                <Text style={GlobalStyle.texto}>Skill: {item.skill?.nome}</Text>
                <Text style={GlobalStyle.texto}>
                  Descrição: {item.skill?.descricao || '...'}
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
                      <Icon name='check' size={20} color='green' />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleCancelUpdate}
                      style={styles.iconButton}
                    >
                      <Icon name='times' size={20} color='red' />
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
                      <Icon name='pencil' size={15} color='blue' />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => item.id && handleDeleteSkill(item.id)}
                >
                  <Icon
                    name='trash'
                    size={25}
                    color='red'
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

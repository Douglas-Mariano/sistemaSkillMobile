import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { obterTodasSkills } from "../../service/api/Api";
import styles from "./styles";
import GlobalStyle from "../../globalStyles/GlobalStyle";
import { Skill } from "../../service/api/Types";

interface AdicionarSkillModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAdicionarSkill: (novaSkill: Skill, level: number) => void;
}

const AdicionarSkillModal: React.FC<AdicionarSkillModalProps> = ({
  isVisible,
  onClose,
  onAdicionarSkill,
}) => {
  const [nomeSkill, setNomeSkill] = useState("");
  const [level, setLevel] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const carregarSkills = async () => {
      try {
        const response = await obterTodasSkills();
        console.log(response)
        setSkills(response);
      } catch (error) {
        console.error("Erro ao carregar skills:", error);
      }
    };

    carregarSkills();
  }, []);

  const handleAdicionar = () => {
    if (!nomeSkill || !level) {
      return;
    }

    const skillSelecionada = skills.find((skill) => skill.nome === nomeSkill);

    if (!skillSelecionada) {
      return;
    }

    onAdicionarSkill(skillSelecionada, parseInt(level));

    setNomeSkill("");
    setLevel("");
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={[GlobalStyle.titulo, styles.modalTitle]}>
            Adicionar Nova Skill
          </Text>
          <Picker
            selectedValue={nomeSkill}
            onValueChange={(itemValue, itemIndex) => setNomeSkill(itemValue)}
            style={styles.input}
          >
            <Picker.Item label="" value="" />
            {skills.map((skill, index) => (
              <Picker.Item key={index} label={skill.nome} value={skill.nome} />
            ))}
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Level"
            value={level}
            onChangeText={(text) => setLevel(text)}
            keyboardType="numeric"
          />
          <View style={styles.botaoContainer}>
            <TouchableOpacity
              style={[
                styles.botaoAdicionar,
                { backgroundColor: GlobalStyle.lightGray.color },
              ]}
              onPress={handleAdicionar}
            >
              <Icon
                name="check"
                size={25}
                color={"green"}
              />
              <Text
                style={
                  styles.textoBotao
                 }
              >
                Confirmar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.botaoCancelar,
                { backgroundColor: GlobalStyle.lightGray.color },
              ]}
              onPress={onClose}
            >
              <Icon
                name="times"
                size={25}
                color={"red"}
              />
              <Text
                style={
                  styles.textoBotao
                }
              >
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AdicionarSkillModal;

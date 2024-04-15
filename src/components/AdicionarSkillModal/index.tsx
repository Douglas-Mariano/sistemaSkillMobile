import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { obterTodasSkills } from "../../service/api/Api";
import styles from "./styles";
import { Skill } from "../../service/api/Types";
import { theme } from "../../styles/theme";

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
  const [selectedValue, setSelectedValue] = useState(null);
  const [level, setLevel] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const carregarSkills = async () => {
      try {
        const response = await obterTodasSkills();
        setSkills(response);
      } catch (error) {
        console.error("Erro ao carregar skills:", error);
      }
    };

    carregarSkills();
  }, []);

  const handleAdicionar = () => {
    if (!selectedValue || !level) {
      return;
    }

    const skillSelecionada = skills.find(
      (skill) => skill.nome === selectedValue
    );

    if (!skillSelecionada) {
      return;
    }

    onAdicionarSkill(skillSelecionada, parseInt(level));

    setSelectedValue(null);
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
          <Text style={styles.modalTitle}>Adicionar Nova Skill</Text>
          <DropDownPicker
            items={skills.map((skill) => ({
              label: skill.nome,
              value: skill.nome,
            }))}
            open={open}
            value={selectedValue}
            setOpen={setOpen}
            setValue={setSelectedValue}
            setItems={(items) => setSkills(items)}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: theme.COLORS.GRAY_100 }}
            placeholder="Selecione uma skill"
          />
          <TextInput
            style={styles.input}
            placeholder="Level"
            value={level}
            onChangeText={(text) => setLevel(text)}
            keyboardType="numeric"
          />
          <View style={styles.botaoContainer}>
            <TouchableOpacity
              style={styles.botaoAdicionar}
              onPress={handleAdicionar}
            >
              <Icon name="check" size={25} color={theme.COLORS.WHITE} />
              <Text style={styles.textoBotao}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCancelar} onPress={onClose}>
              <Icon name="times" size={25} color={theme.COLORS.WHITE} />
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AdicionarSkillModal;

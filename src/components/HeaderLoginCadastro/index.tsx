import React, { ReactNode } from 'react';
import { View, Image, ViewProps } from 'react-native';
import logo from '../../assets/images/logo.png';
import styles from './styles';

interface HeaderProps extends ViewProps {
    children: ReactNode;
}

const HeaderLoginCadastro = ({ children }: HeaderProps) => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            {children}
        </View>
    )
}

export default HeaderLoginCadastro;
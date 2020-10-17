import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import successImg from '../images/success.png';

export default function OrphanageSuccess() {
    const navigation = useNavigation();

    function handleNavigateToMap() {
        navigation.navigate('OrphanagesMap')
    }

    return (
        <View style={styles.container}>
                <Image source={successImg} style={styles.image} /> 

                <Text style={styles.title}> Ebaaa! </Text>
                <Text style={styles.description}> 
                    O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :) 
                </Text>

                <RectButton style={styles.button} onPress={handleNavigateToMap}>
                    <Text style={styles.buttonText}> Ok </Text>
                </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#39CC83',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        marginBottom: 20,
    },

    title: {
        textAlign: 'center',
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 40,
        lineHeight: 45,
        color: '#FFF',

        marginBottom: 18,
    },

    description: {
        textAlign: 'center',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
        color: '#FFF',

        marginBottom: 24,
    },

    button: {
        height: 56,
        paddingHorizontal: 50,
        paddingVertical: 16,
        borderRadius: 20,
        backgroundColor: '#19C06D',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF',
        fontSize: 15,
        lineHeight: 25,
    },
})
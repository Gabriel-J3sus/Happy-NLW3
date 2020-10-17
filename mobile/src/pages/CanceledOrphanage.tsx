import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CanceledOrphanage() {
    const navigation = useNavigation();

    function handlerYesOption() {
        navigation.navigate('OrphanagesMap');
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Feather  
                    name="x"
                    size={32}
                    color="#ff669d"
                />
            </View>

            <Text style={styles.title}>Cancelar cadastro</Text>
            <Text style={styles.description}>Tem certeza que quer cancelar esse cadastro?</Text>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.firstButton} onPress={navigation.goBack}>
                    <Text style={styles.button}>Não</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondButton} onPress={handlerYesOption}>
                    <Text style={styles.button}>Sim</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

        backgroundColor: '#FF669D',
    },

    iconContainer: {
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,

        backgroundColor: '#FFF',
        borderRadius: 16,
        borderColor: 'black',
    },

    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 32,
        lineHeight: 34,
        color: '#FFF',
        textAlign: 'center',

        marginBottom: 25,
    },

    description: {
        maxWidth: 213,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
        color: '#FFF',
        textAlign: 'center',
    },

    buttonContainer: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    firstButton: {
        width: 128,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D6487B',
        borderRadius: 20,
        marginRight: 15,
    },

    secondButton: {
        width: 128,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D6487B',
        borderRadius: 20,
    },

    button: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 15,
        lineHeight: 25,
        color: '#FFF',
    },
})
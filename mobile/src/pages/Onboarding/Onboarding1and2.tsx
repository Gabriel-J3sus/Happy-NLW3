import React from 'react';
import { Image, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Onboarding from 'react-native-onboarding-swiper';
import { RectButton } from 'react-native-gesture-handler';


const Onboarding1and2 = () => {
    const navigation = useNavigation();
    
    function handleNavigation() {
        navigation.navigate('OrphanagesMap');
    }

    const dot = () => {
        return <View />;
    }

    return (
        <Onboarding 
            DotComponent={dot}
            onDone={handleNavigation}

            showNext={true}
            showSkip={false}
            showDone={true}
            showPagination={true}

            bottomBarColor={'#F2F3F5'}
            
            imageContainerStyles={styles.imageContainer}
            titleStyles={styles.title}
            subTitleStyles={styles.subtitle}

            pages={[
                {
                    backgroundColor: '#F2F3F5',
                    image: <Image source={require('../../images/onboarding1.png')} />,
                    title: 'Leve felicidade para o mundo',
                    subtitle: 'Visite orfanatos e mude o dia de muitas crianças.',   
                              
                },
                {
                    backgroundColor: '#F2F3F5',
                    image: <Image source={require('../../images/onboarding2.png')} />,
                    title: 'Escolha um orfanato no mapa e faça uma visita',
                    titleStyles: { 
                        width: 253,
                        height: 108, 
                        marginTop: -50,
                        marginRight: -46,

                        fontSize: 28, 
                        lineHeight: 33, 
                        textAlign: 'right',
                    },
                    subtitle: 'Seja bem vindo!',
                    subTitleStyles: {
                        marginTop: 20,
                    }
                },
            ]}
        />
    );
}; 

export default Onboarding1and2;


const styles = StyleSheet.create({
    imageContainer: {
        top: -30,
    },

    button: {
        width: 56,
        height: 56,
        marginRight: 40,
        marginBottom: 90,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#D1EDF2',
        borderRadius: 20,
    },

    title: {
        width: 217,
        height: 192,
        marginTop: -50,
        marginLeft: -46,

        color: '#0089A5', 
        textAlign: 'left',
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 48,  
        lineHeight: 48,
    },

    subtitle: {
        width: 234,
        height: 60,
        marginLeft: -28,
        
        color: '#5C8599',
        textAlign: 'left',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        lineHeight: 30,

    }
})


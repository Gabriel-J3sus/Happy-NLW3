import React from 'react';
  
import { Image } from 'react-native';


import Onboarding from 'react-native-onboarding-swiper';

const Onboarding1and2 = () => {
    return (
        <Onboarding 
            onDone={() => console.log('done')}
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
                    subtitle: '',
                },
            ]}
        />
    );
}; 

export default Onboarding1and2;
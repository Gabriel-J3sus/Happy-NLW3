import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Onboarding1and2 from './pages/Onboarding/Onboarding1and2';

import OrphanagesMap from './pages/OrphanagesMap'; 
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'; 
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import OrphanageSuccess from './pages/OrphanageSuccess';
import CanceledOrphanage from './pages/CanceledOrphanage';

import Header from './components/Header';


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen 
                    name="Onboarding1and2" 
                    component={Onboarding1and2} 
                />
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap} 
                />
                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails} 
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato"/>
                    }}
                />

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}     
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa"/>
                    }}           
                />
                
                <Screen
                    name="OrphanageData"
                    component={OrphanageData}               
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados"/>
                    }}
                />

                <Screen 
                    name="OrphanageSuccess"
                    component={OrphanageSuccess}
                />

                <Screen 
                    name="CanceledOrphanage"
                    component={CanceledOrphanage}
                />
            </Navigator>
        </NavigationContainer>
    );
}
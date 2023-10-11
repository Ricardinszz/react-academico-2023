import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Professores from './Professores';
import ProfessoresForm from './ProfessoresForm';



const Stack = createNativeStackNavigator();

const ProfessoresStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='Disciplinas' component={Professores} options={{ title: 'Professores' }} />
                <Stack.Screen name='Professores-Form' component={ProfessoresForm} options={{ title: 'Formulario' }} />
            </Stack.Navigator>
        </>
    )
}

export default ProfessoresStack
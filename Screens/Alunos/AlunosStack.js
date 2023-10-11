import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Alunos from './Alunos';
import AlunosForm from './AlunosForm';


const Stack = createNativeStackNavigator();

const AlunosStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='Alunos' component={Alunos} options={{ title: 'Alunos' }} />
                <Stack.Screen name='Alunos-Form' component={AlunosForm} options={{ title: 'Formulario' }} />
            </Stack.Navigator>
        </>
    )
}

export default AlunosStack
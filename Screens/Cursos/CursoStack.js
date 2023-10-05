import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Cursos from './Cursos';
import CursosForm from './CursosForm';


const Stack = createNativeStackNavigator();

const CursosStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='Cursos' component={Cursos} options={{ title: 'Cursos' }} />
                <Stack.Screen name='Cursos-Form' component={CursosForm} options={{ title: 'Formulario' }} />
            </Stack.Navigator>
        </>
    )
}

export default CursosStack
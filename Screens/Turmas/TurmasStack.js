import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Turmas from './Turmas';

const Stack = createNativeStackNavigator();

const TurmasStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='Turmas' component={Turmas} options={{ title: 'Turmas' }} />
            </Stack.Navigator>
        </>
    )
}

export default TurmasStack
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CursosStack from './Screens/Cursos/CursoStack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import DisciplinasStack from './Screens/Disciplinas/DisciplinasStack';
import AlunosStack from './Screens/Alunos/AlunosStack';
import ProfessoresStack from './Screens/Professores/ProfessoresStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider >
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Cursos"
              component={CursosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Disciplinas"
              component={DisciplinasStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-page-variant" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Alunos"
              component={AlunosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Professores"
              component={ProfessoresStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="clipboard-account-outline" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Turmas"
              component={CursosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="school" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

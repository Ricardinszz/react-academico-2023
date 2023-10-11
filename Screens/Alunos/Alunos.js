import React from 'react'
import { Button, Text } from 'react-native-paper'


const Alunos = ({navigation}) => {
  return (
    <>
    <Text style={{ color: 'black' }}>Formulário Alunos</Text>
    <Button icon='plus' 
    mode='contained'
    onPress={() =>navigation.push('Alunos-Form')}
    >
      Novo
    </Button>
    </>
  )
}

export default Alunos
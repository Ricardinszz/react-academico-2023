import React from 'react'
import { Button, Text } from 'react-native-paper'


const Professores = ({navigation}) => {
  return (
    <>
    <Text style={{ color: 'black' }}>Formulário Professores</Text>
    <Button icon='plus' 
    mode='contained'
    onPress={() =>navigation.push('Professores-Form')}
    >
      Novo
    </Button>
    </>
  )
}

export default Professores
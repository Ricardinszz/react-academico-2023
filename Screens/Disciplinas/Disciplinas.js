import React from 'react'
import { Button, Text } from 'react-native-paper'


const Disciplinas = ({navigation}) => {
  return (
    <>
    <Text style={{ color: 'black' }}>Formulário Disciplinas</Text>
    <Button icon='plus' 
    mode='contained'
    onPress={() =>navigation.push('Disciplinas-Form')}
    >
      Novo
    </Button>
    </>
  )
}

export default Disciplinas
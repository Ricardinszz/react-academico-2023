import React from 'react'
import { Button, Text } from 'react-native-paper'


const Cursos = ({navigation}) => {
  return (
    <>
    <Text>vai corinthians</Text>
    <Button icon='plus' 
    mode='contained'
    onPress={() =>navigation.push('Cursos-Form')}
    >
      Novo
    </Button>
    </>
  )
}

export default Cursos
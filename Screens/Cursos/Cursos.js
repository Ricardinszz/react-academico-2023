import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('cursos').then(resultado =>{

      resultado = JSON.parse(resultado) || []

      console.log(resultado)

      setCursos(resultado)
    })

  },[])
  
  return (
    <ScrollView style={{margin: 15}}>

    <>
    <Text style={{ color: 'black' }}>Formulário Curso</Text>
    <Button icon='plus' 
    mode='contained'
    onPress={() =>navigation.push('Cursos-Form')}
    >
      Novo
    </Button>

    {cursos.map(item=>(
      <Text>{item.nome}</Text>
      ))}
    
    </>
      </ScrollView>
  )
}

export default Cursos
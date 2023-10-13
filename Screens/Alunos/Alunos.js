import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'


const Alunos = ({navigation}) => {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('alunos').then(resultado =>{

      resultado = JSON.parse(resultado) || []

      console.log(resultado)

      setAlunos(resultado)
    })

  },[])



  return (
    <>
    <Text style={{ color: 'black' }}>Formulário Alunos</Text>
    <Button icon='plus' 
    mode='contained'
    onPress={() =>navigation.push('Alunos-Form')}
    >
      Novo
    </Button>
    {alunos.map(item=>(
      <Text style={{ color: 'black' }}>{item.nome}</Text>
      ))}

    </>
  )
}

export default Alunos
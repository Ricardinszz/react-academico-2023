import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinasForm = ({navigation}) => {

  const [dados, setDados] = useState({})

  function handleChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  function salvar(){
    AsyncStorage.getItem('disciplinas').then(resultado =>{

      const disciplinas = JSON.parse(resultado) || []

      disciplinas.push(dados)
      console.log(disciplinas)

      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))

    navigation.goBack()
    })

  }

  return (
    <ScrollView style={{margin: 15}}>
    <>
    
    <Text style={{ color: 'black' }}>Formulário de Disciplinas</Text>

    <TextInput 
    style={{margin: 5}} 
    mode='outlined'
    label='Nome' 
    value={dados.nome}
    onChangeText={(valor) =>handleChange(valor, 'nome')}
    />

    <Button onPress={salvar}>Salvar</Button>
    </>
    </ScrollView>
  )
}

export default DisciplinasForm

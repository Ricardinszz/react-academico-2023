import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinasForm = () => {

  const [dados, setDados] = useState({})

  function handleChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  function salvar(){
    console.log(dados)
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

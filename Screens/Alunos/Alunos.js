import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Alunos = ({navigation}) => {
  const [alunos, setAlunos] = useState([])
  const [idExcluir, setExcluir] = useState([0])

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useFocusEffect(
    React.useCallback(() => {
      carregarDados()
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('alunos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setAlunos(resultado)
    })
  }

  function confirmarExclusao(id){
    setExcluir(id)
    setVisible(true)
    
  }

  function excluir() {
    alunos.splice(idExcluir, 1)
    AsyncStorage.setItem('alunos', JSON.stringify(alunos))
    carregarDados()
    setVisible(false)
  }

  return (
    <>
      <ScrollView style={{ padding: 15 }}>

        <Text style={{ color: 'black' }}>Alunos</Text>

        {alunos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">Matricula: {item.matricula}</Text>
              <Text variant="bodyMedium">Email: {item.email}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon='pencil-outline' 
              onPress={() => navigation.push('Alunos-Form', {id: i, aluno: item})}
              />
              <IconButton icon='trash-can-outline'
                onPress={() => confirmarExclusao(i)}
              />

            </Card.Actions>
          </Card>
        ))}

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Atenção</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir o registro?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

      </ScrollView>
      <FAB
        icon="plus"
        size='small'
        style={{ position: 'absolute', margin: 16, right: 5, bottom: 5 }}
        onPress={() => navigation.push('Alunos-Form')}
      />
    </>
  )
}

export default Alunos
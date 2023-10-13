import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresForm = ({navigation}) => {

    const [dados, setDados] = useState({})

    function handleChange(valor, campo) {
        setDados({ ...dados, [campo]: valor })
    }

    function salvar() {
        AsyncStorage.getItem('professores').then(resultado =>{

            const professores = JSON.parse(resultado) || []
      
            professores.push(dados)
            console.log(professores)
      
            AsyncStorage.setItem('professores', JSON.stringify(professores))
      
          navigation.goBack()
          })
      
        }


    return (
        <ScrollView style={{ margin: 15 }}>
            <>

                <Text style={{ color: 'black' }}>Formulário de Alunos</Text>

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Nome'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'nome')}
                />


                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='CPF'
                    keyboardType='decimal-pad'
                    value={dados.cpf}
                    onChangeText={(valor) => handleChange(valor, 'cpf')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Matrícula'
                    value={dados.matricula}
                    onChangeText={(valor) => handleChange(valor, 'matricula')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Salario'
                    value={dados.salario}
                    onChangeText={(valor) => handleChange(valor, 'salario')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Email'
                    value={dados.email}
                    onChangeText={(valor) => handleChange(valor, 'email')}
                />


                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Telefone'
                    keyboardType='decimal-pad'
                    value={dados.telefone}
                    onChangeText={(valor) => handleChange(valor, 'telefone')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='CEP'
                    value={dados.cep}
                    onChangeText={(valor) => handleChange(valor, 'cep')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Logradouro'
                    value={dados.logradouro}
                    onChangeText={(valor) => handleChange(valor, 'logradouro')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Complemento'
                    value={dados.complemento}
                    onChangeText={(valor) => handleChange(valor, 'complemento')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Numero'
                    value={dados.numero}
                    onChangeText={(valor) => handleChange(valor, 'numero')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Bairro'
                    value={dados.bairro}
                    onChangeText={(valor) => handleChange(valor, 'bairro')}
                />

                <Button onPress={salvar}>Salvar</Button>
            </>
        </ScrollView>
    )
}

export default ProfessoresForm
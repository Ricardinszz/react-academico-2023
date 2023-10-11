import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosForm = () => {

    const [dados, setDados] = useState({})

    function handleChange(valor, campo) {
        setDados({ ...dados, [campo]: valor })
    }

    function salvar() {
        console.log(dados)
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
                    value={dados.duracao}
                    onChangeText={(valor) => handleChange(valor, 'cpf')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Matrícula'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'matricula')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Email'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'email')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Telefone'
                    keyboardType='decimal-pad'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'telefone')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='CEP'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'cep')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Logradouro'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'logradouro')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Complemento'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'complemento')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Numero'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'numero')}
                />

                <TextInput
                    style={{ margin: 5 }}
                    mode='outlined'
                    label='Bairro'
                    value={dados.modalidade}
                    onChangeText={(valor) => handleChange(valor, 'bairro')}
                />

                <Button onPress={salvar}>Salvar</Button>
            </>
        </ScrollView>
    )
}

export default AlunosForm
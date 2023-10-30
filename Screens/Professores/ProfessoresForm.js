import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import professoresValidator from '../../Validators/professoresValidator'

const ProfessoresForm = ({ navigation, route }) => {

  let professor = {
        nome: '',
        cpf: '',
        matricula: '',
        salario: '',
        email: '',
        telefone: '',
        cep: '',
        logradouro: '',
        complemento: '',
        numero: '',
        bairro: ''
    }

  const id = route.params?.id

  if (id >= 0) {
    professor = route.params?.professor
  }

  function salvar(dados) {

    AsyncStorage.getItem('professores').then(resultado => {

      const professores = JSON.parse(resultado) || []

      if (id >= 0) {
        professores.splice(id, 1, dados)
      } else {
        professores.push(dados)
      }

      AsyncStorage.setItem('professores', JSON.stringify(professores))

      navigation.goBack()
    })
  }
    return (
        <ScrollView style={{ margin: 15 }}>
            <>

                <Text style={{ color: 'black' }}>Formulário de Alunos</Text>

                <Formik
                    initialValues={professor}
                    validationSchema={professoresValidator}
                    onSubmit={values => salvar(values)}
                >
                    {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                        <View>
                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Nome'
                                value={values.nome}
                                onChangeText={handleChange('nome')}
                            />

                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.nome}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='CPF'
                                keyboardType='decimal-pad'
                                value={values.cpf}
                                onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999.999-99')) }}
                            />

                            {(errors.cpf && touched.cpf) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.cpf}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Matrícula'
                                value={values.matricula}
                                onChangeText={handleChange('matricula')}
                            />

                            {(errors.matricula && touched.matricula) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.matricula}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Salario'
                                value={values.salario}
                                onChangeText={handleChange('salario')}
                            />

                            {(errors.salario && touched.salario) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.salario}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Email'
                                value={values.email}
                                onChangeText={handleChange('email')}
                            />

                            {(errors.email && touched.email) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.email}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Telefone'
                                keyboardType='decimal-pad'
                                value={values.telefone}
                                onChangeText={(value) => { setFieldValue('telefone', mask(value, '(99)9 9999-9999')) }}
                            />

                            {(errors.telefone && touched.telefone) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.telefone}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='CEP'
                                value={values.cep}
                                onChangeText={(value) => { setFieldValue('cep', mask(value, '99999-999')) }}
                            />

                            {(errors.cep && touched.cep) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.cep}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Logradouro'
                                value={values.logradouro}
                                onChangeText={handleChange('logradouro')}
                            />

                            {(errors.logradouro && touched.logradouro) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.logradouro}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Complemento'
                                value={values.complemento}
                                onChangeText={handleChange('complemento')}
                            />

                            {(errors.complemento && touched.complemento) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.complemento}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Numero'
                                value={values.numero}
                                onChangeText={handleChange('numero')}
                            />

                            {(errors.numero && touched.numero) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.numero}
                                </Text>
                            }

                            <TextInput
                                style={{ margin: 5 }}
                                mode='outlined'
                                label='Bairro'
                                value={values.bairro}
                                onChangeText={handleChange('bairro')}
                            />

                            {(errors.bairro && touched.bairro) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.bairro}
                                </Text>
                            }

                            <Button onPress={handleSubmit}>Salvar</Button>
                        </View>
                    )}
                </Formik>
            </>
        </ScrollView>
    )
}

export default ProfessoresForm
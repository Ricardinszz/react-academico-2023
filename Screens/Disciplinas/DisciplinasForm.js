import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import disciplinasValidator from '../../Validators/disciplinasValidator'

const DisciplinasForm = ({ navigation, route }) => {

  let disciplina = {
        nome: '',
    }

  const id = route.params?.id

  if (id >= 0) {
    disciplina = route.params?.disciplina
  }

  function salvar(dados) {

    AsyncStorage.getItem('disciplinas').then(resultado => {

      const disciplinas = JSON.parse(resultado) || []

      if (id >= 0) {
        disciplinas.splice(id, 1, dados)
      } else {
        disciplinas.push(dados)
      }

      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))

      navigation.goBack()
    })
  }
  return (
    <ScrollView style={{ margin: 15 }}>
      <>

        <Text style={{ color: 'black' }}>Formulário de Disciplina</Text>

        <Formik
          initialValues={disciplina}
          validationSchema={disciplinasValidator}
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


              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </>
    </ScrollView>
  )
}

export default DisciplinasForm
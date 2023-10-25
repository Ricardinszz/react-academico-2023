import * as Yup from 'yup';

const cursoValidator = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'valor muito curto')
      .max(50, 'valor muito grande')
      .required('campo obrigatorio'),

    duracao: Yup.number(),
    modalidade: Yup.string().strict(),
  })

  export default cursoValidator
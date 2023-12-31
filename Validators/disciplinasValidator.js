import * as Yup from 'yup';

const disciplinasValidator = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'valor muito curto')
      .max(50, 'valor muito grande')
      .required('campo obrigatorio'),
  })

  export default disciplinasValidator
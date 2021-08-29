import * as Yup from 'yup';

export default Yup.object().shape({
    nome: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    numeroCep: Yup.string().min(8).required(),
    celular: Yup.string().min(8).required(),
    numero: Yup.string().min(2).required(),
    numeroCPF: Yup.string().min(8).required(),
    cargo: Yup.string().min(2).required(),
});
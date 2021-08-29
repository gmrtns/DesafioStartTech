import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';
import './App.css';


function App() {

  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const numeroCep = value?.replace('-','');

    if (numeroCep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${numeroCep}/json/`)
      .then((res) => res.json())
      .then((data) => { 
        setFieldValue('endereco', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('estado', data.uf);

      });

  }



  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          name: ' ',
          cargo: ' ',
          dataNascimento: ' ',
          estadoCivil: ' ',
          genero: ' ',
          numeroCep: ' ',
          endereco: ' ',
          numero: ' ',
          bairro: ' ',
          cidade: ' ',
          estado: ' ',
          telefone: ' ',
          celular: ' ',
          email: ' ',
          numeroRg: ' ',
          numeroCPF: ' ',
          veiculo: ' ',
          habilitacao: ' ',
        }}
        render={({ values, errors, touched, isValid, setFieldValue }) => (
      <Form>
        <h1>Formulário de Cadastro</h1>
        <h2>Dados Pessoais:</h2>
       <div className="form-control-group">
         <label>Nome Completo</label>
         <Field name="nome" type="text"/>
         <ErrorMessage name="nome"/>
       </div>
       <div className="form-control-group">
         <label>Cargo Pretendido</label>
         <Field name="cargo" type="text"  />
         <ErrorMessage name="cargo"/>
       </div>
       <div className="form-control-group">
         <label>Data de Nascimento</label>
         <Field name="dataNascimento" type="date"  />
       </div>
       <div className="form-control-group">
         <label>Estado Civil</label>
         <Field component="select" name="estadoCivil" >
            <option value={null}>Selecione</option>
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="separado">Separado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
           </Field>
       </div>
       <div className="form-control-group">
         <label>Sendo que nossas empresas valorizam a diversidade, como você declara a sua identidade de gênero?</label>
         <Field component='select' name="genero" type="text"  >
         <option value={null}>Selecione</option>
         <option value="femininocis">Feminino Cisgênero</option>
         <option value="masculinocis">Masculino Cisgênero</option>
         <option value="femininotrans">Feminino Transgênero</option>
         <option value="masculinotrans">Masculino Transgênero</option>
         <option value="naobinario">Não Binário</option>
         <option value="semresposta">Não quero responder</option>
         </Field>
       </div>
       <br/>
       <h2>Localização:</h2>
       <div className="form-control-group">
         <label>CEP</label>
         <Field name="numeroCep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
       </div>
       <div className="form-control-group">
         <label>Logradouro</label>
         <Field name="endereco" type="text"  />
         <ErrorMessage name="endereco"/>
       </div>
       <div className="form-control-group">
         <label>Número</label>
         <Field name="numero" type="text"  />
         <ErrorMessage name="numero"/>
       </div>
       <div className="form-control-group">
         <label>Bairro</label>
         <Field name="bairro" type="text"  />
         <ErrorMessage name="bairro"/>
       </div>
       <div className="form-control-group">
         <label>Cidade</label>
         <Field name="cidade" type="text"  />
         <ErrorMessage name="cidade"/>
       </div>
       <div className="form-control-group">
         <label>Estado</label>
         <Field name="estado" type="text"  />
       </div>
       <div className="form-control-group">
         <label>Telefone</label>
         <Field name="telefone" type="text"  />
       </div>
       <div className="form-control-group">
         <label>Celular</label>
         <Field name="celular" type="text"  />
         <ErrorMessage name="celular"/>
       </div>
       <div className="form-control-group">
         <label>E-mail</label>
         <Field name="email" type="text"  />
         <ErrorMessage name="email"/>
       </div>
       <br/>
       <h2>Documentos Pessoais:</h2>
       <div className="form-control-group">
         <label>RG</label>
         <Field name="numeroRg" type="text"  />
       </div>
       <div className="form-control-group">
         <label>CPF</label>
         <Field name="numeroCPF" type="text"  />
         <ErrorMessage name="numeroCPF"/>
       </div >
       <div className="form-control-group">
         <label>Possui Veículo?</label>
         <Field component="select" name="veiculo" type="text">
            <option value={null}>Selecione</option>
            <option value="comveiculo">Sim</option>
            <option value="semveiculo">Não</option>
           </Field>
       </div>
       <div className="form-control-group">
         <label>Habilitação</label>
         <Field component="select" name="habilitacao" type="text">
            <option value={null}>Selecione</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
           </Field>
       </div>
       <br/>
       <button type="submit" disabled={!isValid}>Cadastrar</button>
       <br/>
     </Form>
        )}
     />
    </div>
  );
}

export default App;

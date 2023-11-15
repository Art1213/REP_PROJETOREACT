import React, { Component } from 'react';
import './App.css';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      senha: '',
      cpf: '',
      dataNascimento: '',
      sexo: '',
      telefone: '',
      endereco: '',
      pais: '',
      comentarios: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      nome,
      email,
      senha,
      cpf,
      dataNascimento,
      sexo,
      telefone,
      endereco,
      pais,
      comentarios,
    } = this.state;

    console.log('Nome: ', nome);
    console.log('Email: ', email);
    console.log('Senha: ', senha);
    console.log('CPF: ', cpf);
    console.log('Data de Nascimento: ', dataNascimento);
    console.log('Sexo: ', sexo);
    console.log('Telefone: ', telefone);
    console.log('Endereço: ', endereco);
    console.log('País: ', pais);
    console.log('Comentários: ', comentarios);

    alert('Formulário enviado com sucesso!');
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const {
      nome,
      email,
      senha,
      cpf,
      dataNascimento,
      sexo,
      telefone,
      endereco,
      pais,
      comentarios,
    } = this.state;

    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => this.handleChange('nome', e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => this.handleChange('email', e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => this.handleChange('senha', e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => this.handleChange('cpf', e.target.value)}
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChange={(e) =>
              this.handleChange('dataNascimento', e.target.value)
            }
          />
        </div>
        <div>
          <div>
            <label>
              Masculino
              <input
                type="radio"
                value="Masculino"
                checked={sexo === 'Masculino'}
                onChange={() => this.handleChange('sexo', 'Masculino')}
              />
            </label>
          </div>
          <div>
            <label>
              Feminino
              <input
                type="radio"
                value="Feminino"
                checked={sexo === 'Feminino'}
                onChange={() => this.handleChange('sexo', 'Feminino')}
              />
            </label>
          </div>
        </div>
        <div>
          <input
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => this.handleChange('telefone', e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Endereço"
            value={endereco}
            onChange={(e) => this.handleChange('endereco', e.target.value)}
          />
        </div>
        <div>
          <label>
            País
            <select
              value={pais}
              onChange={(e) => this.handleChange('pais', e.target.value)}
            >
              <option value="">Selecione...</option>
              <option value="br">Brasil</option>
              <option value="us">Estados Unidos</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Comentários
            <textarea
              value={comentarios}
              onChange={(e) => this.handleChange('comentarios', e.target.value)}
            ></textarea>
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Formulario;

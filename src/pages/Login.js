import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import login from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    button: true,
  };

  renderChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    },
    () => this.verificaEstado());
  };

  verificaEstado = () => {
    const numb = 6;
    const { email, password } = this.state;
    const verificaEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/img;
    if (verificaEmail.test(email) && password.length >= numb) {
      this.setState({
        button: false,
      });
      return;
    }
    this.setState({
      button: true,
    });
  }

  onClickEntrar = () => {
    const { logar, history } = this.props;
    const dados = { ...this.state };
    delete dados.button;
    logar(dados);
    history.push('/carteira');
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <div>
        Login
        <input
          onChange={ this.renderChange }
          value={ email }
          name="email"
          data-testid="email-input"
          type="text"
        />
        <input
          onChange={ this.renderChange }
          value={ password }
          name="password"
          data-testid="password-input"
          type="password"
        />
        <button
          type="button"
          disabled={ button }
          onClick={ this.onClickEntrar }
        >
          Entrar

        </button>
      </div>
    );
  }
}

const mapDispatchToProps = { logar: login };

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
  logar: propTypes.func.isRequired,
};

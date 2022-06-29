import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendCoin } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { propCoin } = this.props;
    propCoin();
  }

  render() {
    const { user, currency } = this.props;
    return (
      <body>
        <header>
          <h3 data-testid="email-field">
            Email:
            {user}
          </h3>
          <h3 data-testid="total-field">R$ 0,00</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input
              data-testid="value-input"
              type="value"
              name="value"
              placeholder="digite o valor"
              // value={ value }
              // onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="coin">
            Moeda
            <select id="coin">
              {currency.map((coin, index) => (
                <option
                  key={ index }
                  id="coin"
                  value={ coin }
                >
                  { coin }
                </option>))}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de pagamento
            <select data-testid="method-input">
              <option id="" type="text" name="" value="">Escolha um método</option>
              <option id="money" type="text" name="money" value="money">Dinheiro</option>
              <option id="credit-card" type="text" name="credit-card" value="credit-card">
                Cartão de crédito
              </option>
              <option id="debit-card" type="text" name="debit-card" value="debit-card">
                Cartão de débito
              </option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria
            <select data-testid="tag-input">
              <option id="" type="text" name="" value="">Escolha uma categoria</option>
              <option id="food" type="text" name="food" value="food">Alimentação</option>
              <option id="lounge" type="text" name="lounge" value="lounge">Lazer</option>
              <option id="job" type="text" name="job" value="job">Trabalho </option>
              <option id="transport" type="text" name="transport" value="transport">
                Transporte
              </option>
              <option id="health" type="text" name="health" value="health">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição
            <input
              data-testid="description-input"
              type="description"
              name="description"
              placeholder="descreva seu gasto"
              // value={ description }
              // onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            name="btn-expense"
            // onClick={ this.logClick }
          >
            Adicionar despesa
          </button>
        </form>
      </body>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  propCoin: () => dispatch(sendCoin()),
});

Wallet.propTypes = {
  user: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
  propCoin: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

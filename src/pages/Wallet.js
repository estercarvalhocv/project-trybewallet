import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { manageCoin, sendCoin } from '../actions';

class Wallet extends React.Component {
  state ={
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: '',
    tag: '',
  }

  componentDidMount() {
    const { propCoin } = this.props;
    propCoin();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  logClick = () => {
    const { addExpenses } = this.props;
    addExpenses({ ...this.state });
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
    }));
  }

  refreshHeader = () => {
    const { expense } = this.props;
    const getValue = expense.reduce((acc, currentValue) => (
      acc + (currentValue.value * currentValue.exchangeRates[currentValue.currency].ask)
    ), 0);
    return Number(getValue).toFixed(2);
  }

  render() {
    const { user, currencys } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    return (
      <div>

        <header>
          <h3 data-testid="email-field">
            Email:
            {user}
          </h3>
          <h3 data-testid="total-field">{this.refreshHeader()}</h3>
          <h3 data-testid="header-currencys-field">BRL</h3>
        </header>

        <form>
          <label htmlFor="value">
            Valor
            <input
              data-testid="value-input"
              type="value"
              name="value"
              placeholder="digite o valor"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="coin">
            Moeda
            <select
              id="coin"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencys.map((coin, index) => (
                <option
                  key={ index }
                  id="coin"
                >
                  { coin }
                </option>))}
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento
            <select
              data-testid="method-input"
              id="method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option id="money" type="text">Dinheiro</option>
              <option id="credit-card" type="text">Cartão de crédito</option>
              <option id="debit-card" type="text">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option id="food" type="text">Alimentação</option>
              <option id="lounge" type="text">Lazer</option>
              <option id="job" type="text">Trabalho </option>
              <option id="transport" type="text">Transporte</option>
              <option id="health" type="text">Saúde</option>
            </select>
          </label>

          <label htmlFor="description">
            Descrição
            <input
              data-testid="description-input"
              type="description"
              name="description"
              placeholder="descreva seu gasto"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            name="btn-expense"
            onClick={ this.logClick }
          >
            Adicionar despesa
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody />
        </table>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currencys: state.wallet.currencies,
  expense: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  propCoin: () => dispatch(sendCoin()),
  addExpenses: (expenses) => dispatch(manageCoin(expenses)),
});

Wallet.propTypes = {
  user: propTypes.string.isRequired,
  currencys: propTypes.arrayOf(Object).isRequired,
  expense: propTypes.arrayOf(propTypes.shape({})).isRequired,
  propCoin: propTypes.func.isRequired,
  addExpenses: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

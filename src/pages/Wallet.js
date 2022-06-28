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
    const { user } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          Email:
          { user }
        </h3>
        <h3 data-testid="total-field">0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.email,
});
const mapDispatchToProps = (dispatchEvent) => ({
  propCoin: () => dispatchEvent(sendCoin()),
});

Wallet.propTypes = {
  user: propTypes.string.isRequired,
  propCoin: propTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
  // currenciesApi: PropTypes.func.isRequired,
  // getExpensesInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

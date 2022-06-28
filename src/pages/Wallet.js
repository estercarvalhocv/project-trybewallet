import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
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
Wallet.propTypes = {
  user: propTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // currenciesApi: PropTypes.func.isRequired,
  // getExpensesInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);

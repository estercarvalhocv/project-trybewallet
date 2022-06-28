// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {};
const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default reducerWallet;

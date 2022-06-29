// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};
function wallet(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case 'SAVE_CURRENCIES':
    return {
      ...state,
      currencies: payload,
    };
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
    /*
    editor: { ...state },
    idToEdit: { ...state }, */
  default:
    return state;
  }
}
export default wallet;

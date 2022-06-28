// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
const login = (value) => ({ type: LOGIN, payload: value });

export default login;

export const saveCurrencies = (currencies) => (
  { type: 'SAVE_CURRENCIES', payload: currencies });

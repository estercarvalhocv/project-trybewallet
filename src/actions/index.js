// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
const login = (value) => ({ type: LOGIN, payload: value });

export default login;

export const saveCurrencies = (currencies) => ({
  type: 'SAVE_CURRENCIES', payload: currencies });

export const sendCoin = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  const filterCoin = Object.keys(json).filter((coin) => coin !== 'USDT');
  dispatch(saveCurrencies(filterCoin));
};

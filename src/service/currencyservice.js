import { format } from 'date-fns';
import axios from 'axios';

export async function getMonoCurrency() {
  const { data } = await axios.get('https://api.monobank.ua/bank/currency');
  return data;
}

function parseMono(arr) {
  const rez = [
    {
      currency: 'USD',
    },
    {
      currency: 'EUR',
    },
  ];

  arr.forEach((el, idx) => {
    rez[idx].buy = el.rateBuy.toFixed(2);
    rez[idx].sell = el.rateSell.toFixed(2);
  });

  return rez;
}

async function getCurrency() {
  const data = await getMonoCurrency();
  return parseMono(data.slice(0, 2));
}
export default getCurrency;

export const parseDate = date => format(date, 'yyyy-MM-dd');

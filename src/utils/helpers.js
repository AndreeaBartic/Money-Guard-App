import { getMonoCurrency } from '../service/currencyservice';
import { format } from 'date-fns';

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

export const getLanguage = () => {
  const language = localStorage.getItem('i18nextLng') || 'en';
  if (language === 'ru-RU') return 'ua';
  return language;
};

import React from 'react';
import { RiEmotionUnhappyLine } from 'react-icons/ri';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { TextInfo, Total, TotalContainer } from './Chart.styled';
import { useTransaction } from 'utils/useTransaction';

ChartJS.register(ArcElement, Tooltip, Legend);

export const colorStatistics = [
  { name: 'Main expenses', color: '#FED057' },
  { name: 'Products', color: '#FFD8D0' },
  { name: 'Car', color: '#FD9498' },
  { name: 'Self care', color: '#C5BAFF' },
  { name: 'Child care', color: '#6E78E8' },
  { name: 'Household products', color: '#4A56E2' },
  { name: 'Education', color: '#81E1FF' },
  { name: 'Leisure', color: '#24CCA7' },
  { name: 'Other expenses', color: '#00AD84' },
  { name: 'Entertainment', color: '#FF69B4' },
  { name: 'Income', color: '#FFB627' },
];

const ChartComponent = ({ transactions }) => {
  const { income, summary } = useTransaction();
  if (!transactions) {
    return (
      <div style={{ paddingBottom: '32px' }}>
        <div style={{ margin: '0 auto', width: '250px' }}>
          <RiEmotionUnhappyLine size="250" fill="white" />
        </div>

        <TextInfo> Sorry you not have info in this period</TextInfo>
      </div>
    );
  }

  const balance = income + summary;
  const data = {
    labels: transactions?.map(item => item.name),
    datasets: [
      {
        label: 'Amount',
        data: transactions?.map(item => Math.abs(item.total)),
        backgroundColor: transactions?.map(item => {
          const colorItems = colorStatistics.find(
            colorItem => colorItem.name === item.name
          );
          return colorItems ? colorItems.color : '#FFFFFF';
        }),
        hoverOffset: 2,
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };
  const options = {
    borderRadius: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <TotalContainer>
      <Doughnut data={data} options={options} />
      {balance && <Total>₴ {balance.toFixed(2)}</Total>}
    </TotalContainer>
  );
};

export default ChartComponent;

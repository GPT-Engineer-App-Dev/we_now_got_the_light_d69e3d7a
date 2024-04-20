import React from 'react';
import { createChart } from 'lightweight-charts';
import { Box } from '@chakra-ui/react';

const CryptoChart = ({ data, color }) => {
  const chartContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (!data || !chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, { width: 400, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData(data.map(dataPoint => ({ time: dataPoint.time, value: parseFloat(dataPoint.priceUsd) })));

    return () => chart.remove();
  }, [data]);

  return (
    <Box ref={chartContainerRef} />
  );
};

export default CryptoChart;

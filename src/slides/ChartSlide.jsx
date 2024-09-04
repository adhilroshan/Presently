import React from 'react';
import Slide from '../components/Slide';
import Chart from '../components/Chart';

const ChartSlide = () => (
  <Slide>
    <h2 className="text-3xl font-bold mb-4">Slide with Chart</h2>
    <Chart />
  </Slide>
);

export default ChartSlide;
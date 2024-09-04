import React from 'react';
import Slide from '../components/Slide';
import Chart from '../components/Chart';

const ChartSlide = () => (
  <Slide>
    <h2 className="mb-4 text-3xl font-bold">Slide with Chart</h2>
    <Chart />
  </Slide>
);

export default ChartSlide;
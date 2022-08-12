import React from 'react';
import AppHeader from './appHeader';
import ResultsList from './resultsList';
import WeightForm from './weightForm';
import useWeightState from '../hooks/useWeightState';

const Weights = () => {
  const saveInputData = ((number, unit) => {
    convertWeight(parseFloat(number), unit);
  });

  const {weights, convertWeight, resetWeightConverter} = useWeightState([]);

  return (
    <div>
      <AppHeader resetWeightConverter={resetWeightConverter}/>
      <WeightForm saveInputData={saveInputData}/>
      <ResultsList 
        weights={weights}
        convertWeight={convertWeight}
      />
    </div>
  );
}

export default Weights;
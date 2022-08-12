import React from 'react';
import ResultCard from './resultCard';

const ResultsList = ({weights}) => {
  

  return (
    <div className="results-container container-fluid">
      {weights.map(weight => (
        <ResultCard key={weight.id} unit={weight.unit} result={weight.number} />
      ))}
    </div>
  );
}

export default ResultsList;
import React from 'react';

const ResultCard = ({unit, result}) => {
  return (
    <div className="card is-secondary-background">
      <h1 className="card-title is-primary-text">{unit}</h1>
      <h1 className="card-text is-white-text">{result}</h1>
    </div>
  );
}
 
export default ResultCard;
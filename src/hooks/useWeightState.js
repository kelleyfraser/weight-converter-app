import {useState} from 'react';

const useWeightState = (number, unit) => {
  const [weights, setWeights] = useState([]);

  return {
    weights,
    convertWeight: (number, unit) => {
      const newWeights =[{id: 1, number: number, unit: unit}];
      let id = 1;
      if (unit === "kilograms") {
        newWeights.push({id: ++id, number: (number*1000).toFixed(2), unit: "grams"});
        newWeights.push({id: ++id, number: (number*2.205).toFixed(2), unit: "pounds"});
        newWeights.push({id: ++id, number: (number*35.274).toFixed(2), unit: "ounces"});
      }
      if (unit === "grams") {
        newWeights.push({id: ++id, number: (number/453.6).toFixed(4), unit: "pounds"});
        newWeights.push({id: ++id, number: (number/28.35).toFixed(4), unit: "ounces"});
        newWeights.push({id: ++id, number: (number/1000).toFixed(4), unit: "kilograms"});
      }
      if (unit === "pounds") {
        newWeights.push({id: ++id, number: (number*16).toFixed(2), unit: "ounces"});
        newWeights.push({id: ++id, number: (number/2.205).toFixed(2), unit: "kilograms"});
        newWeights.push({id: ++id, number: (number*435.6).toFixed(2), unit: "grams"});
      }
      if (unit === "ounces") {
        newWeights.push({id: ++id, number: (number/35.275).toFixed(4), unit: "kilograms"});
        newWeights.push({id: ++id, number: (number*28.35).toFixed(4), unit: "grams"});
        newWeights.push({id: ++id, number: (number/16).toFixed(4), unit: "pounds"});
      }
    
      setWeights(newWeights);
    },
    resetWeightConverter: () => {
      const newWeights = [];
      setWeights(newWeights);
    }
  }
}

export default useWeightState;
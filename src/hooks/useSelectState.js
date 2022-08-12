import {useState} from 'react';

const useSelectState = (initialUnit) => {
  const [unit, setUnit] = useState(initialUnit);

  return {
    unit, 
    onSelect: (e) => {
      setUnit(e.target.value);
    },
    resetUnit: () => setUnit("")
  };
}

export default useSelectState;
import React from 'react';
import useInputState from '../hooks/useInputState';
import useSelectState from '../hooks/useSelectState';

const WeightForm = ({saveInputData}) => {
  const {value, resetInput, onChange} = useInputState('');
  const {unit, resetUnit, onSelect} = useSelectState('');

  return (
    <div className="form-container container-fluid text-center">
      <form>
        <div className="input-group mt-3">
          <input
            type="number" 
            value={value}
            onChange={onChange}
            className="form-control"
            required />
        </div>
        <div className="input-group mt-3">
          <select 
            className="form-control"
            value={unit}
            onChange={onSelect}
            required
            >
            <option className="is-gray-text" value="" disabled>Select a unit...</option>
            <option value="kilograms">kilograms</option>
            <option value="grams">grams</option>
            <option value="pounds">pounds</option>
            <option value="ounces">ounces</option>
          </select>
        </div>
        <button
          onClick={e => {e.preventDefault(); resetInput(); resetUnit(); saveInputData(value, unit);}}
          className="btn btn-primary mt-3">
            Compute
        </button> 
      </form>
    </div>
  );
}

export default WeightForm;
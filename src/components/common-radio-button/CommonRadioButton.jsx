import React from 'react';

const CommonRadioButton = ({ label, name, value, options = [], onChange }) => {
  return (
    <div className="col-md-6 mb-4">
      <label className="d-block">{label}</label>
      {options.map((option, index) => (
        <div className="form-check form-check-inline" key={option.value || index}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          <label className="form-check-label">{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CommonRadioButton;

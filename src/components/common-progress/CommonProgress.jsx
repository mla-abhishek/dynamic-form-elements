import React from 'react';
import './CommonProgress.css';

const CommonProgress = ({ label, name, value, onChange, Symbol }) => {
  return (
    <div className="mb-3 col-md-6">
      <label htmlFor={name} className="form-label">{label}</label>

      <div className="position-relative" style={{ height: '30px' }}>
        {/* Progress Bar */}
        <div className="progress w-100" style={{ height: '15px' }}>
          <div
            className="progress-bar bg-primary text-white d-flex align-items-center justify-content-center"
            role="progressbar"
            style={{ width: `${value}%` }}
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {value}{Symbol}
          </div>
        </div>

        {/* Slider over the bar */}
        <input
          type="range"
          className="range-overlay"
          id={name}
          name={name}
          min="0"
          max="100"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CommonProgress;

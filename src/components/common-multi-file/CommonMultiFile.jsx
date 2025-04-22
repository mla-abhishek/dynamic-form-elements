import React from 'react';

const CommonMultiFile = ({ label, type, name, id, placeholder, onChange, value = [], setValue }) => {
  const handleRemoveFile = (indexToRemove) => {
    const updatedFiles = value.filter((_, index) => index !== indexToRemove);
    setValue(name, updatedFiles);
  };

  return (
    <div className='col-md-6 mb-4'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder || 'Select files'}
        onChange={onChange}
        className='form-control'
        multiple
      />
      {value.length > 0 && (
        <ul className="mt-2 list-group">
          {value.map((file, idx) => (
            <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
              {file.name}
              <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoveFile(idx)}>
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommonMultiFile;

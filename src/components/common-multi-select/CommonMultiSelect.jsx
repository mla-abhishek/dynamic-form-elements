import React from 'react'

const CommonMultiSelect = ({label, name, options=[], onChange, value}) => {
  return (
    <div className='col-md-6 mb-4'>
        <label>{label}</label>
        <select multiple className="form-control" value={value} name={name} onChange={(e) => {
          const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
          onChange({ target: { name, value: selected } });
        }}>
            <option value="" disabled>Select</option>
            {
                options.map((option, index)=><option value={option.value} key={index} >{option.label}</option>)
            }
            </select>
    </div>
  )
}

export default CommonMultiSelect
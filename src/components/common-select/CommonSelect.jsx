import React from 'react'

const CommonSelect = ({name, label, options=[], value, onChange}) => {
  return (
    <>
    <div className="col-md-6 mb-4">
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange} className='form-control'>
        <option value='' disabled>Select</option>
        {
            options.map((option, index)=><option key={option.value} value={index}>
{option.label}</option>)
        }
    </select>
    </div>
    </>
  )
}

export default CommonSelect
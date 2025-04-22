import React, { Fragment } from 'react'

const CommonInput = ({label, type, name, id, value, placeholder, onChange}) => {
  return (
    <div className="col-md-6 mb-4">
        <label>{label}</label>
        <input type={type} name={name} id={id} value={value} placeholder={placeholder || 'Enter your value'} onChange={onChange} className='form-control'/>
    </div>
  )
}

export default CommonInput
import React from 'react'

const CommonTextArea = ({label, name, id, value, placeholder, onChange, rows}) => {
  return (
    <div className='col-md-12 mb-4'>
        <label>{label}</label>
        <textarea name={name} id={id} value={value} placeholder={placeholder || 'Enter your value'} onChange={onChange} className='form-control' rows={rows}></textarea>
    </div>
  )
}

export default CommonTextArea
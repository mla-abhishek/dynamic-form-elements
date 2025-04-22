import React from 'react'

const CommonCheckBox = ({label, value, onChange, name, id}) => {
  return (
    <>
    <div className="form-check col-md-12 mb-4">
    <input type='checkbox' className="form-check-input" id={id} name={name} onChange={onChange} value={label} /><label className="form-check-label">{label}</label>
    </div>
    </>
  )
}

export default CommonCheckBox
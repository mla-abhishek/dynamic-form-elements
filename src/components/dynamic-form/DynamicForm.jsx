import React, { useState } from 'react'
import Form from '../common-form/Form'
import { DynamicFormControls } from '../../configFiles/config'

const initialDynamicData = {
    name:'',
    email:'',
    password: '',
    gender:'',
    tandc:'',
    designation:'',
    weight: 50,
    file:'',
    multifile: [],
    multioptions: [],
    description: ''
}

const DynamicForm = () => {
    const [dynamicData, setDynamicData] = useState(initialDynamicData);

    function onDynamicDataSubmit(event){
        event.preventDefault();
        console.log(dynamicData);
        setDynamicData(initialDynamicData);
    }

    console.log(dynamicData);

  return (
    <div className="container mt-4 mb-4">
      <Form 
    formControls={DynamicFormControls}
    formData={dynamicData}
    setFormData={setDynamicData}
    onSubmitButton = {onDynamicDataSubmit}
    submitButtonText = {'Send'}
    />
    </div>
  )
}

export default DynamicForm
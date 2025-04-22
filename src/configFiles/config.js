export const DynamicFormControls = [
    {
        name: 'name',
        id: 'name',
        placeholder: 'Enter your Name',
        type: 'text',
        label: 'Name',
        componentType: 'input'
    },
    {
        name: 'email',
        id: 'email',
        placeholder: 'Enter your Email',
        type: 'email',
        label: 'Email',
        componentType: 'input'
    },
    {
        name: 'password',
        id: 'password',
        placeholder: 'Enter your Password',
        type: 'password',
        label: 'Password',
        componentType: 'input'
    },
    {
        name: 'designation',
        label: 'Designation',
        componentType: 'select',
        options: [
            {
                value: 'manager', label:'Manager'
            },
            {
                value: 'developer', label: 'Developer'
            },
            {
                value: 'tester', label: 'Tester'
            },
            {
                value: 'grouphead', label: 'Group Head'
            }
        ]
    },
    {
        name: 'weight',
        id: 'weight',
        label: 'Progress',
        ariaValuemin: '1',
        ariaValuemax: '100',
        componentType: 'progress',
        Symbol:'%'
    },
    {
        name: 'file',
        id: 'file',
        placeholder: 'Select the file',
        type: 'file',
        label: 'Files',
        componentType: 'file'
    },
    {
        name: 'multifile',
        id: 'multifile',
        placeholder: 'Select the multiple file',
        type: 'file',
        label: 'Multiple Files',
        componentType: 'multifile',
        multiple: true
    },
    {
        name: 'multioptions',
        label: 'Multiple Select',
        componentType: 'multiselect',
        multiple: true,
        options: [
            {
                value: 'option1', label:'Option1'
            },
            {
                value: 'option2', label: 'Option2'
            },
            {
                value: 'option3', label: 'Option3'
            },
            {
                value: 'option4', label: 'Option4'
            }
        ]
    },
    {
        name: 'description',
        id: 'description',
        placeholder: 'Message...',
        type: 'textarea',
        label: 'Description',
        componentType: 'textarea',
        rows: 5
    },
    {
        name: 'gender',
        label: 'Gender',
        componentType: 'radio',
        options: [
            {
                value: 'male', label:'Male'
            },
            {
                value: 'female', label: 'Female'
            }
        ]
    },
    {
        name: 'tandc',
        id: 'tandc',
        label: 'This is an educational and knowledge initiative.',
        componentType: 'checkbox'
    }
]
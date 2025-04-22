import React from 'react'
import CommonInput from '../common-input-field/CommonInput';
import CommonRadioButton from '../common-radio-button/CommonRadioButton';
import CommonCheckBox from '../common-check-box/CommonCheckBox';
import CommonSelect from '../common-select/CommonSelect';
import CommonProgress from '../common-progress/CommonProgress';
import CommonMultiFile from '../common-multi-file/CommonMultiFile';
import CommonMultiSelect from '../common-multi-select/CommonMultiSelect';
import CommonTextArea from '../common-textarea/CommonTextArea';

const Form = ({ formControls = [], formData, setFormData, onSubmitButton, submitButtonText }) => {

    function renderFormElements(getCurentFormElements, index) {

        let elements = null;
        switch (getCurentFormElements?.componentType) {
            case 'input':
                elements = (
                    <CommonInput key={index}
                        label={getCurentFormElements?.label}
                        id={getCurentFormElements?.id}
                        name={getCurentFormElements?.name}
                        placeholder={getCurentFormElements?.placeholder}
                        type={getCurentFormElements?.type}
                        value={formData[getCurentFormElements?.name]}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                )
                break;
            case 'file':
                elements = (
                    <CommonInput key={index}
                        label={getCurentFormElements?.label}
                        id={getCurentFormElements?.id}
                        name={getCurentFormElements?.name}
                        placeholder={getCurentFormElements?.placeholder}
                        type={getCurentFormElements?.type}
                        value={formData[getCurentFormElements?.name]}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                )
                break;
            case 'radio':
                elements = (
                    <CommonRadioButton key={index}
                        label={getCurentFormElements?.label}
                        name={getCurentFormElements?.name}
                        value={formData[getCurentFormElements?.name]}
                        options={getCurentFormElements?.options}
                        onChange={(e) =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                    />
                )
                break;
            case 'checkbox':
                elements = (
                    <CommonCheckBox key={index}
                        label={getCurentFormElements?.label}
                        id={getCurentFormElements?.id}
                        name={getCurentFormElements?.name}
                        value={formData[getCurentFormElements?.name]}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                )
                break;
            case 'select':
                elements = (
                    <CommonSelect key={index}
                        label={getCurentFormElements?.label}
                        name={getCurentFormElements?.name}
                        options={getCurentFormElements?.options}
                        value={formData[getCurentFormElements?.name]}
                        onChange={(e) =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                    />
                )
                break;
            case 'multiselect':
                elements = (
                    <CommonMultiSelect key={index}
                        label={getCurentFormElements?.label}
                        name={getCurentFormElements?.name}
                        options={getCurentFormElements?.options}
                        value={formData[getCurentFormElements?.name] || []}
                        onChange={(e) =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                    />
                );
                break;

            case 'progress':
                elements = (
                    <CommonProgress key={index}
                        label={getCurentFormElements?.label}
                        name={getCurentFormElements?.name}
                        value={formData[getCurentFormElements?.name]}
                        ariaValuemin={getCurentFormElements?.ariaValuemin}
                        ariaValuemax={getCurentFormElements?.ariaValuemax}
                        Symbol={getCurentFormElements?.Symbol}
                        onChange={(e) =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                    />
                );
                break;
                case 'multifile':
                    elements = (
                      <CommonMultiFile
                        key={index}
                        label={getCurentFormElements?.label}
                        id={getCurentFormElements?.id}
                        name={getCurentFormElements?.name}
                        placeholder={getCurentFormElements?.placeholder}
                        type={getCurentFormElements?.type}
                        value={formData[getCurentFormElements?.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: Array.from(e.target.files)
                          })
                        }
                        setValue={(name, newFiles) =>
                          setFormData({
                            ...formData,
                            [name]: newFiles
                          })
                        }
                      />
                    );
                    break;                  
                case 'textarea':
                elements = (
                    <CommonTextArea key={index}
                        label={getCurentFormElements?.label}
                        id={getCurentFormElements?.id}
                        name={getCurentFormElements?.name}
                        placeholder={getCurentFormElements?.placeholder}
                        type={getCurentFormElements?.type}
                        value={formData[getCurentFormElements?.name]}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        rows={getCurentFormElements?.rows}
                    />
                )
                break;
            default:
                elements = (
                    <CommonInput key={index}
                        label={getCurentFormElements?.label}
                        id={getCurentFormElements?.id}
                        name={getCurentFormElements?.name}
                        placeholder={getCurentFormElements?.placeholder}
                        type={getCurentFormElements?.type}
                        value={formData[getCurentFormElements?.name]}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                )
        }
        return elements;
    }

    return (
        <>
            <form onSubmit={onSubmitButton} className="row">
                {
                    formControls?.length ? formControls.map((curentFormElements, index) => renderFormElements(curentFormElements, index)) : null
                }
                <div style={{ marginTop: "20px" }}>
                    <button type="submit" className="btn btn-primary">{submitButtonText || "Submit"}</button>
                </div>
            </form>
        </>
    )
}

export default Form
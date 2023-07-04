import React, { useState, useEffect } from 'react';
import './Pizza.css';
import * as yup from "yup";
import schema from "./Schema";

export default function Pizza() {
    
    const initialFormValues = {
     name: '',
     size: '',
     pepperoni: false,
     sausage: false,
     mushrooms: false,
     pineapple: false,
     special: ''
    }

    const initialPizza = {
        name: '',
        size: '',
        pepperoni: false,
        sausage: false,
        mushrooms: false,
        pineapple: false,
        special: ''
    }
    
    const initialFormErrors = {
     name: '',
     size: '',
     pepperoni: '',
     sausage: '',
     mushrooms: '',
     pineapple: '',
     special: ''
    }
    
    const initialDisabled = true;
    
    const [pizza, setPizza] = useState([initialPizza]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);



    const onSubmit = evt => {
        evt.preventDefault()
        const newPizza = {
            name: formValues.name.trim(),
            size: formValues.size,
            pepperoni: formValues.pepperoni,
            sausage: formValues.sausage,
            mushrooms: formValues.mushrooms,
            pineapple: formValues.pineapple,
            special: formValues.special.trim()

        }
        setPizza(pizza => [...pizza, newPizza])
        console.log(newPizza)
        console.log(pizza)
    }
    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }
    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])
        
    const changed = (name, value) => {
        validate(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })

    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        changed(name, valueToUse)
    }
    


    return (
        <div>
            <h1>Order Pizza</h1>
            <form id='pizza-form' onSubmit={onSubmit}>
                <label htmlFor='name-input'>Name:
                <input id='name-input' type='text' name='name' value={formValues.name} onChange={onChange} />
                </label>
                <label htmlFor='size-dropdown'>Size:
                <select id='size-dropdown' name='size' onChange={onChange}>
                        <option value=''>- Select a Size -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                </select>
                </label>
                <label htmlFor='pepperoni-checkbox'>pepperoni
                <input id='pepperoni-checkbox' type='checkbox' name='pepperoni' checked={formValues.pepperoni} onChange={onChange} />
                </label>
                <label htmlFor='sausage-checkbox'>sausage
                <input id='sausage-checkbox' type='checkbox' name='sausage' checked={formValues.sausage} onChange={onChange} />
                </label>
                <label htmlFor='mushrooms-checkbox'>Mushrooms
                <input id='mushrooms-checkbox' type='checkbox' name='mushrooms' checked={formValues.mushrooms} onChange={onChange} />
                </label>
                <label htmlFor='pineapple-checkbox'>Pineapple
                <input id='pineapple-checkbox' type='checkbox' name='pineapple' checked={formValues.pineapple} onChange={onChange} />
                </label>
                <label htmlFor='special-text'>Special Instructions:
                <input id='special-text' type='text' name='special' value={formValues.special} onChange={onChange} />
                </label>
                <button id='order-button' disabled={disabled} onClick={onSubmit}>Order</button>
                <div className='errors'>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.size}</div>
                    <div>{formErrors.pepperoni}</div>
                    <div>{formErrors.sausage}</div>
                    <div>{formErrors.mushrooms}</div>
                    <div>{formErrors.pineapple}</div>
                    <div>{formErrors.special}</div>
                </div>

            </form>

        </div>
    )
}
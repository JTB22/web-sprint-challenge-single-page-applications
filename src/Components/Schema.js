import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'name must be at least 2 characters')
        .required('Name is required'),
    size: Yup.string()
        .oneOf(['small', 'medium', 'large'], 'Size is required'),
    pepperoni: Yup.boolean(),
    sausage: Yup.boolean(),
    mushrooms: Yup.boolean(),
    pineapple: Yup.boolean(),
    special: Yup.string()
        .max(100, 'Special Instructions must be less than 100 characters long')
})

export default schema;
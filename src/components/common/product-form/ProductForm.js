import React from 'react';
import {withFormik} from "formik";
import * as Yup from "yup";
import {Button, TextField, Typography} from "@material-ui/core/es/index";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    submitButton: {
        marginTop: '40px'
    }
};

const EditProductForm = withFormik({
    // Transform outer props into form values
    mapPropsToValues: props => ({
        productName: '',
        productPrice: ''
    }),
    validateOnBlur: false,
    // validateOnChange: true,
    validationSchema: Yup.object().shape({
        productName: Yup.string()
            .required('this field is required'),
        productPrice: Yup.string()
            .required('this field is required'),
    }),
    handleSubmit: (
        values,
        {
            props,
            setSubmitting,
            touched,
            setTouched,
            setFieldTouched,
            setErrors /* setValues, setStatus, and other goodies */,
        }
    ) => {
        Object.keys(values).forEach((key) => setFieldTouched({[key]: true}));
        console.log(values);
        props.submitProduct({name: values.productName, price: values.productPrice})
    },
})(ProductForm);

function ProductForm(props) {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        classes
    } = props;
    return (
        <div className={classes.form}>
            <Typography variant="headline" gutterBottom>
                Create product
            </Typography>
            <TextField id='productName'
                       placeholder='Enter the product name'
                       value={values.productName}
                       onBlur={handleBlur}
                       onChange={handleChange}
                       label={'Product name'}
                       helperText={touched.productName? errors.productName : null}
                       error={!!errors.productName && touched.productName}
            />
            <TextField id='productPrice'
                       placeholder='Enter the product price'
                       value={values.productPrice}
                       onBlur={handleBlur}
                       onChange={handleChange}
                       label={'Product price'}
                       helperText={touched.productPrice? errors.productPrice : null}
                       error={!!errors.productPrice && touched.productPrice}
            />
            <Button variant="raised"
                    component="span"
                    color="primary"
                    className={classes.submitButton}
                    onClick={handleSubmit}
            >
                Create
            </Button>
        </div>
    )
}

export default withStyles(styles)(EditProductForm);
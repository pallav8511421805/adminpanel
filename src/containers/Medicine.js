import React from 'react';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik, useFormik } from 'formik';

function Medicine() {
    const handleinsert = (values) => {
        const localstoragedata = JSON.parse(localStorage.getItem("Medicines"));

        if(localstoragedata === null) {
            localStorage.setItem("Medicines", JSON.stringify([values]));
        }else{
            localStorage.setItem("Medicines", JSON.stringify(localstoragedata));
        }
        console.log(localstoragedata);
    }

    let schema = yup.object().shape({
        name: yup.string().required("Please enter your medicine name."),
        quantity: yup.number().required("Please enter your medicine quantity."),
        price: yup.number().required("Please enter your medicine price."),
        expiry: yup.number().required("Please enter your medicine expiry year.")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            quantity: '',
            price:'',
            expiry:'',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleinsert(values);
        },
    });
    let { errors, handleBlur, handleSubmit, handleChange, touched } = formik;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <h1>Medicines</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Medicines
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicines</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>

                                <TextField
                                    margin="dense"
                                    name='name'
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? <p style={{ color: "#1976d2" }}>{errors.name}</p> : null}
                                <TextField
                                    margin="dense"
                                    name='quantity'
                                    label="Quantity"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.quantity && touched.quantity ? <p style={{ color: "#1976d2" }}>{errors.quantity}</p> : null}
                                <TextField
                                    margin="dense"
                                    name='price'
                                    label="Price"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.price && touched.price ? <p style={{ color: "#1976d2" }}>{errors.price}</p> : null}
                                <TextField
                                    margin="dense"
                                    name='expiry'
                                    label="Expiry"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.expiry && touched.expiry ? <p style={{ color: "#1976d2" }}>{errors.expiry}</p> : null}

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>
            </div>
        </>

    );
}

export default Medicine;
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import { useFormik, Form, Formik } from 'formik';

function Patient() {
    const [open, setOpen] = React.useState(false);
    const [data, setdata] = useState([])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const load_data = () => {
        const localsdata = JSON.parse(localStorage.getItem("Patients"));

        if (localsdata !== null) {
            setdata(localsdata)
        }
    }

    function handledata(values) {

        const localsdata = JSON.parse(localStorage.getItem("Patients"));

        const M_id = Math.floor(Math.random() * 100);

        const data = {
            id: M_id,
            ...values
        }

        if (localsdata === null) {
            localStorage.setItem("Patients", JSON.stringify([data]));
        } else {
            localsdata.push(data);
            localStorage.setItem("Patients", JSON.stringify(localsdata));
        }

        load_data()
        formik.resetForm()
        handleClose();
    }

    const columns = [
        { field: 'name', headerName: 'NAME', width: 70 },
        { field: 'age', headerName: 'AGE', width: 130 },
        { field: 'email', headerName: 'EMAIL', width: 130 },
        { field: 'address', headerName: 'ADDRESS', width: 130 },
    ];

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter your name."),
        age: yup.number().required("Please Enter your age.").positive("Please Enter positive number.").integer(),
        email: yup.string().email("Please Enter your valid email.").required("Please Enter your email."),
        address: yup.string().required("Please Enter your address.")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            address: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            handledata(values);
        },
    });

    useEffect(() => {
        load_data()
    }, [])

    let { errors, handleBlur, handleChange, handleSubmit, values, touched } = formik;

    return (
        <>
            <div>
                <h1>Patients</h1>
            </div>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add patients details
                </Button>
                <Dialog fullWidth open={open} onClose={handleClose}>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogTitle>Patients Details</DialogTitle>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    name="name"
                                    label="Enter your full name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? <p style={{ color: "#1976d2" }}>{errors.name}</p> : null}
                                <TextField
                                    margin="dense"
                                    name="email"
                                    type="email"
                                    label="Enter your email"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? <p style={{ color: "#1976d2" }}>{errors.email}</p> : null}
                                <TextField
                                    margin="dense"
                                    name="age"
                                    label="Enter your age"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.age && touched.age ? <p style={{ color: "#1976d2" }}>{errors.age}</p> : null}
                                <TextField
                                    margin="dense"
                                    name="address"
                                    label="Enter your address"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.address && touched.address ? <p style={{ color: "#1976d2" }}>{errors.address}</p> : null}

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>

            </div>
            <div style={{ height: 400, width: '80%',margin:"10px auto"}}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </>
    );
}

export default Patient;
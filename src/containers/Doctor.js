import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { useFormik, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { doctordata } from '../Redux/actions/doctor.action';

function Doctor(props) {
    
    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctor)
    const [dopen, setdOpen] = React.useState(false);
    const [did, setdid] = useState(0)
    const [update, setupdate] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [data, setdata] = useState([])
    const [pdata, setpdata] = useState([])

    const handledClickOpen = () => {
        setdOpen(true);
    };
    const handledClose = () => {
        setdOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleupdate = (values) => {

        const localsdata = JSON.parse(localStorage.getItem("Doctors"));
        const locData = localsdata.map((l) => {
            if (l.id === values.id) {
                return values;
            } else {
                return l;
            }
        })
        localStorage.setItem("Doctors", JSON.stringify(locData));

        load_data()
        formik.resetForm();
        setupdate(false);

    }

    const load_data = () => {
        const localsdata = JSON.parse(localStorage.getItem("Doctors"));

        if (localsdata !== null) {
            setdata(localsdata)
        }
    }

    function handledata(values) {

        const localsdata = JSON.parse(localStorage.getItem("Doctors"));

        const M_id = Math.floor(Math.random() * 100);

        const data = {
            id: M_id,
            ...values
        }

        if (localsdata === null) {
            localStorage.setItem("Doctors", JSON.stringify([data]));
        } else {
            localsdata.push(data);
            localStorage.setItem("Doctors", JSON.stringify(localsdata));
        }


        load_data()
        formik.resetForm()
        handleClose();
    }

    const handledelete = () => {
        const localdata = JSON.parse(localStorage.getItem("Doctors"));
        const filterdata = localdata.filter((v) => v.id !== did);

        localStorage.setItem("Doctors", JSON.stringify(filterdata));

        handledClose()
        setdid(0)
        load_data()
    }

    const handleedit = (params) => {
        handleClickOpen()
        setupdate(true)
        formik.setValues(params.row)
    }


    const columns = [
        { field: 'name', headerName: 'NAME', width: 70 },
        { field: 'age', headerName: 'AGE', width: 130 },
        { field: 'email', headerName: 'EMAIL', width: 130 },
        { field: 'address', headerName: 'ADDRESS', width: 130 },
        {
            field: 'action', headerName: 'ACTION', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" size="lg" color='primary' onClick={() => { handledClickOpen(); setdid(params.id) }}>
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="edit" size='lg' color='primary' onClick={() => { handleedit(params) }}>
                        <EditIcon fontSize="inherit" />
                    </IconButton>
                </>
            )
        },
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
            if (update) {
                handleupdate(values);
            } else {
                handledata(values);
            }
        },
    });

    const handledoctor = (p_val) => {
        const localdata = JSON.parse(localStorage.getItem("Doctors"));
        const fpdata = localdata.filter((p) => (
            p.name.toLowerCase().includes(p_val) ||
            p.age.toString().includes(p_val) ||
            p.email.toString().includes(p_val) ||
            p.address.toString().includes(p_val)
        ))
        setpdata(fpdata)
    }
    const pfdata = pdata.length > 0 ? pdata : data;

    useEffect(() => {
        dispatch(doctordata())
        // load_data()
    }, [])

    let { errors, handleBlur, handleChange, handleSubmit, values, touched } = formik;

    return (
        <>
                            <div>
                                <h1>Doctors</h1>
                            </div>
                            <div>
                                <Button variant="outlined" onClick={handleClickOpen}>
                                    Add doctor details
                                </Button>
                                <div style={{ textAlign: "center" }}>
                                    <TextField style={{ width: "80%" }}
                                        margin="dense"
                                        name='Search'
                                        label="Search doctors data"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={(e) => handledoctor(e.target.value)}
                                    />
                                </div>
                                <Dialog fullWidth open={open} onClose={handleClose}>
                                    <Formik values={formik}>
                                        <Form onSubmit={handleSubmit}>
                                            <DialogTitle>Doctor details</DialogTitle>
                                            <DialogContent>
                                                <TextField
                                                    value={values.name}
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
                                                    value={values.email}
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
                                                    value={values.age}
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
                                                    value={values.address}
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
                                                {
                                                    update ? <Button type='submit' onClick={handleClose}>Update</Button> : <Button type='submit'>Submit</Button>
                                                }
                                            </DialogActions>
                                        </Form>
                                    </Formik>
                                </Dialog>

                                <Dialog
                                    open={dopen}
                                    onClose={handledClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Are you sure to delete?"}
                                    </DialogTitle>
                                    <DialogActions>
                                        <Button onClick={handledClose}>No</Button>
                                        <Button onClick={handledelete} autoFocus>
                                            Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                            </div>
                            <div style={{ height: 400, width: '80%', margin: "10px auto" }}>
                                <DataGrid
                                    rows={doctors.doctor}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </div>
                        </>
    );
}
// Doctors

export default Doctor;
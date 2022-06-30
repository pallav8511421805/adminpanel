import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function Medicine() {
    const [data, setdata] = useState([]);
    const [dopen, setdOpen] = React.useState(false);
    const [did,setdid] = useState(0);

  const handledClickOpen = () => {
    setdOpen(true);
  };

  const handledClose = () => {
    setdOpen(false);
  };

    const loaddata = () => {
        const localdata = JSON.parse(localStorage.getItem("Medicines"));
        setdata(localdata)
    }

    const handleinsert = (values) => {

        const localdata = JSON.parse(localStorage.getItem("Medicines"));

        const m_id = Math.floor(Math.random() * 100);

        const data = {
            id: m_id,
            ...values
        }
        if (localdata === null) {
            localStorage.setItem("Medicines", JSON.stringify([data]));
        } else {
            localdata.push(data);
            localStorage.setItem("Medicines", JSON.stringify(localdata));
        }

        if(localdata !== null){
            setdata(localdata)
        }

        handleClose()
        formik.resetForm()
        loaddata()
    }

    let schema = yup.object().shape({
        name: yup.string().required("Please enter your medicine name."),
        quantity: yup.number().positive().integer().required("Please enter your medicine quantity."),
        price: yup.number().positive().integer().required("Please enter your medicine price."),
        expiry: yup.number().positive().integer().required("Please enter your medicine expiry year.")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            quantity: '',
            price: '',
            expiry: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleinsert(values);
        },
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const handleedit = ()=>{
    //     // const localdata = JSON.parse(localStorage.getItem("Medicines"));
    // }

    const handledelete = (params) => {
        const localdata = JSON.parse(localStorage.getItem("Medicines"));
        const filterdata = localdata.filter((v)=> console.log(v.id !== params.id));
        
        localStorage.setItem("Medicines", JSON.stringify(filterdata));
        
        handledClose()
        setdid(0)
        loaddata()
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 130,
            renderCell: (params) => (
                <>
            <IconButton aria-label="delete" size="lg" style={{color:'red'}}>
            <DeleteIcon fontSize="inherit" onClick={()=>{handledClickOpen();setdid(params.id)}} />
            </IconButton>
            {/* <IconButton aria-label="edit" size='lg' color='primary'>
            <EditIcon fontSize="inherit" onClick={handleClickOpen}/>
          </IconButton> */}
          </>
            )
        },
    ];

    let { errors, handleBlur, handleSubmit, handleChange, touched } = formik;

    useEffect(()=>{
        loaddata()
    },[])
    return (
        <>
            <h1>Medicines</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Medicines
                </Button>
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
          <Button onClick={handledelete}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
                <Dialog fullWidth open={open} onClose={handleClose}>
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
            <div style={{ height: 400, width: '80%', margin: '25px auto 0' }}>
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

export default Medicine;
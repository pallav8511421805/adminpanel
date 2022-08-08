import * as React from 'react';
import { useState } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

function Usecallbackexample(props) {

    const [Theme, setTheme] = useState(false)
    const themstyle = {
        backgroundColor: Theme ? '#000' : '#fff',
        width: '150px',
        height: '150px',
        borderRadius: '15px',
        margin: '0 0 10px'
    }
    const themstylebtn = {
        backgroundColor: '#000',
        color: '#fff',
        width: '50px',
        height: '50px',
        lineHeight: '0px',
        textAlign: 'center',
        borderRadius: '100%',
        margin: '0 0 10px',
        border: 'none'
    }

    const textdata = {
        text: Theme ? DarkModeOutlinedIcon : LightModeOutlinedIcon
    }
    const themeinput = {
        borderBottom:'2px solid black',
        borderRight:'none',
        borderTop:'none',
        borderLeft:'none',
        fontSize:'15px',
        margin:'0 0 10px'
    }
    return (
        <>
            <div>
                <input style={themeinput} placeholder='Please Enter any number' />
            </div>
            <div style={themstyle}>
            </div>
            <button style={themstylebtn} onClick={() => setTheme(!Theme)}>{<textdata.text />}</button>
        </>
    );
}

export default Usecallbackexample;
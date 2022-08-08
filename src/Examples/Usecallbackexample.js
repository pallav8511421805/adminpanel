import * as React from 'react';
import { useState } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

function Usecallbackexample(props) {
    
    const [Theme,setTheme] = useState(false)
    const themstyle = {
        backgroundColor: Theme ? '#000' : '#fff',
        color: Theme ? '#fff' :'#000',
        width:'150px',
        height:'150px',
        borderRadius:'15px',
        margin:'0 0 10px'
    }
    const themstylebtn = {
        backgroundColor:'#000',
        color:'#fff', 
        width:'50px',
        height:'50px',
        lineHeight:'0px',
        textAlign:'center',
        borderRadius:'100%',
        margin:'0 0 10px',
        border:'none'
    }
    const textdata = {
        text : Theme ? DarkModeOutlinedIcon : LightModeOutlinedIcon
    }
    return (
        <>
        <div style={themstyle}></div>
        <button style={themstylebtn} onClick={() => setTheme(!Theme)}>{<textdata.text/>}</button>
        </>
    );
}

export default Usecallbackexample;
import * as React from 'react';
import { useState } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Listitem from './Listitem';

function Usecallbackexample(props) {

    const [Theme, setTheme] = useState(false)
    const [Number, setNumber] = useState(0)
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
    const getitem = useCallback(
        (inc) => {
          return [Number,Number+inc,Number+inc+inc]
        },
        [getitem],
      );
    return (
        <>
            <div>
                <input style={themeinput} onChange={(e)=>setNumber(e.target.value)} placeholder='Please Enter any number' />
            </div>
            <div style={themstyle}>
                <Listitem getitem = {getitem}/>
            </div>
            <button style={themstylebtn} onClick={() => setTheme(!Theme)}>{<textdata.text />}</button>
        </>
    );
}

export default Usecallbackexample;
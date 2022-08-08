import * as React from 'react';
import { useState } from 'react';

function Usecallbackexample(props) {
    
    const [Theme,setTheme] = useState(false)
    const themstyle = {
        backgroundColor: Theme ? 'red' : 'pink',
        color: Theme ? '#fff' :'#000',
        width:'50px',
        height:'100px'
    }
    console.log(Theme)
    return (
        <>
        <div style={themstyle}></div>
        <button onClick={() => setTheme(!Theme)}>theme</button>
        </>
    );
}

export default Usecallbackexample;
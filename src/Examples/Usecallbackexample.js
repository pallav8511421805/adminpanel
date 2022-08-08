import * as React from 'react';
import { useState } from 'react';

function Usecallbackexample(props) {
    
    const [theme,settheme] = useState(false)
    const themstyle = {
        backgroundColor: theme ? '#fff' : '#000',
        color:theme ? '#000' :'#fff'
    }

    return (
        <>
        <button style={themstyle} onClick={()=>{settheme(!true)}}>theme</button>
        </>
    );
}

export default Usecallbackexample;
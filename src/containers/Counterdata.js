import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Increment,Decrement } from '../Redux/actions/counter.action';

function Counterdata(props) {
    const dispatch = useDispatch();
    const D = useSelector(state => state.counter);

    const handledecrement = ()=>{
        dispatch(Decrement())
    }

    const handleincrement = ()=>{
        dispatch(Increment())
    }

    return (
        <>
        <div><p style={{color:"black",width:"50px",height:"50px",border:"5px solid cornflowerblue",textAlign:"center",borderRadius:10,lineHeight:"45px"}}>{D.counter}</p></div>
        <div style={{display:"flex",flexWrap:'wrap'}}>
            <button style={{backgroundColor:"#E74C3C",width:"150px",padding:'15px',border:'none',borderRadius:'10px',fontSize:'17px',color:'white'}} onClick ={()=>handledecrement()}>Decrement</button>
            <button style={{backgroundColor:"#2ECC71",width:"150px",padding:'15px',border:'none',borderRadius:'10px',fontSize:'17px',color:'white'}} onClick ={()=>handleincrement()}>Increment</button>
        </div>
        </>
    );
}

export default Counterdata;
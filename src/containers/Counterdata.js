import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Increment,Decrement } from '../Redux/actions/counter.action';

function Counterdata(props) {
    const dispatch = useDispatch();
    const c = useSelector(state => state.counte);

    const handledecrement = ()=>{
        dispatch(Increment())
    }

    const handleincrement = ()=>{
        dispatch(Decrement())
    }

    return (
        <div style={{display:"flex",flexWrap:'wrap'}}>
            <button style={{backgroundColor:"#E74C3C",width:"150px",padding:'15px',border:'none',borderRadius:'10px',fontSize:'17px',color:'white'}} onClick ={()=>handledecrement()}>Decrement</button>
            <h1>{c.counter}</h1>
            <button style={{backgroundColor:"#2ECC71",width:"150px",padding:'15px',border:'none',borderRadius:'10px',fontSize:'17px',color:'white'}} onClick ={()=>handleincrement()}>Increment</button>
        </div>
    );
}

export default Counterdata;
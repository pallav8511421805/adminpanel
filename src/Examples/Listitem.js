import React, { useEffect, useState } from 'react';

function Listitem({getitem}) {
const [item,setitem] = useState([])
useEffect(()=>{
setitem(getitem(5))
},[getitem])
    return (
        <div>
            {
                item.map((i)=>{
                    return(
                        <p>{i}</p>
                    )
                })
            }
        </div>
    );
}

export default Listitem;
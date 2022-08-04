import React, { useEffect } from 'react';

function PromiseExmple(props) {

    // 1. syncronize: one after another, in order  
    // output: one undefined three

    // 2. Asyncronize: allow other process to run, not in order  
    // output: one promises<pending> three (axios without async await)

    // 3. async awit: wait for asyncronize call  
    // output: one two (wait for 3 sec) three (axios with async await)

    // promise is asyncronize
    // callback function is called after working some task
    // promise.all resolve all


    // 1. syncronize , in order

    // const one = () =>{
    //     return 'One'
    // }

    // const two = () =>{
    //     return 'Two'
    // }

    // const three = () =>{
    //     return 'Three'
    // }

    // const All = () =>{
    //     const onedata = one()
    //     const twodata = two()
    //     const threedata = three()

    //     console.log('1:'+onedata)
    //     console.log('2:'+twodata)
    //     console.log('3:'+threedata)
    // }

    // output : One Two Three

    // 2. asyncronize , not in order

    const one = () =>{
        return 'One'
    }

    const two = () =>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('Two')
            }, 2000);
        })
    }

    const three = () =>{
        return 'Three'
    }

    const All = async () =>{
        const onedata = one()
        const twodata = await two()
        const threedata = three()

        console.log('1:'+onedata)
        console.log('2:'+twodata)
        console.log('3:'+threedata)
    }

    // output: one two (wait for 2 sec) three (axios with async await)

    useEffect(()=>{
        All()
    },[])

    return (
        <h1>Promise</h1>
    );
}

export default PromiseExmple;
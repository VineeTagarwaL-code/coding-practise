import {useState} from 'react'

export default function CounterFunction(){
    const [ count , setCount] = useState(0)

    function incrementCount(){

        setCount(count+1)
    }

    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={incrementCount}>increase</button>
        </>
    )
}
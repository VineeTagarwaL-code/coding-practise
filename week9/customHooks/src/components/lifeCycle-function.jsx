import  { useEffect , useState } from 'react'

function MyApp(){
    const[render , setRender ] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
              setRender(false)
        }, 10000)
    },[])

    return(
        <>
        {
            render ? "hi":"hello"
        }
        </>
    )
}

export { MyApp };

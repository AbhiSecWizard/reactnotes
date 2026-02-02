import { useState } from "react"
const Prac = ()=>{
const [check,setCheck] = useState(0)



    return (
       <div>
            <h1 className="" onClick={() => setCheck(prev => prev + 1)}>{check}</h1>
       </div>
    )
}
export default Prac
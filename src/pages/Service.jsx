import React, { useState } from 'react'
import { Card } from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, IncrementByAmount } from '../../redux/features/counterSlice'
const Service = () => {
//  const dispatch = useDispatch()
//  const count = useSelector((state)=>state.counter.value)
//  const [num,setNum]=useState(0)
//   return (
//     <div className='flex flex-col h-screen w-full bg-black text-white'>
//       <h1 className='font-bold text-2xl text-white'>This is Service Page</h1>
//       <div className='flex flex-col justify-center items-center h-screen w-screen'>
//                   <span className='w-4xl h-10 text-4xl bg-amber-300 text-center'>{count}</span>
//       <div className='flex  gap-3 flex-col border border-amber-600 '>
//          <button className='bg-red-300 hover:bg-red-700 cursor-pointer transition duration-300 px-4 py-3' onClick={()=>{
//             dispatch(increment())
//        }}>
//              increament 
//        </button>
//         <button className="bg-red-300 hover:bg-red-700 cursor-pointer transition duration-300 px-4 py-3" onClick={()=>{
//                dispatch(decrement())
//        }}>
//             decreament
//        </button>  
//          <button className="bg-red-300 hover:bg-red-700 cursor-pointer transition duration-300 px-4 py-3" onClick={()=>{
//                dispatch(IncrementByAmount(Number(num)))
//        }}>
//             Increament By Amount 
//        </button> 
//        <input type="number" 
//        value={num}
//        onChange={(e)=>{
//          setNum(e.target.value)
//          console.log(e.target.value)
//        }}
//        />   
//       </div>
//       </div>
//         <Card/>
//     </div>
//   )
const handleClick = (event) => {
    console.log("Synthetic Event:", event);
    console.log("Native Event:", event.nativeEvent);
  };

return (
<div>
       <button onClick={handleClick} className='text-8xl'>Click me</button>
</div>
)
}

export default Service

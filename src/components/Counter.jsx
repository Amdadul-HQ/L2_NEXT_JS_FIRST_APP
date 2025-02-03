'use client'

import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0)
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex items-center gap-x-5">
                <button className="bg-green-400 px-4 py-3 rounded-xl" onClick={()=>setCount(count+1)}>+</button>
                <p className="px-4 py-4">{count}</p>
                <button className="bg-red-400 px-4 py-3 rounded-xl" onClick={()=>setCount(count-1)}>-</button>
            </div>
        </div>
    );
};

export default Counter;
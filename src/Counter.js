import { useState } from "react"

export default function Appp() {
    
    
    return (
        <div>
            <Counter />
        </div>
    )
}

function Counter() {

    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);
    const [range, setRange] = useState(1)
    

    const date = new Date();
    date.setDate(date.getDate()+counter);

    function handleU() {
        setStep(step=>step+1)
    }
    function handleD() {
        setStep(step=>step-1)
    }

    function handleUp () {
        setCounter(counter+range)
    }
    function handleDown() {
        setCounter(counter=>counter-range)
    }
    function reset() {
        setCounter(0)
        setRange(1)
    }
    

    return (
        <div>
            <div>
                <input type="range" min="0" max="10" value={range} onChange={(e)=>setRange(Number(e.target.value))} />
                {/* <button onClick={handleD}>-</button>
                <span>Step: {step}</span>
            <   button onClick={handleU}>+</button> */}
             </div>
            <div>
                <button onClick={handleDown}>-</button>
                {/* <span>Counter: {counter}</span> */}
                <input type="text" value={counter==0? "":counter} placeholder="0" onChange={(e)=>setCounter(Number(e.target.value))}/>
                <button onClick={handleUp}>+</button>
            </div>
            <p>
                {(counter===0)?"Today is ": (counter>=1)? `${counter} day(s) from now is `:`${Math.abs(counter)} day(s) ago was `}
                {date.toDateString()}
            </p>
            <div>
                {counter==0 && range==1? null: 
                    <button onClick={reset}>Reset</button>
                }
            </div>
           
        </div>
    )
}
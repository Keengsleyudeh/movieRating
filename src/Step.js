import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App() {
  return (
    <div>
      <Step />
      {/* <StepMessage step={1}>
        <p>Pass in component</p>
        <p>👌</p>
      </StepMessage> */}
    </div>
  )
}

function Step() {

  const [step, setStep]= useState(1);
  const [isOpen, setClose] = useState(true)

  function handleNext() {
    if (step < 3) setStep(step => step+1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <>
      <button className="close" onClick={() => setClose(!isOpen)}>&times;</button>
      {isOpen && (
      <div className="steps">
      <div className="numbers">
        <div className={`${step>=1? "active": " " }`}>1</div>
        <div className={`${step>=2? "active": " " }`}>2</div>
        <div className={`${step>=3? "active": " " }`}>3</div>
      </div>
      <StepMessage step={step} messages={messages}>
        {messages[step-1]}

        <p className="buttons">
        <Button 
        bgColor= "#cbc3e3"
        textColor='#fff'
        onClick={()=>alert(`Learn how to ${messages[step-1]}`)}>
        Learn how
        </Button>
        </p>
      </StepMessage>
      <div className="buttons">
        <Button 
        bgColor= "#7950f2"
        textColor='#fff'
        onClick={()=>handlePrevious()}>
          <span>👈</span>Previous
        </Button>

        <Button 
        bgColor= "#7950f2"
        textColor='#fff'
        onClick={()=>handleNext()}>
          Next<span>👉</span>
        </Button>
        
      </div>
    </div>
      )
      }

      
    </>
    
  )
}
function Button({textColor, bgColor, onClick, children}) {
  return (

  
  <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>
    {children}
  </button>
  )

}

function StepMessage({step, children}) {
  return (
    <p className="message">
      <h3>Step{step} </h3>
      {children}
    </p>
  
  )
}


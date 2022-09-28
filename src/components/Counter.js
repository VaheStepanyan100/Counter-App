import { useEffect, useState } from "react";

export default function Counter() {
    const initialCount = () => Number(window.localStorage.getItem('storCount')) || 0;
    const initialMax = () => window.localStorage.getItem('storMax') || 30;
    const initialMin = () => window.localStorage.getItem('storMin') || 15;
    const initialStep = () => Number(window.localStorage.getItem('storStep')) || 3;
    const [countNum, setCountNum] = useState(initialCount); 
    const [max, setMax] = useState(initialMax);
    const [min, setMin] = useState(initialMin);
    const [step, setStep] = useState(initialStep);

    useEffect(() => {
        window.localStorage.setItem('storCount', countNum);
    }, [countNum]);

    useEffect(() => {
        window.localStorage.setItem('storMax', max);
    }, [max]);

    useEffect(() => {
        window.localStorage.setItem('storMin', min);
    }, [min]);

    useEffect(() => {
        window.localStorage.setItem('storStep', step);
    }, [step]);

    function increase() {
        let result

        if (countNum + step > max) {
            result = max;
            setCountNum(result);
        } else {
            setCountNum(c => c + step);
        }
    }

    function decrease() {
        let result;
        
        if (countNum - step < min) {
            result = min;
            setCountNum(result);
        } else {
            setCountNum((c => c - step));
        }
    }

    function reset() {
        setCountNum(0);
    }

    function handleMaxChange(e) {
        setMax(Number(e.target.value));
    }

    function handleMinChange(e) {
        setMin(Number(e.target.value));
    }

    function handleStepChange(e) {
        setStep(Number(e.target.value));
    }

    return (
        <>
          <label htmlFor="max">Max:</label>
          <input id="max" type="number" value={max} onChange={handleMaxChange}/>
          <br />
          <label htmlFor="min">Min:</label>
          <input id="min" type="number" value={min} onChange={handleMinChange} />
          <br />
          <label htmlFor="step">Step:</label>
          <input id="step" type="number" value={step} onChange={handleStepChange} />
          <h1 className="counter">{countNum}</h1>
          <button className="increaseBtn" onClick={increase}>Increase</button>
          <button className="decreaseBtn" onClick={decrease} disabled={countNum === 0}>Decrease</button>
          <button className="resetBtn"  onClick={reset} disabled={countNum === 0}>Reset</button>
        </>
    );
}
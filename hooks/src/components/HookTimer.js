import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000);

        return () => {
            clearInterval(intervalRef.current)
        }
    },[])

    return (
        <>
            <h1>Hook Timer - {timer}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop Hook Timer</button>
        </>
    )
}

export default HookTimer
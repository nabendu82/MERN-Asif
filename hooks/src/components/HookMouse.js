import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('logMousePosition hook based')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('Hook useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Hook component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    return (
        <>
            <h1>Hook X - {x}, Y - {y}</h1>
        </>
    )
}

export default HookMouse
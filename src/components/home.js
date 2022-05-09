import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>home</h1>
            <button onClick={() => { navigate("/bank") }}>Bank</button>
        </div>
    )
}

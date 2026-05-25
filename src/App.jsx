import React, { useState } from 'react'
import { BTShoes } from './BTShoes'

function App() {
    const [number, setNumber] = useState(0)

    const handleIncrease = () => {
        setNumber((prev) => prev + 1)
    }

    return (
        <div className="p-5">
            {/* Bộ đếm số lượng Demo */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-5">{number}</h1>
                <div className="flex gap-3">
                    <button
                        className="bg-blue-300 hover:bg-blue-500 rounded px-3 py-2 text-white font-bold"
                        onClick={handleIncrease}
                    >
                        +
                    </button>
                    <button
                        className="bg-red-300 hover:bg-red-500 rounded px-3 py-2 text-white font-bold"
                        onClick={() => setNumber(number - 1)}
                    >
                        -
                    </button>
                    <button
                        className="bg-green-400 hover:bg-green-700 rounded px-3 py-2 text-white"
                        onClick={() => setNumber(0)}
                    >
                        Reset
                    </button>
                </div>
            </div>

            <hr className="my-10 border-black/10" />

            {/* Dự án Shoes Shop chính */}
            <BTShoes />
        </div>
    )
}

export default App
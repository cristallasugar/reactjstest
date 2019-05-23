import React, {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    //อันนี้เรียกว่า Inner Function
    function handleUpdateCounter() {
        setCounter(counter + 1)
    }
    //อันนี้เรียกว่า Inner Function

    function handleUpdateCounterMinus() {
        setCounter(counter - 1)
    }

    function handleResetCounter() {
        setCounter(0)
    }

    return <div>
        <p>Counter: {counter}</p>
        <button onClick={handleUpdateCounter}>+</button>
        <button onClick={handleUpdateCounterMinus}>-</button>
        <button onClick={handleResetCounter}>Reset</button>

        {/* แบบนี้ไม่แนะนำให้ใช้ เพราะว่า เมื่อมีการโหลดหน้าเพจ จะมีการทำงานทันที ทำให้ error */}
        {/* <button onClick={setCounter(counter + 1)}>+1</button> */}
        {/* แบบนี้ไม่แนะนำให้ใช้ เพราะว่า เมื่อมีการโหลดหน้าเพจ จะมีการทำงานทันที ทำให้ error */}
        
        {/* แบบนี้เรียกว่า Anonymous Function จะทำงานเมื่อมีการคลิกปุ่มเท่านั้น */}
        {/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
        {/* แบบนี้เรียกว่า Anonymous Function จะทำงานเมื่อมีการคลิกปุ่มเท่านั้น */}

    </div>
}

export default Counter
export const foo = 20

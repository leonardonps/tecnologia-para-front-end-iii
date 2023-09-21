import React from 'react'

const HookContador = () => {
    
    const [count, setCount] = useState(1);

    return (
        <div>
            <h1>Contador com useState</h1>
            <button onClick={() => setCount(count+1)}
            >Incrementador contador</button>
            <p>O contador está em: {count}</p>
        </div>
    )
}

export default HookContador
import { useState, createContext } from 'react'

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
    const [count, setCount] = useState(1)
    return (
        <CharacterContext.Provider value={[count, setCount]}>
            {props.children}
        </CharacterContext.Provider>
    )
}

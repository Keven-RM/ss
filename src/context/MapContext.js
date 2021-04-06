import React, { useState, createContext } from 'react'

export const PositionContext = createContext();

export const PositionProvider = props => {
    const [position, setPosition] = useState(null)
    
    return(
        <PositionContext.Provider value={[position, setPosition]}>
            {props.children}
        </PositionContext.Provider>
    )
}
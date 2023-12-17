import React, { PropsWithChildren, useState } from 'react'

export type RouterContextState = {
    state: CurrentState,
    setState: React.Dispatch<React.SetStateAction<CurrentState>> 
}

export type CurrentState = 'mainPage' | 'customPage'

export const RouterContext = React.createContext<RouterContextState>({
    state: 'mainPage',
    setState: () => {throw new Error('context not defined')}
})

export const RouterContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<CurrentState>('mainPage')
    
    return <RouterContext.Provider
        value={{
            state,
            setState
        }}>
        {children}
    </RouterContext.Provider>
}
    
import React, { PropsWithChildren, useState } from 'react'
import { CurrentState, RouterContextState } from './RouterContext'


export type CustomPageContextState = {
    isSaleActive: boolean,
    setSaleActive: React.Dispatch<React.SetStateAction<boolean>>
}
export const CustomPageContext = React.createContext<CustomPageContextState>({
    isSaleActive: false,
    setSaleActive: () => {throw new Error('context not defined')}
})

export const CustomPageContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<boolean>(false)

    return <CustomPageContext.Provider
        value={{
            isSaleActive: state,
            setSaleActive: setState 
        }}>
        {children}
    </CustomPageContext.Provider>
}

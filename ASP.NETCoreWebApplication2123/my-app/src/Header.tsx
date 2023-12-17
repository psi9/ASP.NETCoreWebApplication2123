import React, { useContext } from 'react'
import { RouterContext } from './RouterContext'

export const Header: React.FC = () => {
    const {setState} = useContext(RouterContext)
    return <>
        <div onClick={() => setState('mainPage')}>to main page</div>
        <div onClick={() => setState('customPage')}>to custom page</div>
    </>
}

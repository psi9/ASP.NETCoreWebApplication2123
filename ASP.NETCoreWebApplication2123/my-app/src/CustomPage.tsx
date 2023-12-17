import React, { useContext } from 'react'
import { CustomPageContext } from './CustomPageContext'

export const CustomPage: React.FC = () => {
    const {isSaleActive, setSaleActive} = useContext(CustomPageContext)
    return (<>
        <div>CustomPage</div>
        <div>содержимое custom page</div>

        {!isSaleActive && <div onClick={() => setSaleActive(!isSaleActive)}>change sale active</div>}
        
        {isSaleActive && <div>SALE ACTIVE YES</div>}
    </>)
}
import React, { useContext } from 'react'
import './App.css';
import { CurrentState, RouterContext } from './RouterContext'
import { MainPage } from './MainPage'
import { CustomPage } from './CustomPage'
import { Header } from './Header'
import { CustomPageContextProvider } from './CustomPageContext'


const renderSwitch = (state: CurrentState) => {
    switch (state) {
        case 'mainPage': {return <MainPage/>}
        case 'customPage': {
            return (
                <CustomPageContextProvider>
                    <CustomPage/>
                </CustomPageContextProvider>)
        }
    
        default: {return <div/>}
    }
}

function App() {
    const { state } = useContext(RouterContext)
    const page = renderSwitch(state)
    return  <>
        <Header/>
        {page}
        </>
    
}

export default App;

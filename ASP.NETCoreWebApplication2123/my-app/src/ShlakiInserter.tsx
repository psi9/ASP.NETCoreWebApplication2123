import React, {ChangeEvent, useState} from 'react'
import {ZalupaPresenter} from './ZalupaPresenter'
import {ShlakiRequest} from './objects/ShlakiRequest'

export const ShlakiInserter: React.FC = () => {
    const [list, setList] = useState<string[]>()
    const [type, setType] = useState<number>()
    const [name, setName] = useState<string>()

    const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setType(parseInt(e.target.value))
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const addAsync = async () => { 
        const req = new ShlakiRequest(type, name)
        try {
            const body = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(req),
            }
            await fetch("http://localhost:5000/shlaki/add", body)
        }
        catch (error) {
            console.log(error)
        }
    }

    const refreshAsync = async () => {
        const response = await fetch('http://localhost:5000/shlaki/get?'
            + new URLSearchParams({type: (type?.toString()) ?? ''}))
        const zalupasList = await response.json() as string[]
        setList(zalupasList)
    }

    const handleButtonClick = async (event: React.FormEvent<HTMLButtonElement>) => {
        try {
            event.preventDefault()
            await addAsync()
            await refreshAsync()
        }
        catch (error){
            console.log(error)
        }
    }

    return <div>
        <input id="type-input" onChange={handleTypeChange}/>
        <input id="name-input" onChange={handleNameChange}/>
        <button onClick={handleButtonClick}>send</button>
        <ZalupaPresenter zalupas={list}/>
    </div>
}
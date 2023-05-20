import React from 'react'

interface IProps {
    zalupas: string[] | undefined
}

export const ZalupaPresenter: React.FC<IProps> = ({zalupas}) => {
    const spans = zalupas?.map(z => <div>{z}</div>) ?? undefined
    return <>
        {spans}
    </>
}
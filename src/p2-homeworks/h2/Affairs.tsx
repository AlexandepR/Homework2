import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './HW2.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    const useClass = (filter: FilterType) => {
        if (props.filter === filter ) {
           return s.putButton
        }
        return s.button
    }

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll}className={useClass('all')}>All</button>
            <button onClick={setHigh}className={useClass('high')}>High</button>
            <button onClick={setMiddle}className={useClass('middle')}>Middle</button>
            <button onClick={setLow}className={useClass('low')}>Low</button>
        </div>
    )
}

export default Affairs

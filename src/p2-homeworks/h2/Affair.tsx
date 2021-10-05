import React from 'react'
import {AffairType} from "./HW2";
import s from './HW2.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {return props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.nameN}>
            {props.affair.name}
            <button onClick={deleteCallback}className={s.buttonX}>X</button>
        </div>
    )
}

export default Affair

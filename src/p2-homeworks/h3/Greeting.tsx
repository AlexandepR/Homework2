import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onOff: boolean
    enterButton: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onOff, enterButton} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={enterButton}
                className={s.inputClass}/>
            <button onClick={addUser} disabled={onOff} className={s.buttonAddUser}>add</button>
            <span className={s.counterUser}>{totalUsers}</span>
            <div>
                <span>{error}</span>
            </div>
        </div>
    )
}

export default Greeting

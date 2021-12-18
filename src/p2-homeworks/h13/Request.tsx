import React, {useEffect, useState} from 'react'
import {Button} from "@mui/material";
import axios from "axios";

export function Request2() {
    const [checkbox, setCheckbox] = useState<boolean>(false)
    const [state, setState] = useState<any>()

    const checkValue = () => {
    debugger
            axios.post('https://neko-cafe-back.herokuapp.com/auth/test',  {success: checkbox})
                .then((res) => {
                    setState(res.data.errorText)
                })
            setCheckbox(!checkbox)
    }
    return (
        <div>
            <Button
                variant="contained"
                size="small"
                color={'info'}
                onClick={checkValue}
            >hi</Button>
            <input
                type='checkbox'
                checked={checkbox}
            />
            <div> {JSON.stringify(state)}</div>
        </div>
    )
}
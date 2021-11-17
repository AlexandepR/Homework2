import React, {ChangeEventHandler} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {darkThemeAC, initStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    debugger
    const state = useSelector<AppStoreType,initStateType>(state => state.themeReducer)
    const dispatch = useDispatch()
    const theme = state.value; // useSelector


    const onChangeCallback = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(darkThemeAC(e.currentTarget.value))
        // e.target.value === 'dark' ? dispatch(darkThemeAC('THEME'))
        console.log(e.target.value)
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12

            </span>
            <span>dark</span>
            <input type='radio'
                   name='change'
                   value='DARK'
                   onChange={onChangeCallback}
            />
            <span>light</span>
            <input type='radio'
                   name='change'
                   value='LIGHT'
                   onChange={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;

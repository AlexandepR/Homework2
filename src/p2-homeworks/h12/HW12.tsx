import React, {ChangeEventHandler} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {darkThemeAC, initStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    debugger
    const state = useSelector<AppStoreType, initStateType>(state => state.themeReducer)
    const dispatch = useDispatch()
    const theme = state.value; // useSelector

    const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(darkThemeAC(e.currentTarget.value))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.block}>
            <div>
                <span>dark</span>
                <input type='radio'
                       name='change'
                       value='dark'
                       onChange={onChangeCallback}
                />
            </div>
            <div>
                <span>light</span>
                <input type='radio'
                       name='change'
                       value='light'
                       onChange={onChangeCallback}
                />
            </div>
            <div>
                <span>red</span>
                <input type='radio'
                       name='change'
                       value='red'
                       onChange={onChangeCallback}
                />
            </div>
            <span>red-text</span>
            <input type='radio'
                   name='change'
                   value='red-text'
                   onChange={onChangeCallback}
            />
            <div>
            <span>some</span>
            <input type='radio'
                   name='change'
                   value='some'
                   onChange={onChangeCallback}
            />
                </div>
            <span>some-text</span>
            <input type='radio'
                   name='change'
                   value='some-text'
                   onChange={onChangeCallback}
            />
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;

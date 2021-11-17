import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = {
    setValue1: (value: any) => void
    setValue2: (value: any) => void
    value1?: any
    value2?: any
};

const SuperRange = (props:SuperRangePropsType) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue1(+e.currentTarget.value)
        props.setValue2( [+e.currentTarget.value, props.value2[1]] )

    }

    // const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <div className={s.rangeWrap}>
            <div className={s.rangeSlider}>
                <div className={s.labelRange}>
                    <div className={s.minMax}>
                    <span>{props.value1}</span>
                    <span>100</span>
                    </div>
                    <input
                        type={'range'}
                        value={props.value1}
                        list='tickmarks'
                        min='0'
                        max='100'
                        onChange={onChangeCallback}
                        // className={finalRangeClassName}
                        // className={s.range3}
                    />
                </div>
            </div>
        </div>
    )
}

export default SuperRange








// import * as React from 'react'
// import Slider from '@mui/material/Slider';
// import {makeStyles} from '@material-ui/core';
//
//
// type SuperDoubleRangePropsType = {
//     value: number
//     value1: number
//     setValue: (value: number) => void
//     setValue1: (value: number) => void
// }
//
// const useStyles = makeStyles({
//     root: {
//         width: 300
//     },
// });
//
//
// const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
//
//     const handleChange = (event: any, value: number | number[]) => {
//         if (Array.isArray(value)) {
//             props.setValue(value[0])
//             props.setValue1(value[1])
//         }
//     }
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <Slider
//                 value={[props.value, props.value1]}
//                 onChange={handleChange}
//                 valueLabelDisplay="auto"
//             />
//
//
//         </div>
//     )
// }
//
// export default SuperDoubleRange


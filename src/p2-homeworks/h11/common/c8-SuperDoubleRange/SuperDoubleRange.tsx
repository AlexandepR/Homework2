import * as React from 'react'
import Slider from "@mui/material/Slider";
import {Box} from "@mui/material";
import s from "../c7-SuperRange/SuperRange.module.css";
import {ChangeEvent} from "react";


type SuperDoubleRangePropsType = {
    setValue2: (value: Array<number>) => void
    setValue1: (value: number) => void
    // value2: number
    value2?: Array<number>
    value1?: number
}


function valuetext(value: any) {
    return `${value}°C`;
}

const minDistance = 10;

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
    // const [value2, setValue2] = React.useState([20, 37]);
    let value2 = props.value2
    let setValue2 = props.setValue2
    // props.setValue1(value2)

    const handleChange1 = (event: any, newValue: number | number[], activeThumb: any) => {
        if (Array.isArray(newValue)) {
            setValue2(newValue)
            props.setValue1(newValue[0])
        }

        // if (!Array.isArray(newValue)) {
        //     return;
        // }
        // props.setValue1(newValue)
        // if (activeThumb === 0) {
        //     setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
        // } else {
        //     setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
        // }
    };


// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value,
//         ...restProps
//         // min, max, step, disable,
//     }
// ) => {
    // сделать самому, можно подключать библиотеки
    // const classes = useStyles();
    return (
        <div className={s.rangeWrap}>
            <div className={s.rangeSlider}>
                <div className={s.labelRange}>
                    <div className={s.minMax}>
                        <span>0</span>
                        <span>100</span>
                    </div>
                    <Box sx={{width: 250}}>
                        <Slider
                            getAriaLabel={() => 'Minimum distance'}
                            value={value2}
                            onChange={handleChange1}
                            valueLabelDisplay="on"
                            getAriaValueText={valuetext}
                            color="secondary"
                            disableSwap
                        />
                    </Box>

                </div>
            </div>
        </div>
    )
}

export default SuperDoubleRange

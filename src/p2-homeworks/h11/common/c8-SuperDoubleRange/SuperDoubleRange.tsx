import * as React from 'react'
import Slider from "@mui/material/Slider";
import {Box} from "@mui/material";
import s from "../c7-SuperRange/SuperRange.module.css";


type SuperDoubleRangePropsType = {
    setValue2: (value: number) => void
    setValue1: (value: number) => void
    value2: number
}


// function valuetext(value: any) {
//     return `${value}°C`;
// }

const minDistance = 10;

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {





    const [value, setValue1] = React.useState([20, 37]);

    const handleChange1 = (event: any, newValue: any, activeThumb: any) => {

        if (!Array.isArray(newValue)) {
            props.setValue1(value[0])
            return;
        }
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue1([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };
    //     if (activeThumb === 0) {
    //         setValue1([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    //     } else {
    //         setValue1([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    //     }
    // };


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
                                value={value}
                                onChange={handleChange1}
                                valueLabelDisplay="on"
                                // getAriaValueText={valuetext}
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

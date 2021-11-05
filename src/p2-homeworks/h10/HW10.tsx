import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, LoadingType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.IsLoading)
    // const loading = false
    // useSelector, useDispatch
    // const loading = false
    const setLoading = () => {

        const action = loadingAC(true)
        dispatch(action)

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)

        console.log('loading...')
    };
    return (

        <div>

            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        крутилка...
                        {/*{loading}*/}
                        <img src='https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif' width="100" height="100"></img>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

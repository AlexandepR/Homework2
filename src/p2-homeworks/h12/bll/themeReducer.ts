export const initState = {
    value: 'light'
};
export type initStateType = {
    value: string
}

type ThemeACType = {
    type: 'DARK' | 'LIGHT' | 'RED' | 'RED-TEXT' | 'SOME' | 'SOME-TEXT'
    value: string
}

// type lightThemeACType = {
//     type: 'THEME-LIGHT'
//     value: string
// }
// type redThemeACType = {
//     type: 'THEME-RED'
//     value: string
// }
// type redTextThemeACType = {
//     type: 'THEME-RED-TEXT'
//     value: string
// }
// type someThemeThemeACType = {
//     type: 'THEME-SOME'
//     value: string
// }
// type someTextACType = {
//     type: 'THEME-SOME-TEXT'
//     value: string
// }

type ActionTypes =  ThemeACType
    // | lightThemeACType |
    // redThemeACType | redTextThemeACType |
    // someThemeThemeACType | someTextACType


export const themeReducer = (state = initState, action: ActionTypes): typeof state => { // fix any
    switch (action.type) {
        // case "THEME-LIGHT": {
        //     return {
        //         ...state,
        //         value: action.value
        //     };
        // }
        case 'DARK': {
          return {
              ...state,
              value: action.value
          }
        }
        case 'LIGHT': {
            return {
                ...state,
                value: action.value
            }
        }
        case 'RED': {
            return {
                ...state,
                value: action.value
            }
        }
        case 'RED-TEXT': {
            return {
                ...state,
                value: action.value
            }
        }
        case 'SOME': {
            return {
                ...state,
                value: action.value
            }
        }
        case 'SOME-TEXT': {
            return {
                ...state,
                value: action.value
            }
        }
        default: return state;
    }
};

export const changeThemeC = (): any => {}; // fix any



export const darkThemeAC = (value: string): ThemeACType => {
    return( {type: 'DARK', value})
}
export const lightThemeAC = (value: string): ThemeACType => {
    return( {type: 'LIGHT', value})
}
export const redThemeAC = (value: string): ThemeACType => {
    return( {type: 'RED', value})
}
export const redTextThemeAC = (value: string): ThemeACType => {
    return( {type: 'RED-TEXT', value})
}
export const someThemeAC = (value: string): ThemeACType => {
    return( {type: 'SOME', value})
}
export const someTextThemeAC = (value: string): ThemeACType => {
    return( {type: 'SOME-TEXT', value})
}

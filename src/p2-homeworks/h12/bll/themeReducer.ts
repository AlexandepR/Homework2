
export const initState = {
    value: 'light'
};
export type initStateType = {
    value: string
}
type ThemeACType = {
    type: 'THEME'
    value: string
}


type ActionTypes =  ThemeACType



export const themeReducer = (state = initState, action: ActionTypes): typeof state => { // fix any
    switch (action.type) {
        case 'THEME': {
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
    return( {type: 'THEME', value})
}

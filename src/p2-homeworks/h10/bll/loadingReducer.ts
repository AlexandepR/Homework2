
const SET_LOADING = 'SET-LOADING'

const initState = {
    IsLoading: false
}
export type LoadingType = {
    type: 'SET_LOADING'
    IsLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingType): any=> { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                IsLoading: action.IsLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (IsLoading:boolean): LoadingType => ({type: 'SET_LOADING',IsLoading: IsLoading}) // fix any
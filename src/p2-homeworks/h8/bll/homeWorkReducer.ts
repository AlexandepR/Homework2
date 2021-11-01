import {UserType} from "../HW8";

type ActionTypes = SortType | CheckType | CheckAgeType

type SortType = {
    type: 'sort'
    payload: 'up'
}
type CheckType = {
    type: 'sort'
    payload: 'down'
}
type CheckAgeType = {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state:  UserType[], action: ActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}

export const sortAC = (): SortType => {
    return {type: 'sort', payload: 'up'}
}

// export const checkAC = (): CheckType => {
//     return {type: 'sort', payload: 'up'}
// }
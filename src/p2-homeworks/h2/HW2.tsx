import React, {useState} from 'react';
import Affairs from './Affairs';
import s from './HW2.module.css'

// types
export type AffairPriorityType =  'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType) : AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
    else if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    else if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    else if (filter === 'low') return affairs.filter(a => a.priority === 'low')

    else return [] // need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(affairs => affairs._id !== _id)
    // affairs.filter(affairs => affairs._id !== _id)// need to fix any
    // return filteredAffairs(affairs, _id)  // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')


    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={s.homeWork2}>
            {/*<hr/>*/}
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW2
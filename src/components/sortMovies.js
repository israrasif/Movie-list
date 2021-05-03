import React,{ useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {az, za, numAsc, numDsc} from '../actions/actionGenerators'

const SortMovies = (props) => {
    
    const [select, setSelect] = useState('sort')
    const dispatch = useDispatch()

    const movies = useSelector((state) => {
        return state.movies
    })

    const searched = useSelector((state) => {
        return state.searched
    })

    
    let data = []
    if (searched.length){
        data = [...searched]
    } else {
        data = [...movies]
    }

    const sorted = data.map((ele) => {
        return ele.name
    })
    const sortedAlp = sorted.sort()

    const sortedData = []
    for (let name of sortedAlp) {
        for(let ele of data) {
            if(name === ele.name){
                sortedData.push(ele)
            }
        }
    }

    const sortedN = data.map((ele) => {
        return Number(ele.ranking)
    })
    const sortedNum = sortedN.sort((a, b) => {
        return a-b 
    })

    const sortedNumData = []
    for (let rank of sortedNum) {
        for(let ele of data) {
            if(rank === ele.ranking){
                sortedNumData.push(ele)
            }
        }
    }

    console.log(sortedNum)

    const handleSelect = (e) => {
        setSelect(e.target.value)
        const value = e.target.value
        
        if(value === 'az') {
            dispatch(az(sortedData))
        }else if(value === 'za') {
            dispatch(za(sortedData.reverse()))
        } else if(value === '1100') {
            dispatch(numAsc(sortedNumData))
        } else if(value === '1001') {
            dispatch(numDsc(sortedNumData.reverse()))
        }
    }

    return (
        <div>
            <select class='form-select'
                value={select} 
                onChange={handleSelect} 
                select 
                width='30%'
                > 
                <option value='sort'>sort movies by</option>
                <option value='az'>a-z</option>
                <option value='za'>z-a</option>
                <option value='1100'>1-100</option>
                <option value='1001'>100-1</option>
            </select>
        </div>
    )
}

export default SortMovies
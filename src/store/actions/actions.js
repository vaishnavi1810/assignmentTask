import {GET_AVERAGE,GET_CLASSES,GET_DETAILS} from './actionTypes'

export const getClasses=()=>{
    return{
        type:GET_CLASSES,
    }
}

export const getDetails=(index)=>{
    return{
        type:GET_DETAILS,
        studentIndex:index
    }
}


export const getAverage=()=>{
    return{
        type:GET_AVERAGE,
        
    }
}
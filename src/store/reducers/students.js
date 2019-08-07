import {GET_AVERAGE,GET_CLASSES,GET_DETAILS} from '../actions/actionTypes'
import data from '../../classroom_data.json'

const initialState={
    classes:[],
    studentLists:{
        studentList:[],
        Averages:[],
        Average:null
    },
    classSelected:null,
    classIndex:null,
    Average:null
};

const calAverage=(students)=>{

    let sum=0,i=0;
    students.map((s)=>{
        for (let key in s.marks ) {
            
            sum=sum+s.marks[key];
          }
    })
    

      let avg=(sum/9.0);
      return avg;
    
}

const getAverages=(students)=>{
    
    
    let Averages=[]
    students.map((s)=>{
        let sum=0,i=0;
        for (let key in s.marks ) {
            
            sum=sum+s.marks[key];
          }
          let avg=(sum/3.0)
        Averages.push(avg);
    })

    return Averages;
    

      
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case GET_CLASSES:
            return{
              ...state,
              classes:data.map((cl)=>{
                  return cl.classname
              })
                
            };
        
        case GET_DETAILS :
            return{
                ...state,
               studentLists:{studentList:data[action.studentIndex].students,Averages:getAverages(data[action.studentIndex].students),Average:calAverage(data[action.studentIndex].students)}
               ,
               classSelected:data[action.studentIndex].classname,
               classIndex:action.studentIndex
                
            }

        case GET_AVERAGE:
            return{
                ...state,
                
                
            }
        
        
        default:
            return state;
    }
};

export default reducer;
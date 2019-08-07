import React from 'react'
import Progress from 'react-progressbar';
import './studentCard.css'

const StudentCard=(props)=>{

    const prog=[] 
for(let key in props.studentInfo.marks){
        let val=props.studentInfo.marks[key]
        
        prog.push(

            <div className="proHand pa3">
                <span className="sub">
                    {key}: 
                 </span>
                <Progress completed={val} className="pro" height="15px" color="blue" />
                <span className="per">
                    {val}%
                 </span>
            </div>

        )
    }
    console.log(prog)
    return(
        <div className="bg-white dib br3 pa3 ma2 grow bw2 shadow-5 card">
        
        <div className="headHandler">
            
            <span className="pa2  name">{props.studentInfo.name}</span>
            <span className="pa2  per1">{Number((props.avg).toFixed(1))}%</span>
            
            
        </div>
            <div className="progHa">
                {prog}
            </div>
        
        </div>
    )
}

export default StudentCard
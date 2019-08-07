import React from 'react'
import './header.css'

let initialState={
    cont:"Show Average",
    show:false
}

export default class Header extends React.Component {
    constructor(){
        super();
        this.state=initialState
    }

    setAvg=()=>{
        console.log("pre")
        if(this.state.show){
            this.setState({show:false,cont:"Show Average"})
        }
        else{
            this.setState({show:true,cont:"Hide Average"})
        }
    }


    render(){
        return(
            <div className="head ">
            <h1>{this.props.className} </h1>
            <h3>{this.props.len} students</h3>
            <div className="br-pill pa2 pointer buttons dim" onClick={this.setAvg}>{this.state.cont}</div>
            {this.state.show ?
            <div className="br0 pa2 heads">Classroom Average Performance: {Number((this.props.avg).toFixed(1))}%</div>
            :
            null}
            </div>
        )
    }

}

    
    



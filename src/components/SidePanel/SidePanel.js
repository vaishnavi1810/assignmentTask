import React from 'react';

import "./SidePanel.css";

const initialState={
  school:'xyz'
}
export default class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state=initialState
  }

  render() {
    console.log(this.props)

    const listOfClasses=this.props.classes.map((cl,i)=>{
      return <div className="br1 pa3 mb3 white dim pointer but " key={i} onClick={()=>this.props.onClassSelect(i)}>{cl}</div>
    })

    console.log(listOfClasses)

    return (
      <div className="fl w-25   h100 sidePanel">
        <h1 className="f2 lh-copy tc mt5 white consolas">School : {this.state.school}</h1>
        {listOfClasses}
      </div>
    );
  }
}

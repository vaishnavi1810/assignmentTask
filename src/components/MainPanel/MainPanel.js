import React from 'react';
import Header from '../header'
import "./MainPanel.css";
import StudentCard from '../studentCard'
export default class MainPanel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log(this.props)

    const students=this.props.studentLists.studentList.map((s,i)=>{
      return <StudentCard key={i} studentInfo={s} avg={this.props.studentLists.Averages[i]} />
    })
    return (
      <div className="mainPanel">

        {this.props.studentLists.studentList.length>0?
        <div>
        <Header className={this.props.classSelected} len={this.props.studentLists.studentList.length} avg={this.props.studentLists.Average}/>
        <hr style={{height:"3px",backgroundColor:"royalblue"}}/>
        {students}
        </div>
        :
        <h1 className="tc con">SELECT A CLASS</h1>}
       
      </div>
    );
  }
}

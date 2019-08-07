import React,{Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Layout from './components/Layout/Layout';
import 'tachyons'

import {getAverage,getClasses,getDetails} from '../src/store/actions/index'

const mapStateToProps=state=>{
	return{
		classes:state.classes.classes,
    studentLists:state.classes.studentLists,
    classSelected:state.classes.classSelected
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
	onGetClasses:()=>dispatch(getClasses()),
  onGetDetails:(index)=>dispatch(getDetails(index)),
  onGetAverage:()=>dispatch(getAverage())
	}
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.onGetClasses()
  }

  onClassSelect=(index)=>{
    console.log(index)
    this.props.onGetDetails(index);
  }

  ongetAverage=()=>{
    this.props.onGetAverage();
  }

  render() {
    return (
      <div className="App">
        <Layout classes={this.props.classes} 
        onClassSelect={this.onClassSelect} 
        studentLists={this.props.studentLists} 
        classSelected={this.props.classSelected}
        getAverage={this.ongetAverage}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

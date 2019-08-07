import React from 'react';

import MainPanel from '../MainPanel/MainPanel';
import SidePanel from '../SidePanel/SidePanel';

import "./Layout.css";

export default class Layout extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="layout">
        <SidePanel classes={this.props.classes} onClassSelect={this.props.onClassSelect}/>
        <MainPanel studentLists={this.props.studentLists} classSelected={this.props.classSelected}/>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

class ClockTypeSubmit extends React.Component{

    constructor(props){
      super(props);
  
      //I have to check why I need to bind the event functions
      this.onClockTypeSubmit = this.onClockTypeSubmit.bind(this);
    }
  
    onClockTypeSubmit(e){
      let type ="";
      type = e.target.value == "digital" ? "analog" : "digital";
      e.target.value = type;
      this.props.getClockType(type);
  }
  render(){
  
    return (
  
      <div id="clockDiv">
        <input id="clockType" type="submit" onClick={this.onClockTypeSubmit} value={this.props.defaultClockType}/>
      </div>
    );
   
  }
  
  }

  export default ClockTypeSubmit;
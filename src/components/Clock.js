import React from 'react';
import ReactDOM from 'react-dom';
import ClockTimeFunctionality from './ClockTimeFunctionality';

class Clock extends React.Component{
    constructor(props){
      super(props); 
  
     
    }
  
    
  
   render(){
    
     
      return(
      
      <ClockTimeFunctionality clockType={this.props.clockType} cityCurrentTime = {this.props.cityCurrentTime} getCurrentTime={this.props.getCurrentTime}/>
        
      );
  
      
      
     
      
    }
  }

  export default Clock;
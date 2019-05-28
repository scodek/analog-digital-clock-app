import React from 'react';
import ReactDOM from 'react-dom';

class ClockTimeFunctionality extends React.Component{
    constructor(props){
      super(props);
      //this.state = {currentTime : this.timeNow()};
    }
  
    //getCurrentTime
    componentDidMount(){
      this.timerID = setInterval(
        () => this.tick(),1000
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    //this.props.cityCurrentTime has the current time from the App class
    tick(){
      //this.setState({currentTime : this.timeNow()});
      this.props.getCurrentTime(this.timeNow());
  
    }
    timeNow(){
      //console.log("current time : " + this.props.cityCurrentTime);
     let hours ="";
     let minutes = "";
     let seconds = "";
     if(!this.props.cityCurrentTime){
      let currentDate = new Date();
      hours = currentDate.getHours();
      minutes = currentDate.getMinutes();
      seconds = currentDate.getSeconds();
     }else{
       //console.log("Hello Current time =" + this.props.cityCurrentTime);
      let currentDate = this.props.cityCurrentTime.split(":");
      hours = currentDate[0];
      hours = hours.replace(/^0(\d)/,"$1");
      if(parseInt(hours) >= 24){
        hours = 0;
      }
      minutes = currentDate[1];
      minutes = minutes.replace(/^0(\d)/,"$1");
      if(parseInt(minutes) >= 60){
        minutes = 0;
        hours = parseInt(hours) + 1;
      }
      if(currentDate[2]){
        
        seconds = currentDate[2];
        seconds = seconds.replace(/^0(\d)/,"$1");
        seconds = parseInt(seconds) + 1;
        if(seconds >=60){
          seconds =0;
          minutes = parseInt(minutes) + 1;
        }
      }
      
      if(seconds == ""){
      //console.log("Yes second is empty");
        seconds = "1";
      }
     
     // seconds = seconds.replace(/^0(\d)/,"$1");
     // seconds = parseInt(seconds) + 1;
      //console.log("seconds= "+ seconds);
     }
      
      let session = "AM";
      if(hours == 0) hours=12;
      /*if(hours > 12) {
        hours = hours - 12;
      }*/
      if(hours > 12 || hours == 12 && minutes >=0 && seconds >=0)
      session = "PM";
  
      /*return {
        hours : hours,
        minutes : minutes,
        seconds: seconds,
        session:session
      };*/
      if(hours < 10)
      hours = '0' + hours;
      if(minutes < 10)
      minutes = '0' + minutes;
      if(seconds < 10)
      seconds = '0' + seconds;
  
      return hours + ":" + minutes + ":" + seconds + " " + session;
    }
    render(){
  
      let currentTime = this.props.cityCurrentTime.split(":");
      
        let hr = parseInt(currentTime[0]);
        let min = parseInt(currentTime[1]);
        let sec = parseInt(currentTime[2]);
  //console.log(hr + min + sec);
      
      if(this.props.clockType =="analog"){
        //console.log("Yes analog");
       // console.log("time = " + hr + ": "+min + ": "+sec);
       /*let cal = hr*360/12 + ((min * 360/60)/12);*/
       let cal = hr*360/12 + 30/3600;
        let hourStyle = {
         transform: 'rotate(' + cal + 'deg)',
         /* transform: 'rotate(' + hr*360/12  + 'deg)',*/
         /*transform: 'rotate(' + 30/3600 + 'deg)',*/
        };
  
        let minuteStyle = {
         /* transform: 'rotate(' + (min * 360/60) + (sec* 360/60)/60 + 'deg)',*/
         transform: 'rotate(' + (min * 360/60) + 'deg)',
        };
  
        let secondStyle = {
  
          transform: 'rotate(' + sec * 360/60 + 'deg)',
        };
  
        return(
          
          <div class="clockbox">
         <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="-50 -50 700 700">
              <g id="face">
                  <circle class="circle" cx="300" cy="300" r="253.9"/>
                  <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>
                  <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
              </g>
              <g id="hour" style={hourStyle}>
                  <path class="hour-arm" d="M300.5 298V142"/>
                  <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
              </g>
              <g id="minute" style={minuteStyle}>
                  <path class="minute-arm" d="M300.5 298V67"/>
                  <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
              </g>
              <g id="second" style={secondStyle}>
                  <path class="second-arm" d="M300.5 350V55"/>
                  <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
              </g>
          </svg>
      </div>
  
        );
        
      }else{
        hr = hr < 10 ? '0' + hr : hr;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        return (
          <div id="clockboxdigital">
            <div className="display-screen">
            { hr  + ":" + min + ":" + sec}
            </div>
          </div>
        );
  
        
      }
    
     
  }
}

export default ClockTimeFunctionality;
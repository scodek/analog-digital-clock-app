import React from 'react';
import ReactDOM from 'react-dom';
import CapitalCitySearch from './CapitalCitySearch';
import ClockTypeSubmit from './ClockTypeSubmit';
import Clock from './Clock';
//import { clearInterval } from 'timers';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       localTime: "",
       city: "",
       clockType : "digital"
      };
    this.receiveCityName = this.receiveCityName.bind(this);
    this.receiveClockType = this.receiveClockType.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.receiveCurrentTime = this.receiveCurrentTime.bind(this);
    
    
  }
showPosition(position,cityName){
  
  let lat = "",longi = "", latlongi = "";
  if(position){
    lat = position.coords.latitude;
    longi = position.coords.longitude;
  }
  else{
    for(let i=0;i<window.MyVars.length;i++){
      if(window.MyVars[i].city == cityName){
        lat = window.MyVars[i].lattitude;
        longi = window.MyVars[i].longitude;
      }
    
    }
  }
   

 // this.sendrequest(lat,longi);
  //}

  //sendRequest(lat,longi){
    
         const urlStr = "http://api.geonames.org/timezone?lat=" + lat + "&lng=" + longi + "&username=skhalequ";
       // alert(urlStr);
       fetch(urlStr)
       .then(function(response) {
         return response.text();
       })
       .then((response) => {
         console.log(response);
         let time = response.match(/<time>.+?<\/time>/gm)[0].replace(/<time>.+?\s+(.+)<\/time>/,"$1");
        console.log("Time line#59 : "+time);
         let fetchedCity = response.match(/<timezoneId>.+?<\/timezoneId>/gm)[0].replace(/<timezoneId>.+?\/([a-z]+)<\/timezoneId>/i,"$1");
         
         this.setState({ city: fetchedCity,
                        localTime : time
          });
         
         console.log("time = " + time + ", " + fetchedCity );
       });
    }

  componentDidMount(){
   // alert("now city name = " + this.state.city);
    if (navigator.geolocation) {
//alert("Reached here");
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }else{
      alert("navigator.geolocation failed: Geolocation is not supported by this browser.");
    }
  }

  receiveCityName(receivedCity){
        this.setState({city:receivedCity},function(){
          let chosenCity = this.state.city;
         // alert("chosenCity = "+chosenCity);
          this.showPosition("",chosenCity);
          //window.MyVars.find();
        });
       // alert("receiveCityName : state city is : "+this.state.city);
    }

  receiveClockType(retClocktype){
    this.setState({clockType : retClocktype});
  }

  receiveCurrentTime(retCurrTime){
   // console.log(" receiveCurrentTime is : "+ retCurrTime);
    this.setState({localTime:retCurrTime});
  }
 
  render() {
    return (
      <div id="main-body">
      <CapitalCitySearch sendCity={this.state.city} getCity={this.receiveCityName}/>
      <ClockTypeSubmit defaultClockType={this.state.clockType} getClockType={this.receiveClockType}/>
      
    <Clock cityName={this.state.city} clockType={this.state.clockType} cityCurrentTime={this.state.localTime} getCurrentTime={this.receiveCurrentTime}/>
      </div>
      
    );
  }
}


export default App;
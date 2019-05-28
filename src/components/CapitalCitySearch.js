import React from 'react';
import ReactDOM from 'react-dom';


class CapitalCitySearch extends React.Component{
    constructor(props){
      super(props);
      //this.state = {cityName : this.props.sendCity};
      this.getInputValue = this.getInputValue.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    componentWillMount(){
      const availableCities = (require('./data/city_latitude_longitude.js').default)['Cities'];
      window.MyVars = availableCities;
    }
  
    getInputValue(e){
      //alert("chosen val = "+e.target.value);
      //this.setState({cityName : e.target.value});
      this.props.getCity(e.target.value);
    }
  
    onSubmit(e){
     // alert(this.state.cityName);
      e.preventDefault();
    }
    render(){

    let cityOptions = window.MyVars.map(cityInfoObj => <option>{cityInfoObj.city}</option>);
    const inputDiv = <div id="cityDiv">
               <select id="capitalSelect" name="capital" value ={this.props.sendCity} onChange={this.getInputValue}>
               <option>{this.props.sendCity}</option>
                {cityOptions}
                </select>
               </div>;
      return inputDiv;
  
  
    }
  }

  export default CapitalCitySearch;
import React from "react";

const Weather = props => (
  <div>
  {
  props.city && props.country && <p className="weather__key"> Location:
    <span className="weather__value"> { props.city }, { props.country }</span>
  </p>
 }
 {
  props.temperature && <p className="weather__key"> Temperature:
    <span className="weather__value"> { props.temperature }	</span>
  </p>
 }
 {
  props.humidity && <p className="weather__key"> Humidity:
    <span className="weather__value"> { props.humidity } </span>
  </p>
 }
 {
  props.description && <p className="weather__key"> Conditions:
    <span className="weather__value"> { props.description } </span>
 </p>
 }
 {
  props.error && <p className="weather__error">{ props.error }</p>
 }
  </div>
);

export default Weather;

/* import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Dom} from 'react-dom'

import './Weather.css'
const APIKey='efb010fa662d1c4360cd251c91c41e5e'
var lat=0;
var lon = 0;

export default class Weather extends Component{
      constructor(props){
        super(props);
        this.state={
      latitude:0,
      longitude:0,
        weather:'',
            city:'',
            country:'',
            customLabel:''
        }
      }

      setWeather=(position)=>{
      this.lat=position.coords.latitude;
      this.lon=position.coords.longitude;
        this.setState({
        latitude:this.lat,
        longitude:this.lon
        });

const url='https://api.openweathermap.org/data/2.5/weather?lat='+this.lat+'&lon='+this.lon+'&appid='+APIKey+'&units=imperial';
        fetch(url)
        .then(data => data.json())
        .then(parsedData => this.setState({
          weather:parsedData.weather[0].description,
          city:parsedData.name,
          country:parsedData.sys.country,
        customLabel:'yes I did it!'
        }));
      }

      getLocation=()=>{
        navigator.geolocation.getCurrentPosition(this.setWeather);
      }

      componentWillMount(){
        this.getLocation();
      }

  render(){
    return(
      <div className="weatherApp">
          <Grid>
          <Row>
            <label>Weather : {this.state.weather}</label>
          </Row>
              <Row>
                <label>City  : {this.state.city}</label>
              </Row>
              <Row>
                  <label>Country Code : {this.state.country} </label>
              </Row>
              <Row>
                  <label>What you say : {this.state.customLabel} </label>
              </Row>
          </Grid>
      </div>
    )
  }
} */

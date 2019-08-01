import React, {Component} from 'react';
import axios from 'axios';
import Forecast from './components/forecast/Forecast';
import Error from './components/error/Error';
import Search from './components/search/Search';
class App extends Component{
    state = {
        city : {name : "Jaipur" },
        weather : {},
        error : false,
        day1 : {},
        day2 : {},
        day3 : {},
        day4 : {},
        day5 : {},
        day6 : {}
    };

    componentDidMount(){
        axios.get(
            "https://api.apixu.com/v1/forecast.json?key=844f8999cbd546fcb47112659193007&q=Jaipur&days=7"
        )
        .then(response => {
            this.setState({
                weather: {
                    main: response.data.current.condition.icon,
                    temp: response.data.current.temp_c,
                    city: response.data.location.name,
                    humidity: response.data.current.humidity,
                    feel: response.data.current.feelslike_c,
                    wind: response.data.current.wind_kph
                  },
                  day1: {
                    date: response.data.forecast.forecastday[1].date,
                    max: response.data.forecast.forecastday[1].day.maxtemp_c,
                    min: response.data.forecast.forecastday[1].day.mintemp_c,
                    main: response.data.forecast.forecastday[1].day.condition.icon
                  },
                  day2: {
                    date: response.data.forecast.forecastday[2].date,
                    max: response.data.forecast.forecastday[2].day.maxtemp_c,
                    min: response.data.forecast.forecastday[2].day.mintemp_c,
                    main: response.data.forecast.forecastday[2].day.condition.icon
                  },
                  day3: {
                    date: response.data.forecast.forecastday[3].date,
                    max: response.data.forecast.forecastday[3].day.maxtemp_c,
                    min: response.data.forecast.forecastday[3].day.mintemp_c,
                    main: response.data.forecast.forecastday[3].day.condition.icon
                  },
                  day4: {
                    date: response.data.forecast.forecastday[4].date,
                    max: response.data.forecast.forecastday[4].day.maxtemp_c,
                    min: response.data.forecast.forecastday[4].day.mintemp_c,
                    main: response.data.forecast.forecastday[4].day.condition.icon
                  },
                  day5: {
                    date: response.data.forecast.forecastday[5].date,
                    max: response.data.forecast.forecastday[5].day.maxtemp_c,
                    min: response.data.forecast.forecastday[5].day.mintemp_c,
                    main: response.data.forecast.forecastday[5].day.condition.icon
                  },
                  day6: {
                    date: response.data.forecast.forecastday[6].date,
                    max: response.data.forecast.forecastday[6].day.maxtemp_c,
                    min: response.data.forecast.forecastday[6].day.mintemp_c,
                    main: response.data.forecast.forecastday[6].day.condition.icon
                  }

            });
        });

    }


    setOnChange = event => {
        event.preventDefault();
        const city = {...this.state.city};
        city.name = event.target.elements.city.value;
        this.setState({city : city});
        axios
        .get(
            'https://api.apixu.com/v1/forecast.json?key=844f8999cbd546fcb47112659193007&q='+city.name+'&days=7'
        )
        .then(response => {
            this.setState({
                weather: {
                    main: response.data.current.condition.icon,
                    temp: response.data.current.temp_c,
                    city: response.data.location.name,
                    humidity: response.data.current.humidity,
                    feel: response.data.current.feelslike_c,
                    wind: response.data.current.wind_kph
                  },
                  day1: {
                    date: response.data.forecast.forecastday[1].date,
                    max: response.data.forecast.forecastday[1].day.maxtemp_c,
                    min: response.data.forecast.forecastday[1].day.mintemp_c,
                    main: response.data.forecast.forecastday[1].day.condition.icon
                  },
                  day2: {
                    date: response.data.forecast.forecastday[2].date,
                    max: response.data.forecast.forecastday[2].day.maxtemp_c,
                    min: response.data.forecast.forecastday[2].day.mintemp_c,
                    main: response.data.forecast.forecastday[2].day.condition.icon
                  },
                  day3: {
                    date: response.data.forecast.forecastday[3].date,
                    max: response.data.forecast.forecastday[3].day.maxtemp_c,
                    min: response.data.forecast.forecastday[3].day.mintemp_c,
                    main: response.data.forecast.forecastday[3].day.condition.icon
                  },
                  day4: {
                    date: response.data.forecast.forecastday[4].date,
                    max: response.data.forecast.forecastday[4].day.maxtemp_c,
                    min: response.data.forecast.forecastday[4].day.mintemp_c,
                    main: response.data.forecast.forecastday[4].day.condition.icon
                  },
                  day5: {
                    date: response.data.forecast.forecastday[5].date,
                    max: response.data.forecast.forecastday[5].day.maxtemp_c,
                    min: response.data.forecast.forecastday[5].day.mintemp_c,
                    main: response.data.forecast.forecastday[5].day.condition.icon
                  },
                  day6: {
                    date: response.data.forecast.forecastday[6].date,
                    max: response.data.forecast.forecastday[6].day.maxtemp_c,
                    min: response.data.forecast.forecastday[6].day.mintemp_c,
                    main: response.data.forecast.forecastday[6].day.condition.icon
                  }

            });
        });
    };
    render(){
       if(this.state.error){
           return(
               <Error/>
           );
       }

       return(
           <div>
            <Search func = {this.setOnChange}/>
            <Forecast 
            place = {this.state.city.name}
            data1 = {this.state.day1}
            data2 = {this.state.day2}
            data3 = {this.state.day3}
            data4 = {this.state.day4}
            data5 = {this.state.day5}
            data6 = {this.state.day6}
            />
           </div>
       );
    }
};
export default App;
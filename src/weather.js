'use strict';
const e = React.createElement;

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lon: 0,
            error: "",
            weather: [],
            temp: 0,
            feelsLike: 0,
            tempMin: 0,
            tempMax: 0,
            pressure: 0,
            humidity: 0,
            windSpeed: 0,
            windDeg: 0,
            sunrise: 0,
            sunset: 0,
            location: "",
            country: "",
            isC: true
        };

        this.showPosition = this.showPosition.bind(this);
        this.changeTemp = this.changeTemp.bind(this);
    }
    
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            this.setState({error: "Geolocation isn't supported"});
        }
    }

    showPosition(position) {
        this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
        fetch("https://weather-proxy.freecodecamp.rocks/api/current?lat=" + 
            position.coords.latitude.toString() + "&lon=" + 
            position.coords.longitude.toString())
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            this.setState({
                weather: data["weather"],
                temp: data["main"].temp,
                feelsLike: data["main"].feels_like,
                tempMin: data["main"].temp_min,
                tempMax: data["main"].temp_max,
                pressure: data["main"].pressure,
                humidity: data["main"].humidity,
                windSpeed: data["wind"].speed,
                windDeg: data["wind"].deg,
                sunrise: data["sys"].sunrise,
                sunset: data["sys"].sunset,
                location: data["name"],
                country: data["sys"].country
            });
        });
    }

    changeTemp() {
        this.setState({isC: !this.state.isC});
    }

    render() {
        let disp;
        if (this.state.error === "") {
            let weat = this.state.weather.map((w) => <div key={w.id}><p className="cap">{w.description}</p><img src={w.icon} alt={w.main}/></div>);
            let temp;
            if (this.state.isC) {
                temp = <span>{this.state.temp.toFixed(2)}°C</span>
            }
            else {
                temp = <span>{((this.state.temp * (9 / 5)) + 32).toFixed(2)}°F</span>
            }
            disp = <div>
                <h3>FreeCodeCamp Weather App</h3>
                <p>Latitude: {this.state.lat.toFixed(2)}</p>
                <p>Longitude: {this.state.lon.toFixed(2)}</p>
                <p>{this.state.location}, {this.state.country}</p>
                {weat}
                <p>Temperature: {temp}</p>
                <button className="btn btn-info" onClick={this.changeTemp}>Switch Units</button>
            </div>
        }
        else {
            disp = <p>{this.state.error}</p>
        }

        return (
            <div className="weatherBox">{disp}</div>
        );
    }
}

const domContainer = document.querySelector("#weather");
ReactDOM.render(e(Weather), domContainer);
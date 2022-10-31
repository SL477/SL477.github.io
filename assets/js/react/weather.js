/* eslint-disable react/react-in-jsx-scope */
'use strict';
// eslint-disable-next-line no-undef

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

// eslint-disable-next-line no-undef

var Weather = function (_React$Component) {
    _inherits(Weather, _React$Component);

    function Weather(props) {
        _classCallCheck(this, Weather);

        var _this = _possibleConstructorReturn(this, (Weather.__proto__ || Object.getPrototypeOf(Weather)).call(this, props));

        _this.state = {
            lat: 0,
            lon: 0,
            error: '',
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
            location: '',
            country: '',
            isC: true
        };

        _this.showPosition = _this.showPosition.bind(_this);
        _this.changeTemp = _this.changeTemp.bind(_this);
        return _this;
    }

    _createClass(Weather, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                this.setState({ error: 'Geolocation isn\'t supported' });
            }
        }
    }, {
        key: 'showPosition',
        value: function showPosition(position) {
            var _this2 = this;

            this.setState({ lat: position.coords.latitude, lon: position.coords.longitude });
            fetch('https://weather-proxy.freecodecamp.rocks/api/current?lat=' + position.coords.latitude.toString() + '&lon=' + position.coords.longitude.toString(), { credentials: 'same-origin' }).then(function (response) {
                return response.json();
            }).then(function (data) {
                //console.log(data);
                _this2.setState({
                    weather: data['weather'],
                    temp: data['main'].temp,
                    feelsLike: data['main'].feels_like,
                    tempMin: data['main'].temp_min,
                    tempMax: data['main'].temp_max,
                    pressure: data['main'].pressure,
                    humidity: data['main'].humidity,
                    windSpeed: data['wind'].speed,
                    windDeg: data['wind'].deg,
                    sunrise: data['sys'].sunrise,
                    sunset: data['sys'].sunset,
                    location: data['name'],
                    country: data['sys'].country
                });
            });
        }
    }, {
        key: 'changeTemp',
        value: function changeTemp() {
            this.setState({ isC: !this.state.isC });
        }
    }, {
        key: 'render',
        value: function render() {
            var disp = void 0;
            if (this.state.error === '') {
                var weat = this.state.weather.map(function (w) {
                    return React.createElement(
                        'div',
                        { key: w.id },
                        React.createElement(
                            'p',
                            { className: 'cap' },
                            w.description
                        ),
                        React.createElement('img', { src: w.icon, alt: w.main })
                    );
                });
                var temp = void 0;
                if (this.state.isC) {
                    temp = React.createElement(
                        'span',
                        null,
                        this.state.temp.toFixed(2),
                        '\xB0C'
                    );
                } else {
                    temp = React.createElement(
                        'span',
                        null,
                        (this.state.temp * (9 / 5) + 32).toFixed(2),
                        '\xB0F'
                    );
                }
                disp = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h3',
                        null,
                        'FreeCodeCamp Weather App'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Latitude: ',
                        this.state.lat.toFixed(2)
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Longitude: ',
                        this.state.lon.toFixed(2)
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.state.location,
                        ', ',
                        this.state.country
                    ),
                    weat,
                    React.createElement(
                        'p',
                        null,
                        'Temperature: ',
                        temp
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn btn-info', onClick: this.changeTemp },
                        'Switch Units'
                    )
                );
            } else {
                disp = React.createElement(
                    'p',
                    null,
                    this.state.error
                );
            }

            return React.createElement(
                'div',
                { className: 'weatherBox' },
                disp
            );
        }
    }]);

    return Weather;
}(React.Component);

var domContainer = document.querySelector('#weather');
// eslint-disable-next-line no-undef
var root = ReactDOM.createRoot(domContainer);
root.render(e(Weather));
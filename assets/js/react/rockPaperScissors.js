/* eslint-disable react/react-in-jsx-scope */
'use strict';
// eslint-disable-next-line no-undef

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var RPS = ['ROCK', 'PAPER', 'SCISSORS'];

// eslint-disable-next-line no-undef

var RockPaperScissors = function (_React$Component) {
    _inherits(RockPaperScissors, _React$Component);

    function RockPaperScissors(props) {
        _classCallCheck(this, RockPaperScissors);

        var _this = _possibleConstructorReturn(this, (RockPaperScissors.__proto__ || Object.getPrototypeOf(RockPaperScissors)).call(this, props));

        _this.state = {
            humanScore: 0,
            computerScore: 0,
            roundNumber: 0,
            lastPC: '',
            lastHuman: '',
            lastResult: ''
        };

        _this.computerPlay = _this.computerPlay.bind(_this);
        _this.playRound = _this.playRound.bind(_this);
        _this.humanPlay = _this.humanPlay.bind(_this);
        return _this;
    }

    _createClass(RockPaperScissors, [{
        key: 'computerPlay',
        value: function computerPlay() {
            //Return random rock, paper or scissors
            return RPS[Math.floor(Math.random() * 3)];
        }
    }, {
        key: 'playRound',
        value: function playRound(playerSelection, computerSelection) {
            //return AI, PLAYER or DRAW
            if (playerSelection === computerSelection) {
                return 'DRAW';
            }
            //scissors beats paper, paper beats rock, rock beats scissors
            if (playerSelection === 'ROCK') {
                if (computerSelection === 'PAPER') {
                    return 'AI';
                } else {
                    return 'PLAYER';
                }
            } else if (playerSelection === 'PAPER') {
                if (computerSelection === 'ROCK') {
                    return 'PLAYER';
                } else {
                    return 'AI';
                }
            } else {
                //scissors
                if (computerSelection === 'ROCK') {
                    return 'AI';
                } else {
                    return 'PLAYER';
                }
            }
        }
    }, {
        key: 'humanPlay',
        value: function humanPlay(selection) {
            var pcPlay = this.computerPlay();
            var result = this.playRound(selection, pcPlay);
            var newHumanScore = this.state.humanScore;
            var newAIScore = this.state.computerScore;

            if (result === 'AI') {
                newAIScore += 1;
            } else if (result === 'PLAYER') {
                newHumanScore += 1;
            }

            this.setState({
                roundNumber: this.state.roundNumber + 1,
                lastPC: pcPlay,
                lastHuman: selection,
                humanScore: newHumanScore,
                computerScore: newAIScore,
                lastResult: result
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Round Number: ',
                    this.state.roundNumber
                ),
                React.createElement(
                    'p',
                    null,
                    'Player Score: ',
                    this.state.humanScore
                ),
                React.createElement(
                    'p',
                    null,
                    'Computer Score: ',
                    this.state.computerScore
                ),
                React.createElement(
                    'p',
                    null,
                    'Last Computer Play: ',
                    this.state.lastPC
                ),
                React.createElement(
                    'p',
                    null,
                    'Last Player Play: ',
                    this.state.lastHuman
                ),
                React.createElement(
                    'p',
                    null,
                    'Last Result: ',
                    this.state.lastResult
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: function onClick() {
                            return _this2.humanPlay(RPS[0]);
                        } },
                    'Rock'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: function onClick() {
                            return _this2.humanPlay(RPS[1]);
                        } },
                    'Paper'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: function onClick() {
                            return _this2.humanPlay(RPS[2]);
                        } },
                    'Scissors'
                )
            );
        }
    }]);

    return RockPaperScissors;
}(React.Component);

var domContainer = document.querySelector('#rockpaperscissors');
// eslint-disable-next-line no-undef
var root = ReactDOM.createRoot(domContainer);
root.render(e(RockPaperScissors));
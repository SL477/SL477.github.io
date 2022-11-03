'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
//Vaugley based on https://www.freecodecamp.org/news/minimax-algorithm-guide-how-to-create-an-unbeatable-ai/

var TicTacToe = function (_React$Component) {
    _inherits(TicTacToe, _React$Component);

    function TicTacToe(props) {
        _classCallCheck(this, TicTacToe);

        var _this = _possibleConstructorReturn(this, (TicTacToe.__proto__ || Object.getPrototypeOf(TicTacToe)).call(this, props));

        _this.state = {
            currentGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8], //["X", 1, "O", "X", 4, "X", "O", "O", 8],
            aiMark: '',
            humanMark: '',
            block: false,
            message: '',
            humanScore: 0,
            aiScore: 0
        };

        _this.displayValue = _this.displayValue.bind(_this);
        _this.getAllEmptyCellsIndexes = _this.getAllEmptyCellsIndexes.bind(_this);
        _this.checkIfWinnerFound = _this.checkIfWinnerFound.bind(_this);
        _this.minimax = _this.minimax.bind(_this);
        _this.humanMove = _this.humanMove.bind(_this);
        _this.resetGame = _this.resetGame.bind(_this);
        return _this;
    }

    _createClass(TicTacToe, [{
        key: 'displayValue',
        value: function displayValue(index) {
            if (this.state.currentGrid[index] === 'X' || this.state.currentGrid[index] === 'O') {
                return this.state.currentGrid[index];
            } else {
                return ' ';
            }
        }
    }, {
        key: 'getAllEmptyCellsIndexes',
        value: function getAllEmptyCellsIndexes(currBdSt) {
            //Step 4
            return currBdSt.filter(function (i) {
                return i !== 'X' && i !== 'O';
            });
        }
    }, {
        key: 'checkIfWinnerFound',
        value: function checkIfWinnerFound(currBdSt, currMark) {
            //Step 5
            if (currBdSt[0] === currMark && currBdSt[1] === currMark && currBdSt[2] === currMark || currBdSt[3] === currMark && currBdSt[4] === currMark && currBdSt[5] === currMark || currBdSt[6] === currMark && currBdSt[7] === currMark && currBdSt[8] === currMark || currBdSt[0] === currMark && currBdSt[3] === currMark && currBdSt[6] === currMark || currBdSt[1] === currMark && currBdSt[4] === currMark && currBdSt[7] === currMark || currBdSt[2] === currMark && currBdSt[5] === currMark && currBdSt[8] === currMark || currBdSt[0] === currMark && currBdSt[4] === currMark && currBdSt[8] === currMark || currBdSt[2] === currMark && currBdSt[4] === currMark && currBdSt[6] === currMark) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'minimax',
        value: function minimax(currBdSt, currMark) {
            //Step 8
            var availCellsIndexes = this.getAllEmptyCellsIndexes(currBdSt);

            //Step 9, check if terminal state
            if (this.checkIfWinnerFound(currBdSt, this.state.humanMark)) {
                return { score: -1 };
            } else if (this.checkIfWinnerFound(currBdSt, this.state.aiMark)) {
                return { score: 1 };
            } else if (availCellsIndexes.length === 0) {
                return { score: 0 };
            }

            //Step 10
            var allTestPlayInfos = [];

            //Step 11
            for (var i = 0; i < availCellsIndexes.length; i++) {
                var currentTestPlayInfo = {};
                currentTestPlayInfo['index'] = currBdSt[availCellsIndexes[i]];
                currBdSt[availCellsIndexes[i]] = currMark;

                if (currMark === this.state.aiMark) {
                    var result = this.minimax(currBdSt, this.state.humanMark);
                    currentTestPlayInfo['score'] = result['score'];
                } else {
                    var _result = this.minimax(currBdSt, this.state.aiMark);
                    currentTestPlayInfo['score'] = _result['score'];
                }

                //Step 12
                currBdSt[availCellsIndexes[i]] = currentTestPlayInfo.index;

                allTestPlayInfos.push(currentTestPlayInfo);
            }

            //Step 14

            //Step 15
            var bestTestPlay = null;

            //Step 16
            if (currMark === this.state.aiMark) {
                var bestScore = -Infinity;
                for (var _i = 0; _i < allTestPlayInfos.length; _i++) {
                    if (allTestPlayInfos[_i].score > bestScore) {
                        bestScore = allTestPlayInfos[_i].score;
                        bestTestPlay = _i;
                    }
                }
            } else {
                var _bestScore = Infinity;
                for (var _i2 = 0; _i2 < allTestPlayInfos.length; _i2++) {
                    if (allTestPlayInfos[_i2].score < _bestScore) {
                        _bestScore = allTestPlayInfos[_i2].score;
                        bestTestPlay = _i2;
                    }
                }
            }

            //Step 17
            return allTestPlayInfos[bestTestPlay];
        }
    }, {
        key: 'resetGame',
        value: function resetGame() {
            var _this2 = this;

            //delay 5 seconds and then restart
            this.setState({ block: true });
            setTimeout(function () {
                _this2.setState({ currentGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8], block: false, message: '' });
            }, 3000);
        }
    }, {
        key: 'humanMove',
        value: function humanMove(index) {
            var _this3 = this;

            if (this.state.block) {
                //waiting for the computer to move
                return;
            }
            console.log('test', index);
            if (this.displayValue(index) === ' ') {
                var currBdSt = [].concat(_toConsumableArray(this.state.currentGrid));
                currBdSt[index] = this.state.humanMark;
                this.setState({ currentGrid: currBdSt, block: true });
                if (this.checkIfWinnerFound(currBdSt, this.state.humanMark)) {
                    //alert('You won!');
                    this.setState({ message: 'You won!', humanScore: this.state.humanScore + 1 });
                    this.resetGame();
                } else if (this.getAllEmptyCellsIndexes(currBdSt).length === 0) {
                    //alert('Draw!');
                    this.setState({ message: 'Draw!' });
                    this.resetGame();
                } else {
                    //console.log(this.minimax(currBdSt, this.state.aiMark));
                    setTimeout(function () {
                        var aiMove = _this3.minimax(currBdSt, _this3.state.aiMark);
                        console.log(aiMove);
                        currBdSt[aiMove.index] = _this3.state.aiMark;
                        _this3.setState({ currentGrid: currBdSt, block: false });
                        if (_this3.checkIfWinnerFound(currBdSt, _this3.state.aiMark)) {
                            //alert('You lost!');
                            _this3.setState({ message: 'You lost!', aiScore: _this3.state.aiScore + 1 });
                            _this3.resetGame();
                        } else if (_this3.getAllEmptyCellsIndexes(currBdSt).length === 0) {
                            //alert('Draw!');
                            _this3.setState({ message: 'Draw!' });
                            _this3.resetGame();
                        }
                    }, 1000);
                }
            } else {
                console.log('Position filled');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var disp = void 0;
            if (this.state.humanMark === '') {
                disp = React.createElement(
                    'div',
                    { className: 'centre' },
                    React.createElement(
                        'p',
                        { className: 'choose' },
                        'Choose your side:'
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn btn-primary', onClick: function onClick() {
                                _this4.setState({ aiMark: 'O', humanMark: 'X' });
                            } },
                        'X'
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn btn-primary', onClick: function onClick() {
                                _this4.setState({ aiMark: 'X', humanMark: 'O' });
                            } },
                        'O'
                    )
                );
            } else {
                disp = React.createElement(
                    'div',
                    { className: 'centre' },
                    React.createElement(
                        'div',
                        { className: 'tbl' },
                        React.createElement(
                            'table',
                            { className: 'table table-bordered' },
                            React.createElement(
                                'tbody',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(0);
                                            } },
                                        this.displayValue(0)
                                    ),
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(1);
                                            } },
                                        this.displayValue(1)
                                    ),
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(2);
                                            } },
                                        this.displayValue(2)
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(3);
                                            } },
                                        this.displayValue(3)
                                    ),
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(4);
                                            } },
                                        this.displayValue(4)
                                    ),
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(5);
                                            } },
                                        this.displayValue(5)
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(6);
                                            } },
                                        this.displayValue(6)
                                    ),
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(7);
                                            } },
                                        this.displayValue(7)
                                    ),
                                    React.createElement(
                                        'td',
                                        { className: 'td', onClick: function onClick() {
                                                _this4.humanMove(8);
                                            } },
                                        this.displayValue(8)
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'scoresTbl' },
                        React.createElement(
                            'table',
                            { className: 'table table-bordered' },
                            React.createElement(
                                'thead',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'th',
                                        { className: 'centre' },
                                        'Your Score'
                                    ),
                                    React.createElement(
                                        'th',
                                        { className: 'centre' },
                                        'Computer Score'
                                    )
                                )
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        this.state.humanScore
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        this.state.aiScore
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.state.message
                    )
                );
            }

            return React.createElement(
                'div',
                null,
                disp
            );
        }
    }]);

    return TicTacToe;
}(React.Component);

var domContainer = document.querySelector("#tictaktoe");
ReactDOM.render(e(TicTacToe), domContainer);
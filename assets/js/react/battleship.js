/* eslint-disable react/react-in-jsx-scope */
'use strict';
// eslint-disable-next-line no-undef

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var e = React.createElement;

var Position = function Position(x, y) {
    _classCallCheck(this, Position);

    this.x = x;
    this.y = y;
    this.hit = false;
};

var directions = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
};

var randomDirection = function randomDirection() {
    var rnd = Math.floor(Math.random() * 4);
    var ret = directions.UP;
    Object.keys(directions).forEach(function (d) {
        if (directions[d] == rnd) {
            ret = directions[d];
        }
    });
    return ret;
};

//this is on a 10 x 10 grid
var MAX = 9;

var playerType = {
    'HUMAN': 'human',
    'AI': 'ai'
};

var ShipType = function ShipType(type, quantity, size) {
    _classCallCheck(this, ShipType);

    this.type = type;
    this.quantity = quantity;
    this.size = size;
};

var fleet = [new ShipType('Aircraft', 1, 5), new ShipType('Battleship', 1, 4), new ShipType('Cruiser', 1, 3), new ShipType('Destroyer', 2, 2), new ShipType('Submarine', 2, 1)];

var Ship = function () {
    function Ship(postion, length, direction, type) {
        _classCallCheck(this, Ship);

        this.positions = [];
        this.sunk = false;
        this.type = type;
        for (var i = 0; i < length; i++) {
            var pos = JSON.parse(JSON.stringify(postion));
            switch (direction) {
                case directions.UP:
                    pos.y += i;
                    break;
                case directions.DOWN:
                    pos.y -= i;
                    break;
                case directions.LEFT:
                    pos.x -= i;
                    break;
                case directions.RIGHT:
                    pos.x += i;
                    break;
            }
            this.positions.push(pos);
        }
    }

    _createClass(Ship, [{
        key: 'hit',
        value: function hit(x, y) {
            //this position has been hit
            for (var i = 0; i < this.positions.length; i++) {
                if (this.positions[i].x == x && this.positions[i].y == y) {
                    this.positions[i].hit = true;
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'isSunk',
        value: function isSunk() {
            if (this.sunk) {
                return true;
            }
            for (var i = 0; i < this.positions.length; i++) {
                if (!this.positions[i].hit) {
                    return false;
                }
            }
            this.sunk = true;
            return true;
        }
    }, {
        key: 'checkValid',
        value: function checkValid() {
            //makes sure that the x & y are greater than or equal to 0 and less than or equal to 10
            for (var i = 0; i < this.positions.length; i++) {
                if (this.positions[i].x < 0 || this.positions[i].y < 0 || this.positions[i].x > MAX || this.positions[i].y > MAX) {
                    return false;
                }
            }
            return true;
        }
    }]);

    return Ship;
}();

var Gameboard = function () {
    function Gameboard() {
        _classCallCheck(this, Gameboard);

        this.ships = [];
        this.misses = [];
    }

    _createClass(Gameboard, [{
        key: 'placeShip',
        value: function placeShip(position, length, direction, type) {
            var newShip = new Ship(position, length, direction, type);
            //Make sure that the new ship isn't on top of any other ships
            for (var i = 0; i < this.ships.length; i++) {
                //console.log('i',i);
                for (var j = 0; j < this.ships[i].positions.length; j++) {
                    //console.log('j',j);
                    for (var s = 0; s < newShip.positions.length; s++) {
                        //console.log('current ship x', this.ships[i].positions[j].x, 'new ship x',newShip.positions[s].x, 'current ship y',this.ships[i].positions[j].y, 'new ship y',newShip.positions[s].y);
                        if (newShip.positions[s].x == this.ships[i].positions[j].x && newShip.positions[s].y == this.ships[i].positions[j].y) {
                            //It overlaps with an existing ship
                            return false;
                        }
                    }
                }
            }
            if (newShip.checkValid()) {
                this.ships.push(newShip);
                return true;
            }
            return false;
        }
    }, {
        key: 'receiveAttack',
        value: function receiveAttack(x, y) {
            for (var i = 0; i < this.ships.length; i++) {
                if (this.ships[i].hit(x, y)) {
                    var didsink = this.ships[i].isSunk();
                    return { result: 'HIT', msg: didsink ? 'Sunk ' + this.ships[i].type : 'Hit' };
                }
            }
            this.misses.push({ x: x, y: y });
            return { result: 'MISS', msg: 'Miss' };
        }
    }, {
        key: 'getStats',
        value: function getStats() {
            //console.log(this.ships.filter(ship => {return ship.sunk;}));
            return {
                numShips: this.ships.length,
                numSunkShips: this.ships.filter(function (ship) {
                    return ship.sunk;
                }).length,
                numMisses: this.misses.length,
                allSunk: this.ships.length == this.ships.filter(function (ship) {
                    return ship.sunk;
                }).length
            };
        }
    }, {
        key: 'getLegalMovesAgainstThisGameboard',
        value: function getLegalMovesAgainstThisGameboard() {
            //This should return a grid of the board that hasn't been shot at
            var ret = [];
            var hitBoard = [].concat(_toConsumableArray(this.misses));
            this.ships.forEach(function (ship) {
                ship.positions.forEach(function (pos) {
                    if (pos.hit) {
                        hitBoard.push({ x: pos.x, y: pos.y });
                    }
                });
            });

            for (var i = 0; i <= MAX; i++) {
                for (var j = 0; j <= MAX; j++) {
                    ret.push({ x: i, y: j });
                }
            }

            //console.log('hitboard',hitBoard);

            //ret = ret.filter(element => !hitBoard.includes(element));
            ret = ret.filter(function (element) {
                return !hitBoard.find(function (obj) {
                    return obj.x == element.x && obj.y == element.y;
                });
            });
            return ret;
        }
    }, {
        key: 'getCurrentGrid',
        value: function getCurrentGrid() {
            var ret = [];
            this.ships.forEach(function (ship) {
                ship.positions.forEach(function (pos) {
                    ret.push({
                        x: pos.x,
                        y: pos.y,
                        ship: true,
                        hit: pos.hit,
                        shiptype: ship.type
                    });
                });
            });
            this.misses.forEach(function (miss) {
                ret.push({
                    x: miss.x,
                    y: miss.y,
                    ship: false,
                    hit: true,
                    shiptype: ''
                });
            });

            var grid = [];

            var _loop = function _loop(i) {
                var row = [];

                var _loop2 = function _loop2(j) {
                    var getRetIndex = ret.findIndex(function (r) {
                        return r.x == j && r.y == i;
                    });
                    if (getRetIndex > -1) {
                        row.push(ret[getRetIndex]);
                    } else {
                        row.push({ x: j, y: i });
                    }
                };

                for (var j = 0; j <= MAX; j++) {
                    _loop2(j);
                }
                grid.push(row);
            };

            for (var i = 0; i <= MAX; i++) {
                _loop(i);
            }
            //console.log('grid',grid, ret);
            return grid;
        }
    }]);

    return Gameboard;
}();

var Player = function () {
    function Player(playerType) {
        _classCallCheck(this, Player);

        this.playerType = playerType;
        this.gameBoard = new Gameboard();
        //if (playerType == playerType.AI) {
        this.setupBoard();
        console.log('setup board');
        //}
    }

    _createClass(Player, [{
        key: 'setupBoard',
        value: function setupBoard() {
            var _this = this;

            //This is to setup the board with the ships in fleet
            fleet.forEach(function (st) {
                for (var i = 0; i < st.quantity; i++) {
                    var dir = randomDirection();
                    var x = Math.floor(Math.random() * MAX);
                    var y = Math.floor(Math.random() * MAX);
                    var pos = new Position(x, y);
                    while (!_this.gameBoard.placeShip(pos, st.size, dir, st.type)) {
                        dir = randomDirection();
                        x = Math.floor(Math.random() * MAX);
                        y = Math.floor(Math.random() * MAX);
                        pos.x = x;
                        pos.y = y;
                    }
                }
            });
        }
    }, {
        key: 'getRandomMoveAgainstPlayer',
        value: function getRandomMoveAgainstPlayer() {
            var possibleMoves = this.gameBoard.getLegalMovesAgainstThisGameboard();
            var moveNo = Math.floor(Math.random() * possibleMoves.length);
            return possibleMoves[moveNo];
        }
    }]);

    return Player;
}();

// eslint-disable-next-line no-undef


var Battleship = function (_React$Component) {
    _inherits(Battleship, _React$Component);

    function Battleship(props) {
        _classCallCheck(this, Battleship);

        var _this2 = _possibleConstructorReturn(this, (Battleship.__proto__ || Object.getPrototypeOf(Battleship)).call(this, props));

        _this2.state = {
            hasChosenOpponent: false,
            player1: new Player(playerType.HUMAN),
            turn: 0,
            msg: 'Please setup your ships',
            currentPlayer: 1,
            changeOver: false,
            oppenentAI: false
        };

        _this2.chooseHuman = _this2.chooseHuman.bind(_this2);
        _this2.chooseAI = _this2.chooseAI.bind(_this2);
        _this2.recieveDevice = _this2.recieveDevice.bind(_this2);
        _this2.sendAttack = _this2.sendAttack.bind(_this2);
        _this2.win = _this2.win.bind(_this2);
        //this.state.player1.setupBoard();
        return _this2;
    }

    _createClass(Battleship, [{
        key: 'chooseHuman',
        value: function chooseHuman() {
            this.setState({
                hasChosenOpponent: true,
                player2: new Player(playerType.HUMAN)
            });
        }
    }, {
        key: 'chooseAI',
        value: function chooseAI() {
            this.setState({
                hasChosenOpponent: true,
                player2: new Player(playerType.AI),
                oppenentAI: true
            });
        }
    }, {
        key: 'recieveDevice',
        value: function recieveDevice() {
            this.setState({
                changeOver: false /*,
                                  currentPlayer: this.state.currentPlayer == 1? 2 : 1,
                                  turn: this.state.turn + (this.state.currentPlayer == 2? 1 : 0)*/
            });
        }
    }, {
        key: 'sendAttack',
        value: function sendAttack(x, y) {
            var _this3 = this;

            var result = (this.state.currentPlayer == 1 ? this.state.player2 : this.state.player1).gameBoard.receiveAttack(x, y);
            console.log('result', result, 'x', x, 'y', y, 'current player', this.state.currentPlayer);
            this.setState({
                turn: this.state.turn + (this.state.currentPlayer == 1 ? 0 : 1),
                currentPlayer: this.state.currentPlayer == 1 ? 2 : 1,
                changeOver: !this.state.oppenentAI,
                msg: this.state.currentPlayer == 2 && this.state.oppenentAI ? this.state.msg : result.msg
            }, function () {
                //callback event
                if (_this3.state.oppenentAI && _this3.state.currentPlayer == 2) {
                    var rndMove = _this3.state.player1.getRandomMoveAgainstPlayer();
                    _this3.sendAttack(rndMove.x, rndMove.y);
                }
            });
        }
    }, {
        key: 'win',
        value: function win() {
            this.setState({
                turn: 0,
                hasChosenOpponent: false,
                currentPlayer: 1,
                player1: new Player(playerType.HUMAN)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var disp = void 0;
            if (this.state.hasChosenOpponent) {
                /*disp = (
                <p>
                    Test
                </p>
                );*/
                if (this.state.changeOver) {
                    disp = React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'h1',
                            { className: 'centerItem' },
                            'Battleship'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Please pass device to player ',
                            this.state.currentPlayer
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Message:'
                            ),
                            ' ',
                            this.state.msg
                        ),
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary', onClick: this.recieveDevice },
                            'Continue'
                        )
                    );
                } else {
                    //Show the boards.
                    //TODO if turn is 0 then allow user to setup the board
                    //show your board to the left and their board to the right (without the ships)
                    var p1Stats = this.state.player1.gameBoard.getStats();
                    var p2Stats = this.state.player2.gameBoard.getStats();

                    if (p1Stats.allSunk || p2Stats.allSunk) {
                        this.win();
                    }

                    var tbl = (this.state.currentPlayer == 1 ? this.state.player1 : this.state.player2).gameBoard.getCurrentGrid().map(function (arr, rowIndex) {
                        return React.createElement(
                            'tr',
                            { key: rowIndex },
                            arr.map(function (a, colIndex) {
                                return React.createElement(
                                    'td',
                                    { key: colIndex, className: (a.ship ? 'ship ' : '') + (a.hit ? 'hit' : '') },
                                    a.hit ? 'X' : a.shiptype ? a.shiptype[0] : ''
                                );
                            })
                        );
                    });
                    var tblTheirBoard = (this.state.currentPlayer == 1 ? this.state.player2 : this.state.player1).gameBoard.getCurrentGrid().map(function (arr, rowIndex) {
                        return React.createElement(
                            'tr',
                            { key: rowIndex },
                            arr.map(function (a, colIndex) {
                                return React.createElement('td', { key: colIndex, className: a.hit ? 'hit' : '', onClick: function onClick() {
                                        if (!a.hit) {
                                            _this4.sendAttack(colIndex, rowIndex);
                                        }
                                    } });
                            })
                        );
                    });
                    disp = React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'h1',
                            { className: 'centerItem' },
                            'Battleship'
                        ),
                        React.createElement(
                            'div',
                            { className: 'container' },
                            React.createElement(
                                'div',
                                { className: 'board' },
                                React.createElement(
                                    'table',
                                    { className: 'grid' },
                                    React.createElement(
                                        'thead',
                                        null,
                                        React.createElement(
                                            'tr',
                                            null,
                                            React.createElement(
                                                'th',
                                                { colSpan: '10', className: 'center' },
                                                'Your Board'
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'tbody',
                                        null,
                                        tbl
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'board' },
                                React.createElement(
                                    'table',
                                    { className: 'grid' },
                                    React.createElement(
                                        'thead',
                                        null,
                                        React.createElement(
                                            'tr',
                                            null,
                                            React.createElement(
                                                'th',
                                                { colSpan: '10', className: 'center' },
                                                'Oppenent Board'
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'tbody',
                                        null,
                                        tblTheirBoard
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Current Player:'
                            ),
                            ' ',
                            this.state.currentPlayer
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Turn:'
                            ),
                            ' ',
                            this.state.turn
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Message:'
                            ),
                            ' ',
                            this.state.msg
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Number of own ships:'
                            ),
                            ' ',
                            (this.currentPlayer == 1 ? p1Stats : p2Stats).numShips - (this.currentPlayer == 1 ? p1Stats : p2Stats).numSunkShips
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Number of oppenent ships:'
                            ),
                            ' ',
                            (this.currentPlayer == 2 ? p1Stats : p2Stats).numShips - (this.currentPlayer == 2 ? p1Stats : p2Stats).numSunkShips
                        )
                    );
                }
            } else {
                disp = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h1',
                        { className: 'centerItem' },
                        'Battleship'
                    ),
                    React.createElement(
                        'fieldset',
                        null,
                        React.createElement(
                            'legend',
                            null,
                            'Please chose oppenent'
                        ),
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary', onClick: this.chooseHuman },
                            'Human'
                        ),
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary', onClick: this.chooseAI },
                            'AI'
                        )
                    )
                );
            }
            return React.createElement(
                'div',
                { className: 'flex-container' },
                React.createElement('br', null),
                disp
            );
        }
    }]);

    return Battleship;
}(React.Component);

var domContainer = document.querySelector('#battleship');
// eslint-disable-next-line no-undef
var root = ReactDOM.createRoot(domContainer);
root.render(e(Battleship));
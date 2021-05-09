'use strict';

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
                    this.ships[i].isSunk();
                    return 'HIT';
                }
            }
            this.misses.push({ x: x, y: y });
            return 'MISS';
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
    }]);

    return Gameboard;
}();

var Player = function () {
    function Player(playerType) {
        _classCallCheck(this, Player);

        this.playerType = playerType;
        this.gameBoard = new Gameboard();
    }

    _createClass(Player, [{
        key: 'setupBoard',
        value: function setupBoard() {
            var _this = this;

            //This is to setup the board with the ships in fleet
            fleet.forEach(function (st) {
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

var Battleship = function (_React$Component) {
    _inherits(Battleship, _React$Component);

    function Battleship(props) {
        _classCallCheck(this, Battleship);

        var _this2 = _possibleConstructorReturn(this, (Battleship.__proto__ || Object.getPrototypeOf(Battleship)).call(this, props));

        _this2.state = {};
        return _this2;
    }

    _createClass(Battleship, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                'Test'
            );
        }
    }]);

    return Battleship;
}(React.Component);

var domContainer = document.querySelector("#battleship");
ReactDOM.render(e(Battleship), domContainer);
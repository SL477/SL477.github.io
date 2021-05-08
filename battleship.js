'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var e = React.createElement;

var Position = function Position(x, y) {
    _classCallCheck(this, Position);

    this.x = x;
    this.y = y;
    this.hit = false;
};

var directions = {
    UP: 1,
    DOWN: -1,
    LEFT: 2,
    RIGHT: -2
};

var Ship = function () {
    function Ship(postion, length, direction) {
        _classCallCheck(this, Ship);

        this.positions = [];
        this.sunk = false;
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
        value: function placeShip(position, length, direction) {
            var newShip = new Ship(position, length, direction);
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
            this.ships.push(newShip);
            return true;
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
    }]);

    return Gameboard;
}();

var Battleship = function (_React$Component) {
    _inherits(Battleship, _React$Component);

    function Battleship(props) {
        _classCallCheck(this, Battleship);

        var _this = _possibleConstructorReturn(this, (Battleship.__proto__ || Object.getPrototypeOf(Battleship)).call(this, props));

        _this.state = {};
        return _this;
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
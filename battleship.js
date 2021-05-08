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
        key: "hit",
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
        key: "isSunk",
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

var Gameboard = function (_React$Component) {
    _inherits(Gameboard, _React$Component);

    function Gameboard(props) {
        _classCallCheck(this, Gameboard);

        var _this = _possibleConstructorReturn(this, (Gameboard.__proto__ || Object.getPrototypeOf(Gameboard)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Gameboard, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                "Test"
            );
        }
    }]);

    return Gameboard;
}(React.Component);

var domContainer = document.querySelector("#battleship");
ReactDOM.render(e(Gameboard), domContainer);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var timer = void 0;

var GameOfLife = function (_React$Component) {
    _inherits(GameOfLife, _React$Component);

    function GameOfLife(props) {
        _classCallCheck(this, GameOfLife);

        var _this = _possibleConstructorReturn(this, (GameOfLife.__proto__ || Object.getPrototypeOf(GameOfLife)).call(this, props));

        _this.state = {
            grid: [],
            rows: 16,
            cols: 16,
            started: false,
            generation: 0,
            isDebug: false
        };

        _this.createGrid = _this.createGrid.bind(_this);
        _this.toggleLive = _this.toggleLive.bind(_this);
        _this.calcNeighbors = _this.calcNeighbors.bind(_this);
        _this.incrementGeneration = _this.incrementGeneration.bind(_this);
        _this.start = _this.start.bind(_this);
        _this.setGenerations = _this.setGenerations.bind(_this);
        _this.stop = _this.stop.bind(_this);
        _this.clearGrid = _this.clearGrid.bind(_this);
        return _this;
    }

    _createClass(GameOfLife, [{
        key: "createGrid",
        value: function createGrid(isRandom) {
            var newGrid = [];
            for (var i = 0; i < this.state.rows; i++) {
                var newRow = [];
                for (var j = 0; j < this.state.cols; j++) {
                    if (isRandom) {
                        if (Math.floor(Math.random() * 10) > 7) {
                            newRow.push(1);
                        } else {
                            newRow.push(0);
                        }
                    } else {
                        newRow.push(0);
                    }
                }
                newGrid.push(newRow);
            }
            this.setState({ grid: newGrid });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.createGrid(true);
            this.start();
        }
    }, {
        key: "toggleLive",
        value: function toggleLive(row, col, current) {
            if (!this.state.started) {
                var newGrid = this.state.grid;
                newGrid[row][col] = current == 0 ? 1 : 0;
                this.setState({ grid: newGrid });
            }
        }
    }, {
        key: "calcNeighbors",
        value: function calcNeighbors(row, col) {
            var ret = 0;
            // check all of the neighbouring cells and see if they are live or dead and return the number of live cells
            var hasLeft = col > 0;
            var hasRight = col < this.state.cols - 1;
            if (row > 0) {
                // has cells above
                if (this.state.grid[row - 1][col] === 1) {
                    ret += 1;
                }
                if (hasLeft && this.state.grid[row - 1][col - 1] === 1) {
                    ret += 1;
                }
                if (hasRight && this.state.grid[row - 1][col + 1] === 1) {
                    ret += 1;
                }
            }

            if (hasLeft && this.state.grid[row][col - 1] === 1) {
                ret += 1;
            }

            if (hasRight && this.state.grid[row][col + 1] === 1) {
                ret += 1;
            }

            //below row
            if (row < this.state.rows - 1) {
                if (this.state.grid[row + 1][col] === 1) {
                    ret += 1;
                }
                if (hasLeft && this.state.grid[row + 1][col - 1] === 1) {
                    ret += 1;
                }
                if (hasRight && this.state.grid[row + 1][col + 1] === 1) {
                    ret += 1;
                }
            }

            return ret;
        }
    }, {
        key: "incrementGeneration",
        value: function incrementGeneration() {
            if (this.state.started) {
                //console.log("generation");
                var newGrid = [].concat(_toConsumableArray(this.state.grid));
                for (var i = 0; i < this.state.rows; i++) {
                    for (var j = 0; j < this.state.cols; j++) {
                        var numNeighbours = this.calcNeighbors(i, j);
                        if (this.state.grid[i][j] === 1) {
                            // live cell
                            if (numNeighbours === 2 || numNeighbours === 3) {
                                newGrid[i][j] = 1;
                            } else {
                                newGrid[i][j] = 0;
                            }
                        } else {
                            // dead cell
                            if (numNeighbours === 3) {
                                newGrid[i][j] = 1;
                            } else {
                                newGrid[i][j] = 0;
                            }
                        }
                    }
                }
                this.setState({
                    grid: newGrid,
                    generation: this.state.generation + 1
                });
            }
        }
    }, {
        key: "start",
        value: function start() {
            this.setState({ started: true }, this.setGenerations());
        }
    }, {
        key: "setGenerations",
        value: function setGenerations() {
            //console.log("called");
            timer = setInterval(this.incrementGeneration, 1000);
        }
    }, {
        key: "stop",
        value: function stop() {
            clearInterval(timer);
            this.setState({ started: false });
        }
    }, {
        key: "clearGrid",
        value: function clearGrid() {
            this.stop();
            this.createGrid(false);
            this.setState({ started: false, generation: 0 });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var grid = this.state.grid.map(function (row, i) {
                return React.createElement(
                    "div",
                    { key: i, className: "row" },
                    row.map(function (col, ind) {
                        return React.createElement(
                            "div",
                            { key: ind, className: col === 1 ? "col hovered" : "col", onClick: function onClick() {
                                    _this2.toggleLive(i, ind, col);
                                } },
                            _this2.state.isDebug ? _this2.calcNeighbors(i, ind) : null
                        );
                    })
                );
            });
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "flex-container" },
                    grid
                ),
                React.createElement(
                    "p",
                    null,
                    "Generation: ",
                    this.state.generation
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-primary", onClick: this.state.started ? this.stop : this.start },
                    "Start/Pause"
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: this.clearGrid },
                    "Clear"
                )
            );
        }
    }]);

    return GameOfLife;
}(React.Component);

var domContainer = document.querySelector("#gameOfLife");
ReactDOM.render(e(GameOfLife), domContainer);
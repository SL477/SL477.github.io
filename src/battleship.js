'use strict';
const e = React.createElement;

class Position {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.hit = false;
    }
}

const directions = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
};

const randomDirection = () => {
    let rnd = Math.floor(Math.random() * 4);
    let ret = directions.UP;
    Object.keys(directions).forEach(d => {
        if (directions[d] == rnd) {
            ret = directions[d];
        }
    });
    return ret;
};

//this is on a 10 x 10 grid
const MAX = 9;

const playerType = {
    'HUMAN': 'human',
    'AI': 'ai'
};

class ShipType {
    constructor(type, quantity, size) {
        this.type = type;
        this.quantity = quantity;
        this.size = size;
    }
}

const fleet = [
    new ShipType('Aircraft', 1, 5),
    new ShipType('Battleship', 1, 4),
    new ShipType('Cruiser', 1, 3),
    new ShipType('Destroyer', 2, 2),
    new ShipType('Submarine', 2, 1)
];

class Ship {
    constructor(postion, length, direction, type) {
        this.positions = [];
        this.sunk = false;
        this.type = type;
        for (let i = 0; i < length; i++) {
            let pos = JSON.parse(JSON.stringify(postion));
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

    hit(x,y) {
        //this position has been hit
        for (let i = 0; i < this.positions.length; i++) {
            if (this.positions[i].x == x && this.positions[i].y == y) {
                this.positions[i].hit = true;
                return true;
            }
        }
        return false;
    }

    isSunk() {
        if (this.sunk) {
            return true;
        }
        for (let i = 0; i < this.positions.length; i++) {
            if (!this.positions[i].hit) {
                return false;
            }
        }
        this.sunk = true;
        return true;
    }

    checkValid() {
        //makes sure that the x & y are greater than or equal to 0 and less than or equal to 10
        for (let i = 0; i < this.positions.length; i++) {
            if (this.positions[i].x < 0 || this.positions[i].y < 0 || this.positions[i].x > MAX || this.positions[i].y > MAX) {
                return false;
            }
        }
        return true;
    }
}

class Gameboard {
    constructor() {
        this.ships = [];
        this.misses = [];
    }

    placeShip(position, length, direction, type) {
        let newShip = new Ship(position,length,direction, type);
        //Make sure that the new ship isn't on top of any other ships
        for (let i = 0; i < this.ships.length; i++) {
            //console.log('i',i);
            for (let j = 0; j < this.ships[i].positions.length; j++) {
                //console.log('j',j);
                for (let s = 0; s < newShip.positions.length; s++) {
                    //console.log('current ship x', this.ships[i].positions[j].x, 'new ship x',newShip.positions[s].x, 'current ship y',this.ships[i].positions[j].y, 'new ship y',newShip.positions[s].y);
                    if ((newShip.positions[s].x == this.ships[i].positions[j].x) && (newShip.positions[s].y == this.ships[i].positions[j].y)) {
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

    receiveAttack(x,y) {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].hit(x,y)) {
                this.ships[i].isSunk();
                return 'HIT';
            }
        }
        this.misses.push({x: x, y: y});
        return 'MISS';
    }

    getStats() {
        //console.log(this.ships.filter(ship => {return ship.sunk;}));
        return {
            numShips: this.ships.length,
            numSunkShips: this.ships.filter(ship => {return ship.sunk;}).length,
            numMisses: this.misses.length,
            allSunk: this.ships.length == this.ships.filter(ship => {return ship.sunk;}).length
        };
    }

    getLegalMovesAgainstThisGameboard() {
        //This should return a grid of the board that hasn't been shot at
        let ret = [];
        let hitBoard = [...this.misses];
        this.ships.forEach(ship => {
            ship.positions.forEach(pos => {
                if (pos.hit) {
                    hitBoard.push({x: pos.x, y: pos.y});
                }
            });
        });

        for (let i = 0; i <= MAX; i++) {
            for (let j = 0; j <= MAX; j++) {
                ret.push({x: i, y: j});
            }
        }

        //console.log('hitboard',hitBoard);

        //ret = ret.filter(element => !hitBoard.includes(element));
        ret = ret.filter(element => {
            return !hitBoard.find(obj => {
                return obj.x == element.x && obj.y == element.y;
            })
        });
        return ret;
    }

    getCurrentGrid() {
        let ret = [];
        this.ships.forEach(ship => {
            ship.positions.forEach(pos => {
                ret.push({
                    x: pos.x,
                    y: pos.y,
                    ship: true,
                    hit: pos.hit,
                    shiptype: ship.type
                });
            });
        });
        this.misses.forEach(miss => {
            ret.push({
                x: miss.x,
                y: miss.y,
                ship: false,
                hit: true,
                shiptype: ''
            })
        });

        let grid = [];
        for (let i = 0; i <= MAX; i++) {
            let row = [];
            for (let j = 0; j <= MAX; j++) {
                let getRetIndex = ret.findIndex(r => {
                    return r.x == j && r.y == i;
                });
                if (getRetIndex > -1) {
                    row.push(ret[getRetIndex]);
                }
                else {
                    row.push({x: j, y: i});
                }
            }
            grid.push(row);
        }
        //console.log('grid',grid, ret);
        return grid;
    }
}

class Player {
    constructor(playerType) {
        this.playerType = playerType;
        this.gameBoard = new Gameboard();
        //if (playerType == playerType.AI) {
            this.setupBoard();
            console.log('setup board');
        //}
    }

    setupBoard() {
        //This is to setup the board with the ships in fleet
        fleet.forEach(st => {
            for (let i = 0; i < st.quantity; i++) {
                let dir = randomDirection();
                let x = Math.floor(Math.random() * MAX);
                let y = Math.floor(Math.random() * MAX);
                let pos = new Position(x,y);
                while (!this.gameBoard.placeShip(pos, st.size,dir, st.type)) {
                    dir = randomDirection();
                    x = Math.floor(Math.random() * MAX);
                    y = Math.floor(Math.random() * MAX);
                    pos.x = x;
                    pos.y = y;
                }
            }
        });
    }

    getRandomMoveAgainstPlayer() {
        let possibleMoves = this.gameBoard.getLegalMovesAgainstThisGameboard();
        let moveNo = Math.floor(Math.random() * possibleMoves.length);
        return possibleMoves[moveNo];
    }
}

class Battleship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasChosenOpponent: false,
            player1: new Player(playerType.HUMAN),
            turn: 0,
            msg: 'Please setup your ships',
            currentPlayer: 1,
            changeOver: false,
            oppenentAI: false
        };

        this.chooseHuman = this.chooseHuman.bind(this);
        this.chooseAI = this.chooseAI.bind(this);
        this.recieveDevice = this.recieveDevice.bind(this);
        this.sendAttack = this.sendAttack.bind(this);
        this.win = this.win.bind(this);
        //this.state.player1.setupBoard();
    }

    chooseHuman() {
        this.setState({
            hasChosenOpponent: true,
            player2: new Player(playerType.HUMAN)
        });
    }

    chooseAI() {
        this.setState({
            hasChosenOpponent: true,
            player2: new Player(playerType.AI),
            oppenentAI: true
        });
    }

    recieveDevice() {
        this.setState({
            changeOver: false/*,
            currentPlayer: this.state.currentPlayer == 1? 2 : 1,
            turn: this.state.turn + (this.state.currentPlayer == 2? 1 : 0)*/
        });
    }

    sendAttack(x,y) {
        let result = (this.state.currentPlayer == 1? this.state.player2 : this.state.player1).gameBoard.receiveAttack(x,y);
        console.log('result', result, 'x',x,'y',y, 'current player', this.state.currentPlayer);
        this.setState({
            turn: this.state.turn + (this.state.currentPlayer == 1? 0 : 1),
            currentPlayer: this.state.currentPlayer == 1? 2 : 1,
            changeOver: !this.state.oppenentAI
        }, () => {
            //callback event
            if (this.state.oppenentAI && this.state.currentPlayer == 2) {
                let rndMove = this.state.player1.getRandomMoveAgainstPlayer();
                this.sendAttack(rndMove.x, rndMove.y);
            }
        });
    }

    win() {
        this.setState({
            turn: 0,
            hasChosenOpponent: false,
            currentPlayer: 1,
            player1: new Player(playerType.HUMAN)
        });
    }

    render() {
        let disp;
        if (this.state.hasChosenOpponent) {
            /*disp = (
            <p>
                Test
            </p>
            );*/
            if (this.state.changeOver) {
                disp = (
                    <div>
                        <h1 className="centerItem">Battleship</h1>
                        <p>Please pass device to player {this.state.currentPlayer}</p>
                        <button className="btn btn-primary" onClick={this.recieveDevice}>Continue</button>
                    </div>
                );
            }
            else {
                //Show the boards.
                //TODO if turn is 0 then allow user to setup the board
                //show your board to the left and their board to the right (without the ships)
                let p1Stats = this.state.player1.gameBoard.getStats();
                let p2Stats = this.state.player2.gameBoard.getStats();

                if (p1Stats.allSunk || p2Stats.allSunk) {
                    this.win();
                }
                
                let tbl = (
                    (this.state.currentPlayer == 1? this.state.player1 : this.state.player2).gameBoard.getCurrentGrid().map((arr, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {arr.map((a, colIndex) => {
                                    return (
                                        <td key={colIndex} className={(a.ship? 'ship ' : '') + (a.hit? 'hit' : '')}>{a.hit? 'X' : a.shiptype? a.shiptype[0] : ''}</td>
                                    );
                                })}
                            </tr>
                        );
                    })
                );
                let tblTheirBoard = (
                    (this.state.currentPlayer == 1? this.state.player2 : this.state.player1).gameBoard.getCurrentGrid().map((arr, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {arr.map((a, colIndex) => {
                                    return (
                                        <td key={colIndex} className={(a.hit? 'hit' : '')/* + (a.ship? ' ship' : '')*/} onClick={() => {if (!a.hit) {this.sendAttack(colIndex,rowIndex)}}}></td>
                                    );
                                })}
                            </tr>
                        );
                    })
                );
                disp = (
                    <div>
                        <h1 className="centerItem">Battleship</h1>
                        <div className="container">
                            <div className="board">
                                <table className="grid">
                                    <thead>
                                        <tr>
                                            <th colSpan="10" className="center">
                                                Your Board
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tbl}
                                    </tbody>
                                </table>
                            </div>
                            <div className="board">
                                <table className="grid">
                                    <thead>
                                        <tr>
                                            <th colSpan="10" className="center">
                                                Oppenent Board
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tblTheirBoard}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p>
                            <b>Current Player:</b> {this.state.currentPlayer}
                        </p>
                        <p>
                            <b>Turn:</b> {this.state.turn}
                        </p>
                        <p>
                            <b>Message:</b> {this.state.msg}
                        </p>
                        <p>
                            <b>Number of own ships:</b> {(this.currentPlayer == 1? p1Stats : p2Stats).numShips - (this.currentPlayer == 1? p1Stats : p2Stats).numSunkShips}
                        </p>
                        <p>
                            <b>Number of oppenent ships:</b> {(this.currentPlayer == 2? p1Stats : p2Stats).numShips - (this.currentPlayer == 2? p1Stats : p2Stats).numSunkShips}
                        </p>
                    </div>
                );
            }
        }
        else {
            disp = (
                <div>
                    <h1 className="centerItem">Battleship</h1>
                    <fieldset>
                        <legend>Please chose oppenent</legend>
                        <button className="btn btn-primary" onClick={this.chooseHuman}>Human</button>
                        <button className="btn btn-primary" onClick={this.chooseAI}>AI</button>
                    </fieldset>
                </div>
            );
        }
        return (
            <div  className="flex-container">
                <br/>
                {disp}
            </div>
        );
    }
}

const domContainer = document.querySelector("#battleship");
ReactDOM.render(e(Battleship), domContainer);
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
    UP: 1,
    DOWN: -1,
    LEFT: 2,
    RIGHT: -2
};

class Ship {
    constructor(postion, length, direction) {
        this.positions = [];
        this.sunk = false;
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
}

class Gameboard {
    constructor() {
        this.ships = [];
        this.misses = [];
    }

    placeShip(position, length, direction) {
        let newShip = new Ship(position,length,direction);
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
        this.ships.push(newShip);
        return true;
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
}

class Battleship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p>
                Test
            </p>
        );
    }
}

const domContainer = document.querySelector("#battleship");
ReactDOM.render(e(Battleship), domContainer);
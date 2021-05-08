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

class Gameboard extends React.Component {
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
ReactDOM.render(e(Gameboard), domContainer);
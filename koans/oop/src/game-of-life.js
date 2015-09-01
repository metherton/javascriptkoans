var SAMURAIPRINCIPLE = {};

SAMURAIPRINCIPLE.GameOfLife = function() {

    var cells = [], row, column;

    var self = this;

    (function initializeGame() {
        for (row = 0; row < 10; row++) {
            for (column = 0; column < 10; column++) {
                cells[row + '_' + column] = false;
            }
        }
    }());

    this.getCells = function() {
        return cells;
    };


    this.isCellAlive = function(row, column) {
        return cells[row + '_' + column] != undefined &&
            cells[row + '_' + column] === true;
    };

    this.isCellAliveInNextGeneration = function (isCellAlive, numberOfNeighbours) {
        if (isCellAlive && numberOfNeighbours < 2) {
            return false;
        } else if (isCellAlive && (numberOfNeighbours === 2 || numberOfNeighbours ===3)) {
            return true;
        } else if (isCellAlive && numberOfNeighbours > 3) {
            return false;
        } else if (!isCellAlive && numberOfNeighbours === 3) {
            return true;
        }
    };


    this.toggleCellState = function(row, column) {
        cells[row + '_' + column] = !cells[row + '_' + column];
        return this;
    };

    this.tick = function() {
        var cellsNextIteration = [];
        for (row = 0; row < 10; row++) {
            for (column = 0; column < 10; column++) {
                cellsNextIteration[row + '_' + column] = cells[row + '_' + column];
            }
        }
        for (row = 0; row < 10; row++) {
            for (column = 0; column < 10; column++) {
                var numberOfLiveNeighbours = 0;
                for (var columnOffset = -1; columnOffset < 2; columnOffset++) {
                    for (var rowOffset = -1; rowOffset < 2; rowOffset++) {
                        if (rowOffset == 0 & columnOffset == 0) {
                            continue;
                        }
                        if (cellsNextIteration[(row+rowOffset) + '_' + (column+columnOffset)] != undefined &&
                            cellsNextIteration[(row+rowOffset) + '_' + (column+columnOffset)] === true ) {
                            numberOfLiveNeighbours++;
                        }
                    }
                }
                if (cellsNextIteration[row + '_' + column] === true && numberOfLiveNeighbours < 2) {
                    self.toggleCellState(row, column);
                } else if (cellsNextIteration[row + '_' + column] === true &&
                    (numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3)) {
                    cells[row + '_' + column] === true;
                } else if (cellsNextIteration[row + '_' + column] === true &&
                    numberOfLiveNeighbours > 3 ) {
                    self.toggleCellState(row, column);
                } else if (cellsNextIteration[row + '_' + column] === false &&
                    numberOfLiveNeighbours === 3 ) {
                    self.toggleCellState(row, column);
                }
            }
        }

    }

};
class TicTacToe {
    constructor() { 
        this.currentPlayer = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
          ];
        this.score = [0, 0, 0, 0, 0, 0, 0, 0]; //[row1, row2, row3, col1, col2, col3, diag1, diag2]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;

    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayer;
            let point = 0;
            switch (this.currentPlayer) {
                case 'x': 
                  this.currentPlayer = 'o'; 
                  point = 1;
                  break;
                case 'o': 
                  this.currentPlayer = 'x';
                  point = -1;
            }
            //Add point into score array
            this.score[rowIndex] += point;
            this.score[3 + columnIndex] += point;
            if (rowIndex == columnIndex) this.score[6] += point;
            if (rowIndex + columnIndex == 2) this.score[7] += point;
            
        }
    }

    isFinished() {
        if ((this.isDraw()) || (this.getWinner())) {
            return true;
        }
        return false;
    }

    getWinner() {
        for (let i = 0; i < this.score.length; i++) {
            if (this.score[i] == 3) {
                return 'x';
            }
            if (this.score[i] == -3) {
                return 'o';
            }
        }
        return null;

    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.getFieldValue(i, j) === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if ((this.getWinner() === null) && (this.noMoreTurns())) {
            return true;
        }
            return false; 
    }

    getFieldValue(rowIndex, columnIndex) {
        return (this.field[rowIndex][columnIndex]);

    }

   
}

module.exports = TicTacToe;

// https://www.codewars.com/kata/did-i-finish-my-sudoku/train/javascript

// For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/

function doneOrNot(board){
  let rowSum = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};
  let regionSum = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};

  for (let i = 0; i < board.length; i++) {
    if (board[i].reduce((a, b) => a + b) !== 45) return 'Try again!';

    for (let j = 0; j < board[i].length; j++) {
      rowSum[i] += board[j][i];

      if (i < 3 && j < 3) regionSum[0] += board[i][j];
      else if (i < 6 && j < 3) regionSum[1] += board[i][j];
      else if (i < 9 && j < 3) regionSum[2] += board[i][j];
      else if (i < 3 && j < 6) regionSum[3] += board[i][j];
      else if (i < 6 && j < 6) regionSum[4] += board[i][j];
      else if (i < 9 && j < 6) regionSum[5] += board[i][j];
      else if (i < 3 && j < 9) regionSum[6] += board[i][j];
      else if (i < 6 && j < 9) regionSum[7] += board[i][j];
      else if (i < 9 && j < 9) regionSum[8] += board[i][j];
    }
  }

  for (let key in rowSum) {
    if (rowSum[key] !== 45) return 'Try again!';
    if (regionSum[key] !== 45) return 'Try again!';
  }

  return 'Finished!';
}

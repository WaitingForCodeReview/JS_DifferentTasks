/*
If we were to set up a Tic-Tac-Toe game, we would want to know
whether the board's current state is solved, wouldn't we? Our
goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array,
where the value is 0 if a spot is empty, 1 if it is an "X",
or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]

We want our function to return:
-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 */

function isSolved(board) {
    let col = [];
    for(let i = 0; i < board.length; i++)
    {
        col[i] = [];
        for(let j = 0; j < board[i].length; j++)
        {
            col[i].push(board[j][i]);
        }
    }
    let cross1 = [];
    let cross2 = [];
    for(let i = 0; i < board.length; i++)
    {
        cross1.push(board[i][i]);
    }
    for(let i = 0; i < board.length; i++)
    {
        cross2.push(board[i][board.length - 1 - i]);
    }
    let finalCross = [];
    finalCross.push(cross1);
    finalCross.push(cross2);
    for(let i = 0; i < col.length; i++)
    {
        if(board[i].every(item => item == 1)) return 1;
        if(board[i].every(item => item == 2)) return 2;
        if(col[i].every(item => item == 1)) return 1;
        if(col[i].every(item => item == 2)) return 2;
    }
    for(let i = 0; i < finalCross.length; i++)
    {
        if(finalCross[i].every(item => item == 1)) return 1;
        if(finalCross[i].every(item => item == 2)) return 2;
    }
    for(let i = 0; i < col.length; i++)
    {
        if (board[i].some(item => item == 0)) return -1;
        if (col[i].some(item => item == 0)) return -1;
    }
    for(let i = 0; i < finalCross.length; i++)
    {
        if (finalCross[i].some(item => item == 0)) return -1;
    }
    return 0;
}

console.log(isSolved([[0,0,1], [0,1,2], [2,1,0]]));
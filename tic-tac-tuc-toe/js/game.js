class Game{
    constructor(){
        this.Running = true; //boolean - no winner and no tie then the game is still running
        this.winner = null; //no winer when the game starts but it should be 'O' or 'X' 
        this.turn = Game.O; //'O' will start the game
        this.moves = 0; //to check if the game ended or not
        //total squares in the game
        this.squares = new Array(12).fill().map( s => new Square()); //create all the empty square
    }
}

// makeMove(i){
//     if(this.Running && !this.squares[i].value){
//         this.squares[i].value - this.turn;

//         this.moves++;
//         this.checkWinner();
//         this.turn = (this.turn === Game.O) ? Game.X : Game.O;
//     }
// }

// checkWinner(){
//     const winningSequences
// }
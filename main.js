//array for board
board = [
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    ['w', null, 'w', null, 'w', null, 'w', null],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null]
]

function createBoard(){
    //chessboard is a pointer to the HTML
    var theBoard = document.createElement('section');
    theBoard.id = 'checkers';
    document.body.appendChild(theBoard);

    //this is the loop that creates each row 
    for (var i = 0; i < 8; i++){
        //nested loop
        for (var j = 0; j < 8; j++){
            //create 64 squares 
            var square = document.createElement('div');
            //set css classname for each square for smae style 
            square.classList.add("square");
            square.setAttribute("id", "div" + i + j);
            if ((i+j) % 2 == 1){
                //this makes background color
                square.classList.add("black");
                //call for movePiece function
                square.addEventListener("click", movePiece);
            }
            //add this new div to the parent chessboard div
            theBoard.appendChild(square);
            //if the value of the board is not null create the piece 
            if (board[i][j]){
                createPiece("piece" + i + j, "checker-" + board[i][j], square)
            }
        }
    }
}
//this is a pion 
const selValueElem = document.querySelector("#selectedSquare");
//create pieces 
function createPiece(id, pieceClass, theSquare){
    var newPiece = document.createElement('div');
    newPiece.setAttribute("id", id);
    newPiece.classList.add("checker");
    newPiece.classList.add(pieceClass);
    newPiece.addEventListener("click", getPlayerPieces);
    theSquare.appendChild(newPiece);
}
function getPlayerPieces(){
    console.log("piece selected=", event.target.id);

    var selectedPieceId = event.target.id;
    selectedPieceId = selectedPieceId.replace("piece", "");

    selValueElem.dataset.value = selectedPieceId;
}
//allows user to move pieces. Code is iffy
function movePiece(){
    console.log("square selected=", event.target.id);

    var newSquareId = event.target.id;
    newSquareId = newSquareId.replace("div", "");
    newSquareId = newSquareId.replace("piece", "");

    var selectedPieceId = selValueElem.dataset.value;

    if(selectedPieceId != newSquareId){
        var oldSquare = document.getElementById("div" + selectedPieceId);
        var oldSquare = document.getElementById("piece" + selectedPieceId);
        var pieceClass = oldPiece.classList[1];

        oldSquare.removeChild(oldPiece);

        var newSquare = document.getElementById("div" + newSquareId);

        createPiece("piece" + newSquareId, pieceClass, newSquare);
    }
}

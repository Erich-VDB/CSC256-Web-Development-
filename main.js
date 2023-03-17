
var chessboard = document.getElementById("chessboard")
//loop that makes each row. It runs 8 times
    for (var i = 0; i < 8; i++){
        //creates collums 8 times 
        for (var j =0; j < 8; j++){
            var chessSquare = document.createElement('div');
            chessSquare.className = "chess-square";
            if ((i+j) % 2 == 0){
                chessSquare.style.backgroundColor = "green";
            }
            chessboard.appendChild(chessSquare);
        }
    }
//builds a 3 word crossword puzzle 
function loadCrosswordPuzzle(){
    //this is the table 
    var table = document.getElementById("puzzle");
    //the array for the words 
    var arrwords = new Array("JavaScript", "cascade", "html");
    //second row on table 
    var tr = table.rows[1];

    /*this loop prints out the words in the array*/
    for(var i=0; i<arrWords[0].length; i++){
        var cell = tr.cells[i];
        cell.innerText = arrWords[0][i];
    }
    /*this loop prints out the words in the array*/
    for(var i=0; i<arrWords[1].length; i++){
        var trow = table.rows[i];
        var cell = tr.cells[1];
        cell.innerText = arrWords[1][i];
    }
    /*this loop prints out the words in the array*/
    for(var i=0; i<arrWords[2].length; i++){
        var trow = table.rows[i];
        var cell = tr.cells[9];
        cell.innerText = arrWords[2][i];
    }
}
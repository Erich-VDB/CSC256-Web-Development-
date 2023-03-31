//this function gathers the input 
function processForm(){
    //make the div visible 
    document.getElementById("userInfo").style.display = "";
    //first name 
    document.getElementById("firstName").innerText = document.getElementById("fname").value;
    //last name 
    document.getElementById("lastName").innerText = document.getElementById("lname").value;
    //age
    document.getElementById("theAge").innerText = document.getElementById("age").value;
    //email
    document.getElementById("theEmail").innerText = document.getElementById("email").value;
}
function myFunction() {
    document.getElementById("demo").style.color = "red";
  }

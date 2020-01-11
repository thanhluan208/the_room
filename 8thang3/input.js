var btn = document.getElementById("btn")
var unlock = document.getElementById("unlock")
const newLocal = "thanhluan"
unlock.addEventListener('click', function(e){
    var confirmPassword = newLocal
    var password = document.getElementById("pass").value;
    if(password == confirmPassword){
        window.location = "congratulation.html"
    }   
})
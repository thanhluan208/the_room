var unlock = document.getElementById("unlock");
const newLocal = "68911111";
unlock.addEventListener('click', function (e) {
    var confirmPassword = newLocal;
    var password = document.getElementById("pscd").value;
    if (password == confirmPassword){
        window.location = "index.html"
    }})

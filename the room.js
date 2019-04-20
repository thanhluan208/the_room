var table = document.getElementById("table");
var background = document.getElementById("back-ground");
var back = document.getElementById('back');
var key = 0
var match1 = 0
// Initial:
back.style.display = 'none';

table.addEventListener('click',function(e){
    back.style.display = 'block';
    background.setAttribute('class', 'scaleTable');
    addHtml = `
        <div id="bottle"></div>
        <div id = "candle"></div>
        <div id = "broken_glass"></div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    // console.log(document.getElementById("broken_glass"));
    // console.log(document.getElementById("candle"));
    var bottle = document.getElementById("bottle");
    bottle.addEventListener('click', function (e) {
        addHtml = `
        <pre id="messagebottle">The bottle is now filled
        with water. Drink it?</pre>
        `;
        background.insertAdjacentHTML('afterbegin', addHtml);
        var messagebottle = document.getElementById("messagebottle");
        messagebottle.addEventListener('click', function(e) {
            messagebottle.remove();
        });

    });
    var candle = document.getElementById("candle");
    candle.addEventListener('click', function(e){
        console.log("hello")
        addHtml = `
            <div id="oil-lamp">
            <img src="flame.png" alt="oil-lamp">
            </div> 
        `
        background.insertAdjacentHTML('afterbegin', addHtml);
    });
    var broken_glass = document.getElementById("broken_glass");
    broken_glass.addEventListener('click',function(e){
        console.log("hello world");
    });
    backButton1();
    alert("we need the light of salvation or we'll die")
});

var mirror = document.getElementById("mirror");
mirror.addEventListener('click',function(e){
    addHtml =  `
    <div id= "msg">
    <p>Put the newspaper in front of the mirror.</p>
    <p id = "msg1">The number in the middle will help you out</p>
    </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var msg = document.getElementById("msg");
    back.style.display = "block";
    background.setAttribute('class',"scaleMirror");
    backButton()
});
var drawers = document.getElementById("drawers");
drawers.addEventListener('click',function(e){
    addHtml = `
    <div id=safelock>
    <form>
        <label for="pscd">Enter 8-digit passcode: </label>
        <input type="number" id="pscd">
        <input type="button" value="Unlock" id="unlock" />
    </form>
    </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var unlock = document.getElementById("unlock");
    unlock.addEventListener('click', function (e) {
        var confirmPassword = "68911111";
        var password = document.getElementById("pscd").value;
        if (password == confirmPassword) {
            var key = "1";
            alert("you got a key!!")
            // window.location="congratulation.html";
        }
        else {
            alert("Wrong passcode.");
        }
        var btn = e.target;
        var dvi = btn.parentNode;
        dvi.remove();
    });
});
var door = document.getElementById("door");
door.addEventListener('click',function(){
    if (key = "1") {
        window.location = "congratulation.html"
    }
    if (key == 0) {
        alert("you need to find the key!!")
    }
});

var paper = document.getElementById("papers");
paper.addEventListener('click',function(e){
    addHtml = ` 
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var newspaper = document.getElementById("newspaper");
    newspaper.addEventListener('click', function(e) {
        newspaper.remove();
    })
})
var box = document.getElementById("box");
box.addEventListener("click",function(e){
    addHtml = `
        <div id="match">
        <img src="RedTopSafety Matchbox.png" alt="Matchbox">
        </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var match = document.getElementById("match");
    match.addEventListener('click', function(e) {
        match.remove();
        match1 = 1;
        console.log(match1)

    })
})

function backButton1() {
    var back = document.getElementById("back");
    back.addEventListener('click', function(e){
        background.removeAttribute('class', 'scaleTable');
        back.style.display = "none";
        bottle.remove();
        messagebottle.remove();
        broken_glass.remove();
    })
}

function backButton() {
    var back = document.getElementById("back");
    back.addEventListener('click', function(e){
        background.removeAttribute('class', 'scaleTable');
        back.style.display = "none";
        msg.remove();
    })
}
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        var counter = document.getElementById("counter");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
        if (seconds == 0 && mins == 0) {
            console.log("123");
            window.location = "test.html";
        }
    }
    tick();
}
countdown(10)
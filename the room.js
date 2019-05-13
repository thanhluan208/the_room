window.resizeTo(1366,768);
var bag = document.getElementById("bag");
var inventory = document.getElementById("inventory")
var table = document.getElementById("table");
var background = document.getElementById("back-ground");
var back = document.getElementById('back');
var hook = 0
var key = 0
var box = document.getElementById("box");
var match1 = 0
var z = 0
var w = 0
var audio = document.getElementById("myAudio")
// Initial:
function resetBackButton() {
    back.style.transform =  "translate(-109px, -57px)";
    back.children[0].style.width = "20px";
}

back.style.display = 'none';
addHtml = `
        <div id = "key1" style = "display:none">
        <img src = "key.png" alt = "this is a key">
        </div>
        <div id = "match2" style = "display:none">
        <img src = "RedTopSafety Matchbox.png" alt = "this is a match">
        </div>
        <div id = "hook1" style = "display:none">
        <img src = "hook.png" alt = "this is a key">
        </div>`
        inventory.insertAdjacentHTML('afterbegin',addHtml)


box.addEventListener("click",function(e){
    addHtml = `
        <div id="match">
        <img src="RedTopSafety Matchbox.png" alt="Matchbox">
        </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var match = document.getElementById("match");
    match1 = 1;
    match2.style.display = "block"
    back.style.display = "block";
    back.style.transform = "translate(-600px,-300px)"
    back.children[0].style.width = "80px"
    backButton1(match)
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
    var safelock = document.getElementById("safelock")
    var unlock = document.getElementById("unlock");
    unlock.addEventListener('click', function (e) {
        var confirmPassword = "68911111";
        var password = document.getElementById("pscd").value;
        if (password == confirmPassword) {
            hook = 1;
            alert("you got a hook!!,let's hook something")
            hook1.style.display = "block"
        }
        else {
            alert("Wrong passcode.");
        }
    });
    back.style.display = "block";
    back.style.transform = "translate(-600px,-300px)"
    back.children[0].style.width = "80px"
    backButton1(safelock)
});

table.addEventListener('click',function(e){
    back.style.display = 'block';
    background.setAttribute('class', 'scaleTable');
    addHtml = `
        <div id ="bottle"></div>
        <div id = "candle"></div>
        <div id = "broken_glass"></div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    // console.log(document.getElementById("broken_glass"));
    // console.log(document.getElementById("candle"));
    var bottle = document.getElementById("bottle");
    bottle.addEventListener('click', function (e) {
        if(z == 0){
            addHtml = `
            <pre id="messagebottle">The bottle is now filled
            with water. Drink it?</pre>
            <a href="lost.html" id = "a">YES</a>
            <a href="#" id = "nobutton">NO</a>
            `;
            background.insertAdjacentHTML('afterbegin', addHtml);
        }
        var a = document.getElementById("a");
        backButton1(a);
        var nobutton = document.getElementById("nobutton")
        nobutton.addEventListener('click',function(e){
            w = 1
            z = 1
            messagebottle.remove();
            a.remove()
            nobutton.remove()
            console.log(w)
            console.log(z)
        })
        console.log(w)
        console.log(z)
        backButton1(nobutton)
        var messagebottle = document.getElementById("messagebottle");
        messagebottle.addEventListener('click', function(e) {
            messagebottle.remove();
        });
        backButton1(messagebottle);

    bottle.addEventListener('click',function(e){
        if(z == 1 && hook == 1 && w == 1 ){
            alert("you found a KEY !!")
            key = 1
            key1.style.display = "block"
        }
        else
        {
            alert("you dont have a hook")
        }

    })
    });
    var candle = document.getElementById("candle");
    candle.addEventListener('click', function(e){
        if(match1 == 1){
            addHtml = `
                <div id="oil-lamp">
                <img src="flame.png" alt="oil-lamp">
                </div> 
                <div id="findyourself">
                <img src="findyourself.jpg" alt="findyourself">
                </div>
            `
            background.insertAdjacentHTML('afterbegin', addHtml);
            var oil_lamp = document.getElementById("oil-lamp")
            backButton1(oil_lamp)
            var findyourself = document.getElementById("findyourself")
            findyourself.addEventListener("click",function(e){
                alert("you are an artist, a 'drawer' ")
                findyourself.remove();
            })
            backButton1(findyourself)
            }
            else{
                alert("you need match to light the candle")
            }
    });
    var broken_glass = document.getElementById("broken_glass");
    broken_glass.addEventListener('click',function(e){
        addHtml = `
        <div id="oldmessage">
        <img src="1.jpg" alt="Old message with some clue">
        </div>
        `;
        background.insertAdjacentHTML('afterbegin', addHtml);
        var oldmessage = document.getElementById("oldmessage");
        oldmessage.addEventListener('click', function(e) {
            oldmessage.remove();
        });
        backButton1(oldmessage)
    });
    backButton1();
    alert("we need the light of salvation or we'll die")
});

var mirror = document.getElementById("mirror");
var audio2 = document.getElementById("audio2")
mirror.addEventListener('click',function(e){
    audio.pause()
    addHtml =  `
    <div id= "msg">
    <p>Put the newspaper in front of the mirror.</p>
    <p id = "msg1">The number in the middle will help you out</p>
    </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var msg = document.getElementById("msg");
    background.setAttribute('class',"scaleMirror");
    back.style.display = "block";
    audio2.play()
    backButton()
});
var door = document.getElementById("door");
door.addEventListener('click',function(){
    if (key == 1) {
        window.location = "congratulation.html"
    }
    if (key == 0) {
        alert("you need to find the key!!")
    }
});

var paper = document.getElementById("papers");
paper.addEventListener('click',function(e){
    addHtml = ` <div id="newspaper">
    <img src="oldnewspaper.png" alt="Old newspaper with some clue">
    </div>
    `;
    background.insertAdjacentHTML('afterbegin', addHtml);
    var newspaper = document.getElementById("newspaper");
    back.style.display = "block";
    back.style.transform = "translate(-600px,-300px)"
    back.children[0].style.width = "80px"
    backButton1(newspaper)
})

function removeElement(...argument) {
    console.log(argument)
    for (var i = 0; i < argument.length; i++) {
        argument[i].remove()
    }
}

function backButton1(par) {
    var back = document.getElementById("back");
    back.addEventListener('click', function(e){
        background.removeAttribute('class', 'scaleTable');
        back.style.display = "none";
        resetBackButton();
        removeElement(par)
        // if (bottle) {
        //     bottle.remove();
        // }
        // if (messagebottle) {
        //     messagebottle.remove();
        // }
        // if (broken_glass) {
        //     broken_glass.remove();
        // }
        // if (oil_lamp) {
        //     oil_lamp.remove();
        // }
    })
}

function backButton() {
    var back = document.getElementById("back");
    back.addEventListener('click', function(e){
        background.removeAttribute('class', 'scaleTable');
        back.style.display = "none";
        msg.remove();
        audio2.pause()
        audio.play()
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
        }
        else {
            if(mins > 1){
                countdown(mins-1);    
                console.log(mins)
            }
        }
        if (seconds == 00 && mins == 1) {
            console.log("123");
            window.location = "lost.html";
        }
    }
    tick();
}
countdown(10)
// // console.log(mins)
// console.log(seconds)
// console.log(bag)
bag.addEventListener('click',function(e){
    var stateInventory = inventory.style.display;
    if (stateInventory == 'none') {
        inventory.style.display = "flex"
        
    }
    else 
    {
        inventory.style.display = "none"
    }
    
})

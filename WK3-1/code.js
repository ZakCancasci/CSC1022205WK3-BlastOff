// for the assignment, we need a timer to count down from 50 to 0 by 5 sec increments and show "blastoff at 0"
//for my example we are going to count down from 20 to 0 by 2 sec increments and show "blastoff" at 0
function blastOffTimer() {
    console.log("blastOffTimer() started");
    var currTime = 50;
    var i = 5;
    var timeMult = 5000;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log(currTime);
    currTime = currTime - i;

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 2 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 3 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 4 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 5 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 6 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 7 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 8 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 9 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = "Blastoff!!";
        currTime = currTime - i;
    }, 10 * timeMult);

}
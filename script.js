
function start() {
    document.getElementById('content').style = "";
    document.getElementById('start_btn').style = 'display: none;';

    timer();
    if (username == null || username == "") {
        alert("Can not be empty User Name");
        return false;
    }
}


function Quiz() {

    var score = 0;
    var total = 2;


    var q1 = document.forms['qForm']['q1'].value;
    var q2 = document.forms['qForm']['q2'].value;
    var q2 = document.forms['qForm']['q2'].value;

    // for (var i = 1; i <= total; i++) {
    //     if (eval('q' + i) == null || eval('q' + i) == '') {
    //         alert("Can not be empty" + i);
    //         return false;
    //     }
    // }
    var username = document.getElementById("UserName").value;
    
    var answers = ['a', 'd'];

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    var Users = new Array(username);
    for (var i = 0; i <= Users.length; i++) {
        var result = document.getElementById('result');
        result.innerHTML = username + " Your score is " + score + " out of " + total;
    }
}



function timer() {
    document.getElementById('timer').innerHTML =

        01 + ":" + 15;

    startTimer();



    function startTimer() {

        var presentTime = document.getElementById('timer').innerHTML;

        var timeArray = presentTime.split(/[:]+/);

        var m = timeArray[0];

        var s = checkSecond((timeArray[1] - 1));

        if (s == 59) { m = m - 1 }





        document.getElementById('timer').innerHTML =

            m + ":" + s;

        console.log(m)

        var out = setTimeout(startTimer, 1000);

        if (m < 0) {
            clearTimeout(out);
            alert('timer completed . Plese Enter Your Name');

            var elements = document.getElementsByName('q1');
            var elements2 = document.getElementsByName('q2');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style = "display :none";
                elements2[i].style = "display :none";
            }


        }

    }



    function checkSecond(sec) {

        if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10

        if (sec < 0) { sec = "59" };

        return sec;

    }
}

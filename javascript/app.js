window.onload = function() {
    var Minute = 0;
    var sec = 10;
    setInterval(function() {
      document.getElementById("timer").innerHTML = Minute + " : " + sec;
      sec--;
      if (sec == 0) {
        if (Minute == 0) {
          Minute = 0;
        }
      }
    }, 1000);
  }

// COULDNT GET THIS CODE TO RUN PLEASE TELL ME WHERE i WENT WRONG: if (seconds ===0) { stop(); alert("Time Up!"); } } function stop() { clearInterval(intervalId); } run();





function Review(){

    var Q1 = document.TriviaQuiz.Q1.value;
    var Q2 = document.TriviaQuiz.Q2.value;
    var Q3 = document.TriviaQuiz.Q3.value;
    var Q4 = document.TriviaQuiz.Q4.value;
    var Correct = 0;

    if (Q1 == "365") {
        Correct++;
    }

    if (Q2 == "2") {
        Correct++;
    }

    if (Q3 == "8") {
        Correct++;
    }

    if (Q4 == "26") {
        Correct++;
    }

    document.getElementById("otherstuff").style.visibility = "visible";
    document.getElementById("Correct").innerHTML = "You Got" + Correct + "correct.";


}
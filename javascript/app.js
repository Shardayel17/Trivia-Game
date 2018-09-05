window.onload = function() {
    var Minute = 1;
    var sec = 60;
    setInterval(function() {
      document.getElementById("timer").innerHTML = Minute + " : " + sec;
      sec--;
      if (sec == 60) {
        Minute--;
        sec = 60;
        if (Minute == 0) {
          Minute = 0;
        }
      }
    }, 1000);
  }

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
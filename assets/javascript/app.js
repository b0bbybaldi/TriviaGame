
var questions = [
  { q: "The lowest possible temperature that an object can have.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 1},
  { q: "The heat added to a system = increase in the system's internal energy + external work done on the environment.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 3},
  { q: "Total energy of a material, including kinetic and potential energies of the molecules within the material.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 2},
  { q: "The study of heat.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 0},
  { q: "The upper atmosphere becomes warmer than regions below it.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 5},
  { q: "A process in which no heat leves or enters the system.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 4},
  { q: "Represents the amount of disorder in a system.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 8},
  { q: "A machine that converts heat input into work output.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 7},
  { q: "All systems tend to become more disordered with time. The amount of usable energy decreases with time and continuing operation of the system.", choices: ["Thermodynamics", "Absolute zero", "Internal energy", "First law of thermodynamics", "Adiabatic process", "Temperature inversion", "Second law of thermodynamics", "Heat engine", "Entropy"], answer: 6}
];


var imageArray = ["absolute.jpg", "first.jpg", "internal.jpg", "thermo.jpg", "inversion.jpg", "piston.jpg", "entropy.jpg", "engine.jpg", "second.jpg"];

var current;
var none;
var sec;
var time;
var answered; 
var userSelect;
var wins;
var losses;
var index;

var message = {
  correct: "Correct!",
  incorrect: "No, that's not it.",
  end: "Out of time!",
  final: 'Game Over!'
}

$(document).ready(function(){

  $('#current').hide();
  $('#timeToGo').hide();

  $("#start").click(function(){
    $(this).hide();
    $("#corrected").empty();
    $("#correct").empty();
    $("#incorrect").empty();
    game();
  })

  var game = function(){
    $('#final').empty();
    $('#wins').empty();
    $('#losses').empty();
    $('#none').empty();

    current = 0;
    wins = 0;
    losses = 0;
    none = 0;
    index = 0;

    nextQ();

  }

  var nextQ = function(){

    $("#message").empty();
    $("#wins").empty();
    $("#pics").empty();
    $("#question").empty();
    $("#losses").empty();
    $("#corrected").empty();
    $("#correct").empty();
    $("#incorrect").empty();

    answered = true;
    
    $('#current').show();
    $('#timeToGo').show();
    $('#current').html((current + 1) + "/" + questions.length);
    $('.question').html('<h2>' + questions[current].q + '</h2>');

    for(var i=0; i<questions.length; i++){
      var answers = $('<div>');
      answers.text(questions[current].choices[i]);
      answers.attr({'data-index': i});
      answers.addClass('chosen');
      $('.choiceList').append(answers);
    }

    timer();

    $('.chosen').click(function(){
      userSelect = $(this).data('index');
      clearInterval(time);
      page();
    });
  }

  var timer = function(){
    sec = 30;
    $('#timeToGo').html('<h3>Time Remaining (s): ' + sec + '</h3>');
    answered = true;
    time = setInterval(function(){
      sec--
      $('#timeToGo').html('<h3>Time Remaining (s): ' + sec + '</h3>');
      if(sec === 0){
        clearInterval(time);
        answered = false;
        page();
      }
    },1000);
  }


  var page = function(){
    $('#current').empty();
    $('.chosen').empty();
    $('.question').empty();

    $('#current').hide();

    $('#timeToGo').hide();

    var correctChoiceIndex = questions[current].answer;

    var correctChoice = questions[current].choices[correctChoiceIndex];

    $('#pics').html('<img src= assets/images/' + imageArray[current] + " width=30%>");

    if((userSelect === correctChoiceIndex) && (answered === true)){
      wins++;
      $('#message').html(message.correct);
    }else if((userSelect !== correctChoiceIndex) && (answered === true)){
      losses++;
      $('#message').html(message.incorrect);
      $('#corrected').html('The answer is: ' + correctChoice);
    }else{
      none++;
      $("#message").html(message.end);
      $("#corrected").html("The correct answer is: " + correctChoice);
      answer = true;
    }

    if(current ===(questions.length-1)){
      setTimeout(score, 5000);
    }else{
      current++
      setTimeout(nextQ, 5000);
    }
  }


  var score = function(){
    $('#timeToGo').empty();
    $('#message').empty();
    $('#corrected').empty();
    $('#pics').empty();

    $('#current').hide();

    $('#timeToGo').hide();

    $('#final').html(message.final)
    $('#correct').html('Answered Correcly: ' + wins);
    $('#incorrect').html('Missed: ' + losses);
    $('#none').html('Unanswered: '+ none);
    $('#start').addClass('reset');
    $('#start').show();
    $('#start').html('Try Again!');
  }

})



 

var questions = [
  { q: "What energy sources can the Solarbattery utilize to charge up batteries?", choices:["Solar","Diesel/Natural Gas Generators", "The Grid", "All Energy Sources Mentioned"], answer: 3},
  { q: "How would you install a Solarbattery?", choices: ["Set Up Roof Attachments > Install Solar Panels > Connect Solar Panels > Power On > Connect Auxiliary Power Sources > Connect Appliances to use++", "Power On > Connect Appliances to use > Connect Auxiliary Power Sources>Set Up Roof Attachments > Install Solar Panels > Connect Solar Panels", "Connect Appliances to use > Connect Auxiliary Power Sources > Power On > Set Up Roof Attachments > Install Solar Panels > Connect Solar Panels", "Connect Solar Panels >  Connect Auxiliary Power Sources > Install Solar Panels > Set Up Roof Attachments  > Power On > Connect Appliances to use"], answer: 0},
  { q: "What type of battery do Solarbatteries utilize?", choices: ["Lithium", "AGM (Lead Acid)", "Fuel Cells", "Alkaline"], answer: 1},
  { q: "What is the recommended use for a SolarBattery 1000?", choices: ["Whole House Energy Load", "Lighting, Fans & TV, Fridge, A/C, etc…", "Lighting, Fans & TV, Fridge", "Lighting, Fans & TV"], answer: 3},
  { q: "What is the recommended use for a SolarBattery 3000?", choices: ["Whole House Energy Load", "Lighting, Fans & TV, Fridge, A/C, etc…", "Lighting, Fans & TV, Fridge", "Lighting, Fans & TV"], answer: 2},
  { q: "What is the recommended use for a SolarBattery 5000?", choices: ["Whole House Energy Load", "Lighting, Fans & TV, Fridge, A/C, etc…", "Lighting, Fans & TV, Fridge", "Lighting, Fans & TV"], answer: 1},
  { q: "How long can Solarbatteries sustain their recommended usage without sunlight power from PV?", choices: ["Forever", "A couple hours", "Refer back to spec sheet, but generally based on included structures, about 8 hours if no other auxiliary source is provided", "6 Hours"], answer: 2},
  { q: "Solarbatteries are easy to install, remove and replace by anyone with a little experience with electricity, thus they can be considered deployable and thus sent to regions in need of them.", choices: ["True", "False"], answer: 0},
];

var imageArray = ["data.png", "efficiency.png", "microgrid.png", "oneline.png", "sb1000.png", "sb3000.png", "sb5000.png", "uses.png"];

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
  end: "Ran out of time!",
  finished: 'Game Over!'
}

$(document).ready(function(){

  $("#start").click(function(){
    $(this).hide();
      game();
  })

  $("#startOver").click(function(){
    $(this).hide();
      game();
  });

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

    answered = true;

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
    $('#timeToGo').html('<h3>Time Remaining: ' + sec + '</h3>');
    answered = true;
    time = setInterval(function(){
      sec--
      $('#timeToGo').html('<h3>Time Remaining: ' + sec + '</h3>');
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

    var correctChoiceIndex = questions[current].answer;

    var correctChoice = questions[current].choices[correctChoiceIndex];

    $('#pics').html('<img src = assets/images/' + imageArray[current] + "width = 600px>");

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

    $('#final').html(message.final)
    $('#correct').html('Answered Correcly: ' + wins);
    $('#incorrect').html('Missed: ' + losses);
    $('#none').html('Unanswered: '+ none);
    $('#startOver').addClass('reset');
    $('#startOver').show();
    $('#startOver').html('Try Again!');
  }

})



 
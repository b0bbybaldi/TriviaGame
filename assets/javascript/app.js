
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

    $('#message').empty();
    $('#wins').empty();
    $('#pics').empty();
    $('#question').empty();
    $('#choice1').empty();
    $('#choice2').empty();
    $('#choice3').empty();
    $('#choice4').empty();
    $('#losses').empty();

    answered = true;

    index = Math.floor(Math.random()*9);

    if (index <= (questions.length - 1)) {
      timer();
      
      $('#question').text(questions[index].q);
      $('#choice1').text(questions[index].choices[0]);
      $('#choice2').text(questions[index].choices[1]);
      $('#choice3').text(questions[index].choices[2]);
      $('#choice4').text(questions[index].choices[3]);

      $('.choices').click(function(){
        userChoice = $(this);
        score(userChoice, index)
      })
    }else{
      $('#display').empty();
      $('.choice').empty();
      $('#question').append('Game Over!');
      $('#wins').append('You answered correctly: ' + wins);
      $('#losses').append('You missed: ' + losses);
      $('#startOver').show();
    }
  }

  var timer = function(){
    var interval = 30;
    setInterval(function(){
      $('#display').text(interval)
      interval--
      if(interval === 0){
        clearInterval(timer);
        nextQ();
        score();
      }
    },1000);
  }


  var score = function(userChoice,index){
    timer();

    $('#question').empty();
    $('#choice1').empty();
    $('#choice2').empty();
    $('#choice3').empty();
    $('#choice4').empty();

    if(userChoice === questions[index].choices[questions[index].answer]){
      wins++ 
      alert('Correct!')
      nextQ()
    }else{
      losses++
      alert('Wrong!')
      nextQ()
    }
  }

})



 

var questions = [
  { q: "What energy sources can the Solarbattery utilize to charge up batteries?", o1: "Solar", o2: "Diesel/Natural Gas Generators", o3: "The Grid", a:"All Energy Sources Mentioned"},
  { q: "How would you install a Solarbattery?", a: "Set Up Roof Attachments > Install Solar Panels > Connect Solar Panels > Power On > Connect Auxiliary Power Sources > Connect Appliances to use++", o1:"Power On > Connect Appliances to use > Connect Auxiliary Power Sources>Set Up Roof Attachments > Install Solar Panels > Connect Solar Panels", o2: "Connect Appliances to use > Connect Auxiliary Power Sources > Power On > Set Up Roof Attachments > Install Solar Panels > Connect Solar Panels", o3: "Connect Solar Panels >  Connect Auxiliary Power Sources > Install Solar Panels > Set Up Roof Attachments  > Power On > Connect Appliances to use"},
  { q: "What type of battery do Solarbatteries utilize?", o1: "Lithium", a: "AGM (Lead Acid)", o3: "Fuel Cells", o4: "Alkaline"},
  { q: "What is the recommended use for a SolarBattery 1000?", o1: "Whole House Energy Load", o2: "Lighting, Fans & TV, Fridge, A/C, etc…", o3: "Lighting, Fans & TV, Fridge", a: "Lighting, Fans & TV"},
  { q: "What is the recommended use for a SolarBattery 3000?", o1: "Whole House Energy Load", o2: "Lighting, Fans & TV, Fridge, A/C, etc…", a: "Lighting, Fans & TV, Fridge", o3: "Lighting, Fans & TV"},
  { q: "What is the recommended use for a SolarBattery 5000?", o1: "Whole House Energy Load", a: "Lighting, Fans & TV, Fridge, A/C, etc…", o2: "Lighting, Fans & TV, Fridge", o3: "Lighting, Fans & TV"},
  { q: "How long can Solarbatteries sustain their recommended usage without sunlight power from PV?", o1: "Forever", o2: "A couple hours", a: "Refer back to spec sheet, but generally based on included structures, about 8 hours if no other auxiliary source is provided", o3: "6 Hours"},
  { q: "Solarbatteries are easy to install, remove and replace by anyone with a little experience with electricity, thus they can be considered deployable and thus sent to regions in need of them.", a: "True", o1: "False"},
];

var wins = 0;
var losses = 0;
var index = 0;

$(document).ready(function(){

  if (index === index) {
    return;
  }

  $("#start").click(function(){
    $(this).hide();
      game();
  })

  $("#startOver").click(function(){
    $(this).hide();
      game();
  })

  var game = function(){
    var wins = 0;
    var losses = 0;
    var index = 0;
    nextQ();
  }

  var nextQ = function(){
    $('#question').empty();
    $('#choice1').empty();
    $('#choice2').empty();
    $('#choice3').empty();
    $('#choice4').empty();
    $('#wins').empty();
    $('#losses').empty();

    if (index <= (questions.length - 1)) {
      $('#question').append(questions[index].q);
      $('#choice1').append(questions[index].o1);
      $('#choice2').append(questions[index].o2);
      $('#choice3').append(questions[index].o3);
      $('#choice4').append(questions[index].a);
      $('.choices').click(function(){
        userChoice = $(this);
        score()
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
    var timer = setInterval(function(){
      interval--
      $('#display').text(timer)
      if(interval === 0){
        clearInterval(timer);
      }
    },1000);
    nextQ();
    score();
  }


  var score = function(){
    timer();

    $('#question').empty();
    $('#choice1').empty();
    $('#choice2').empty();
    $('#choice3').empty();
    $('#choice4').empty();

    if(userChoice === questions[index].a){
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



 
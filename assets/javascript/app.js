// Variables
  
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

// Functions

function nextQ() {

  if (index <= (questions.length - 1)) {
    $('#question').append(questions[index].q);
    $('#choices').append()//Create Buttons
  }
  else {
    $('#question').append('<div>' + 'Game Over!' + '</div>');
    $('#wins').append('You answered correctly: ' + wins);
    $('#losses').append('You missed: ' + losses);
  }
}

function score() {
  $('#wins').append('Wins: ' + wins);
  $('#losses').append('Losses: ' + losses);
}

nextQ();
score();

$(document).ready(function(){

  if (index === index) {
    return;
  }

  $('#choices').click(function(){
      //Check for clicks in the answer section

    if(questions.a){
      //If the click was on the button with the right answer for the given question then add to wins, update score 
    }else{
      //If click was on a button with an incorrect answer then add to losses and update score
    }

      //Incremenet question index
      //Render next question
  })
}

 
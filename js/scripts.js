

//alert ('Welcome to Muni.');
let maleGolfers = [
  { name: "Tommy", handicap: 24, besCourse: "Silverbell" },
  { name: "Kyle", handicap: 7, bestCourse: "Randolph North" },
  { name: "Jeff", handicap: 11, bestCourse: "Dell Urich" },
  { name: "Trevor", handicap: 22, bestCourse: "Fred Enke" },
  { name: "Charlie", handicap: 15, bestCourse: "El Rio" },
  { name: "Justin", handicap: 20, bestCourse: "Randolph North" }
];

let femaleGolfers = [
  { name: "Sofia", handicap: 24, besCourse: "Silverbell" },
  { name: "Rachel", handicap: 7, bestCourse: "Randolph North" },
  { name: "Emily", handicap: 11, bestCourse: "Dell Urich" },
  { name: "Tracy", handicap: 22, bestCourse: "Fred Enke" },

]

function handicapPercentages(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].handicap < 8) {
      document.write(list[i].name + "'s in a group of 5% that break 80");
    } if (list[i].handicap > 8 && list[i].handicap < 18) {
      document.write(list[i].name + "'s in a group of 25% that break 90");
    } if (list[i].handicap < 28 && list[i].handicap > 18) {
      document.write(list[i].name + "'s in a group of 50% that break 100")
    }
  }
}
document.write; handicapPercentages(maleGolfers);
document.write; handicapPercentages(femaleGolfers);

/* FOR THE CODE ABOVE....Initialization (let i=0) ; Condition i<golfers.length ; Action ; i++ which is i=i+1
so...initialization starts the loop, condition is checked, THEN THE {} code runs, the action*/

//LOWEST SCORES PAGE

//Course arrays : 
let courseFredArray = [
  {name: "Hole 1", Par: 4},
  {name: "Hole 2", Par: 5},
  {name: "Hole 3", Par: 3},
  {name: "Hole 4", Par: 4},
  {name: "Hole 5", Par: 4},
  {name: "Hole 6", Par: 3},
  {name: "Hole 7", Par: 4},
  {name: "Hole 8", Par: 4},
  {name: "Hole 9", Par: 5},
  {name: "Hole 10", Par: 4},
  {name: "Hole 11", Par: 3},
  {name: "Hole 12", Par: 5},
  {name: "Hole 13", Par: 4},
  {name: "Hole 14", Par: 5},
  {name: "Hole 15", Par: 3},
  {name: "Hole 16", Par: 4},
  {name: "Hole 17", Par: 4},
  {name: "Hole 18", Par: 4},
];
let courseElrioArray = [
  {name: "Hole 1", Par: 4},
  {name: "Hole 2", Par: 4},
  {name: "Hole 3", Par: 4},
  {name: "Hole 4", Par: 3},
  {name: "Hole 5", Par: 4},
  {name: "Hole 6", Par: 3},
  {name: "Hole 7", Par: 4},
  {name: "Hole 8", Par: 4},
  {name: "Hole 9", Par: 5},
  {name: "Hole 10", Par: 4},
  {name: "Hole 11", Par: 4},
  {name: "Hole 12", Par: 4},
  {name: "Hole 13", Par: 3},
  {name: "Hole 14", Par: 4},
  {name: "Hole 15", Par: 4},
  {name: "Hole 16", Par: 4},
  {name: "Hole 17", Par: 3},
  {name: "Hole 18", Par: 5},
];
let courseRandolphArray = [
  {name: "Hole 1", Par: 4},
  {name: "Hole 2", Par: 4},
  {name: "Hole 3", Par: 5},
  {name: "Hole 4", Par: 4},
  {name: "Hole 5", Par: 4},
  {name: "Hole 6", Par: 3},
  {name: "Hole 7", Par: 4},
  {name: "Hole 8", Par: 3},
  {name: "Hole 9", Par: 5},
  {name: "Hole 10", Par: 4},
  {name: "Hole 11", Par: 3},
  {name: "Hole 12", Par: 4},
  {name: "Hole 13", Par: 5},
  {name: "Hole 14", Par: 4},
  {name: "Hole 15", Par: 3},
  {name: "Hole 16", Par: 5},
  {name: "Hole 17", Par: 4},
  {name: "Hole 18", Par: 4},
];
let courseDelArray = [
  {name: "Hole 1", Par: 4},
  {name: "Hole 2", Par: 3},
  {name: "Hole 3", Par: 5},
  {name: "Hole 4", Par: 4},
  {name: "Hole 5", Par: 3},
  {name: "Hole 6", Par: 5},
  {name: "Hole 7", Par: 4},
  {name: "Hole 8", Par: 4},
  {name: "Hole 9", Par: 3},
  {name: "Hole 10", Par: 4},
  {name: "Hole 11", Par: 3},
  {name: "Hole 12", Par: 4},
  {name: "Hole 13", Par: 5},
  {name: "Hole 14", Par: 4},
  {name: "Hole 15", Par: 4},
  {name: "Hole 16", Par: 4},
  {name: "Hole 17", Par: 3},
  {name: "Hole 18", Par: 4},
];
let courseSilverbellArray = [
  {name: "Hole 1", Par: 4},
  {name: "Hole 2", Par: 5},
  {name: "Hole 3", Par: 3},
  {name: "Hole 4", Par: 4},
  {name: "Hole 5", Par: 4},
  {name: "Hole 6", Par: 3},
  {name: "Hole 7", Par: 5},
  {name: "Hole 8", Par: 4},
  {name: "Hole 9", Par: 3},
  {name: "Hole 10", Par: 4},
  {name: "Hole 11", Par: 4},
  {name: "Hole 12", Par: 3},
  {name: "Hole 13", Par: 4},
  {name: "Hole 14", Par: 4},
  {name: "Hole 15", Par: 4},
  {name: "Hole 16", Par: 3},
  {name: "Hole 17", Par: 4},
  {name: "Hole 18", Par: 5},
];

//functions will need to be generated from these variable with a return of the highest score logged, respectively

let fredScore = 90
let randolphScore=76
let delScore= 68
let silverbellScore= 93
let elrioScore= 100

function lowestScore72(course) {
  let par = 72
  if (course == false) {
    document.write ('No Scores Posted Today')
  }
  if (course > par) {
    document.write("+", course - par)
  }
  else if ((course < par) && (course !== ''))//this is a chained condiion when "fredscore" is not ' '
  {
    document.write(course - par)
  }

}
function lowestScore70(course) {
  let par = 70
  if (course == false) {
    document.write('No Scores Posted Today')
  }
  if (course > par) {
    document.write("+", course - par)
  }
  else if ((course < par) && (course !== ''))//this is a chained condiion when "fredscore" is not ' '
  {
    document.write(course - par)
  }

}
document.write ("Lowest score of the day: ") + lowestScore72(fredScore)
document.write ("Lowest score of the day: ") + lowestScore72(randolphScore)
document.write ("Lowest score of the day: ") + lowestScore70(delScore)
document.write ("Lowest score of the day: ") + lowestScore70(silverbellScore)
document.write ("Lowest score of the day: ") + lowestScore70(elrioScore)


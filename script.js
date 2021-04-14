let submissions = [
    { name: "Jane" , score: 95, date:"2020-01-24" , passed: true},
    { name: "Joe" , score: 77, date:"2018-05-14" , passed: true },
    { name: "Jack" , score: 95, date: "2019-07-05" , passed: true},
    { name: "Jill" , score: 97, date: "2020-04-22", passed: true}
    ];
  
function addSubmission(array, newName, newScore, newDate) {
  let ifPassed;
  if (newScore >= 60) {
    ifPassed = true;
  } else {
    ifPassed = false;
  }
    array.push ({ name: newName, score: newScore, date: newDate, passed:ifPassed});    
}
addSubmission(submissions, "Danny", 80, "2021-04-13");


function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 0);

function deleteSubmissionByName(array, name){
  const nameIndex = array.findIndex((submission)=> submission.name === name);
  array.splice(nameIndex, 1);
}

deleteSubmissionByName (submissions, "Jack");
console.log(submissions);

function editSubmission (array, index, score){
  let submission = array[index];
  submission.score = score;
  submission.passed = score >= 60? true: false;
}


editSubmission(submissions, 2 , 86);
console.log(submissions);

function findSubmissionByName(array, name) {
  const foundSubmission = array.find((submission) => submission.name === name); //this gives us back the object it finds not index
  return foundSubmission;
}

console.log(findSubmissionByName(submissions, "Jane"));

const findLowestScore = (array) => {
  let lowest = array[0];
  array.forEach(function(submission){
    if(lowest.score > submission.score) {
      lowest = submission;
    }
  });
  return lowest;
}

function findAverageScore(array) {
    let total = 0;
    let average;
    for (let submission of array) {
      total += submission.score;
    }
    average = total / array.length
    return average;
  }
  console.log(findAverageScore(submissions));

function filterPassing(array){
  return array.filter (x => x.passed);
}
console.log(filterPassing(submissions));

function filter90AndAbove(array){
  return array.filter (x => x.score >=90);
}
console.log(submissions);
console.log(filter90AndAbove(submissions));












/*
// Find index of an item.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// var index = array.findIndex(function(item) {return item.id === id})
// Or:
var index = array.findIndex(item => item.id === id)

// Replace the item by index.
array.splice(index, 1, newItem)


  */
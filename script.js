let submissions = [
    { name: "Jane" , score: 95, date:"2020-01-24" , passed: true},
    { name: "Joe" , score: 77, date:"2018-05-14" , passed: true },
    { name: "Jack" , score: 59, date: "2019-07-05" , passed: false},
    { name: "Jill" , score: 88, date: "2020-04-22", passed: true}
    ];
  
function addSubmission(array, newName, newScore, newDate) {
array.push ({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60
  })    
}

addSubmission(submissions, "Danny", 80, "2021-04-13");

console.log(submissions)

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
    
deleteSubmissionByIndex(submissions, 1);

console.log(submissions);
    
function deleteSubmissionByName (array, name) {
  index = array.findIndex(array => array.name === name);
  array.splice(index, 1);
}
deleteSubmissionByName(submissions, "Joe");

function editSubmission (array, index, score){
let index = array.findIndex(array => array.score === score);
array.splice(index, 1, score)
}

function findSubmimssionByName (array,name) {
  //return find method
  }

function findLowestScore (array) {
    //return forEach
  }
  
  function findAverageScore (array) {
    //for...or loop
  }

  function filterPassing (array){
    //filter method
  }

  function filter90AndAbove (array){
    //filter method
  }

/*
// Find index of an item.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// var index = array.findIndex(function(item) {return item.id === id})
// Or:
var index = array.findIndex(item => item.id === id)

// Replace the item by index.
array.splice(index, 1, newItem)


  */
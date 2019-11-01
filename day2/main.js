var x = document.getElementById('page-title')
var buttons = document.getElementsByClassName('btn')


var input = document.getElementById('name-input')
var submitButton = document.getElementById('submit-name')
var entrantName = document.getElementById('entrant-name')
var box = document.getElementById('box')

submitButton.addEventListener('click', function() {
  box.classList.remove('hidden')
  entrantName.innerHTML = input .value
})



function sayHello() {
  console.log('Hello!')
}

//2 arguments: event, function to run fot that event
x.addEventListener('click', sayHello)

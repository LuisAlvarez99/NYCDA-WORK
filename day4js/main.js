console.log('JavaScript is running')

// master = () => {
//   let age = 20
//
//   functionA = () =>{
//       console.log(age)
//   }
//
//   functionB = () => {
//
//   }
// }
//
// document.addEventListener('click', () => {
//   alert('You clicked the document!')
// })

// Arguments and parameters same thing
//
// let greeting = () => {
//   console.log('Hello!')
// }
//
// let greetByName = (name) => {
//   console.log(`hello , ${name}`)
// }
//
// let doubleNumber = (n) => {
//   return n * 2
// }
//
// let helloWorld = () => {
//   return 'Hello World!'
// }

let createButton = document.getElementById('create-button')
let color1 = 'green'
let color2 = 'red'

let generateGrid = (color1, color2) => {
let rows = prompt('how many rows?')
let cols = prompt('how many columns?')

console.log(rows)
let divCount = +rows * +cols //Number(rows) + Number(cols)
console.log(cols)

let grid = document.getElementById('grid')
grid.style.display = 'grid'

let i = 0
while (i < (divCount)) {
  let div = document.createElement('div')
if (i % 2 == 0){
  div.style.backgroundColor = color1

} else {
  div.style.backgroundColor = color2
}
  grid.appendChild(div)
  i++
}

grid.style.gridTemplate = `repeat(${rows}, 150px) / repeat(${cols}, 150px)` // back tics Template literal
grid.style.gridGap = '3px'
}

createButton.addEventListener('click', () => {
  generateGrid(color1, color2)
})

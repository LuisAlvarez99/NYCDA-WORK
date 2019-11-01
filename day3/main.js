let list = []

let master = () => {
  let functionA = (x) => {
    return functionB(x)
  }

  let functionB = (y) => {
    y.push(functionC)
    return 'done'
  }

  let functionC = () => {
    console.log('complete')
    return 100
  }

  functionA(list)
  return list[0]()
}

let answer = master()

let luis = []
let master = () => {
  let pkmn1 = (b) => {
    console.log('I choose You')
    b.push(pkmn2())
    return 'Roy'
  }

  let pkmn2 = () => {
    console.log('I choose You')
    return 'Marth'
  }

  let pkmnC = (a) => {
    console.log('something')
    return pkmn1(a)
  }
  return pkmnC(luis)
}

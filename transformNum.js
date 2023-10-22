// transforma numero negativo em positivo
function makeNegative(num) {
  if (Math.sign(num) === -1 ||Math.sign(num) === -0) {
    return console.log('era negativo', Math.abs(num))
  } else {
    return console.log('é positivo', num)
  }
}
makeNegative(42, -42)
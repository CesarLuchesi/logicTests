// Pegar o número que foi passado na função e retornar a soma de todos os múltiplos de 3 ou 5 abaixo do número passado.
function multiples(num) {
  let numArray = []
  let sum = 0

  for (let i = 0; i < num; i++) {
    numArray.push(i)
  }

  let divisibleArr = numArray.filter(x => x % 3 === 0 || x % 5 === 0)

  for (let i = 0; i < divisibleArr.length; i++) {
    sum += divisibleArr[i]
  }

  if (Math.sign(num) === -1) {
    return 0
  }
  return sum
}

console.log(multiples(10))

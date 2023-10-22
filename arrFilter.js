//valida se os numeros no array B estão poresentes em A e filtra para um novo array nem numeros iguais
var first = [1, 2, 3, 4, 5]
var second = [4, 5, 6]

var difference = first.filter(x => second.indexOf(x) === -1)
console.log(difference)

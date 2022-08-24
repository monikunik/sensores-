input.onButtonPressed(Button.A, function () {
    numero += 0 + 1
    basic.showNumber(numero)
})
input.onButtonPressed(Button.AB, function () {
    numero = 0
    basic.showNumber(numero)
})
input.onButtonPressed(Button.B, function () {
    if (numero <= 0) {
        numero = 0
    } else {
        numero += 0 - 1
    }
    basic.showNumber(numero)
})
let numero = 0
numero = 0
basic.showNumber(0)
basic.forever(function () {
	
})

let Angle = 0
basic.forever(function () {
    Angle = input.compassHeading()
    if (Angle >= 9 || Angle <= 20) {
        basic.showArrow(ArrowNames.North)
    } else if (Angle >= 25 && Angle <= 65) {
        basic.showArrow(ArrowNames.North)
    } else if (Angle >= 70 && Angle <= 110) {
        basic.showArrow(ArrowNames.North)
    } else if (Angle >= 115 && Angle <= 155) {
        basic.showArrow(ArrowNames.North)
    } else if (Angle >= 160 && Angle <= 200) {
        basic.showArrow(ArrowNames.North)
    } else if (Angle >= 205 && Angle <= 245) {
        basic.showArrow(ArrowNames.North)
    } else if (Angle >= 250 && Angle <= 295) {
        basic.showArrow(ArrowNames.North)
    } else if (Angle >= 295 && Angle <= 335) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.clearScreen()
    }
})

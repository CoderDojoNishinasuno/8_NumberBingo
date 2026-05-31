input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    えらんだかず += 1
    if (えらんだかず > 9) {
        えらんだかず = 9
    }
    basic.showNumber(えらんだかず)
})
input.onGesture(Gesture.Shake, function () {
    えらんだかず = 0
    ひみつのかず = randint(0, 9)
    basic.showNumber(えらんだかず)
})
input.onButtonPressed(Button.AB, function () {
    if (えらんだかず == ひみつのかず) {
        basic.showIcon(IconNames.Diamond)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    } else {
        if (えらんだかず > ひみつのかず) {
            basic.showArrow(ArrowNames.North)
        } else {
            basic.showArrow(ArrowNames.South)
        }
        music.play(music.createSoundExpression(
        WaveShape.Sawtooth,
        300,
        300,
        255,
        255,
        500,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    えらんだかず += -1
    if (えらんだかず < 0) {
        えらんだかず = 0
    }
    basic.showNumber(えらんだかず)
})
let ひみつのかず = 0
let えらんだかず = 0
music.setVolume(255)
basic.forever(function () {
	
})

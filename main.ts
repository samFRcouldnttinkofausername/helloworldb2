input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("D F E F G G F E ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("bye")
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    music.playMelody("A G F E D C C C ", 120)
})
basic.showString("WAHOO")
basic.showIcon(IconNames.Happy)
music.playMelody("A F B G C5 B A G ", 120)

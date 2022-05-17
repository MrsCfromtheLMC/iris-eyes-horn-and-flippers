hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.One) < 30) {
        hummingbird.setPositionServo(FourPort.One, 0)
        hummingbird.setPositionServo(FourPort.Two, 90)
        hummingbird.setTriLED(
        TwoPort.One,
        100,
        0,
        0
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        100,
        0,
        0
        )
    } else {
        hummingbird.setPositionServo(FourPort.One, 180)
        hummingbird.setPositionServo(FourPort.Two, 0)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        100
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        100
        )
    }
    if (hummingbird.getSensor(SensorType.Light, ThreePort.One) < 30) {
        hummingbird.setRotationServo(FourPort.Three, 0)
    } else {
        hummingbird.setRotationServo(FourPort.Three, 100)
    }
})

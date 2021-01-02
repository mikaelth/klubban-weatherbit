// tests go here; this will not be compiled when this package is used as a library
input.onButtonPressed(Button.AB, () => {
    basic.showNumber(weatherbit.soilTemperature())
    serial.writeValue("soil temperature", weatherbit.soilTemperature())
//    basic.showNumber(weatherbit.soilMoisture())
//    serial.writeValue("soil moisture", weatherbit.soilMoisture())
})
input.onButtonPressed(Button.A, () => {
    basic.showNumber(weatherbit.temperature())
    serial.writeValue("temperature", weatherbit.temperature())
    basic.showNumber(weatherbit.humidity())
    serial.writeValue("humidity", weatherbit.humidity())
    basic.showNumber(weatherbit.pressure())
    serial.writeValue("pressure", weatherbit.pressure())
    basic.showNumber(weatherbit.altitude())
    serial.writeValue("altitude", weatherbit.altitude())
})
input.onButtonPressed(Button.B, () => {
    basic.showNumber(weatherbit.windSpeed())
    serial.writeValue("wind speed", weatherbit.windSpeed())
    basic.showString(weatherbit.windDirection())
    basic.pause(300)
    // serial.writeValue("wind direction",
    // weatherbit.readWindDirection())
    basic.showNumber(weatherbit.rain())
    serial.writeValue("rain", weatherbit.rain())
})
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startWeatherMonitoring()

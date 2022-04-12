#include "Sensor.h"

double Moisture::readSensor() {
    int pin = _MCU->c_moisturePin;

    double reading = analogRead(pin);

    return reading;
}


// Sensor class contains: pinout data, stored sensor data, RGB data
//    is a superclass of: Temperature, Moisture, Light

#ifndef SENSOR_H
#define SENSOR_H

#include "Arduino.h"

#include <MCU.h>
#include <Moisture.h> 
#include <Temperature.h>
#include <Light.h>


// TODO Make each sensor type have different sampling rate:
//      Light => high
//      Moisture => medium
//      Temperature => low
class Sensor : public MCU {
    private:

    public:
};

#endif
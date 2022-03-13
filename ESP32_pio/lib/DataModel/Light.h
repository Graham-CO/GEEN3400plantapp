// Light class contains: sun intensity data, sun time series data, 
//          (sun position data - for suggesting best spot in room?)
#ifndef LIGHT_H
#define LIGHT_H

#include "Sensor.h"

// Subclass of Sensor
class Light : public Sensor {
    private:

    public:
};

#endif




// TODO photo cell vs phototransistor (LDR)
//      LDR will be permanently damaged by high temps maybe?
//      (grey filter?)

// TODO hysteresis && damping for partly cloudy days
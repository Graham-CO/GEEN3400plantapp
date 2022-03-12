// Sensor class contains: stored sensor data, RGB data
//    is a superclass of: Temperature, Moisture, Light

#ifndef SENSOR_H
#define SENSOR_H

#include "Arduino.h"
#include <string.h>
#include <stdio.h>
using namespace std;

#include <MCU.h>
#include <Moisture.h> 
#include <Temperature.h>
#include <Light.h>


// TODO push average to Firestore
// ? Measurement units? 
// ? Should sensorType belong to Sensor or no?
// Subclass of MCU
class Sensor : public MCU {
    protected: Sensor(); // can't instantitate Sensor
    public:
        // {temperature (F), light (idk unit), moisture (idk)}
        float avgData = 0.0; 
        int dataAccumulator = 0;

        // set sampling frequency
        virtual double setFreq() const = 0; // pure virtual, implement in subclass
                                            // can't make Sensor object

        // RGB data - changes based on sensor type & value
        static int rgb [3];
        string sensorType; // determines thresholds
        // update rgb data
        virtual int updateRGB(float (&avgData), string sensorType) = 0;
        // reset rgb data
        int resetRGB(int (&rgb)[3]);
};

#endif
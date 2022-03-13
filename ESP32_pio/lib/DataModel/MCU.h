/* MCU contains: pinout data, & info about wifi/ID/connectivity of ESP32 to:
   Firebase, Trellis Go API, (iOS BLE connectivity?)
   All values are for NodeMCU ESP32 board */
#ifndef MCU_H
#define MCU_H


#include "Arduino.h"
#include "WiFi.h"

#include <Sensor.h>

class MCU 
{
    private:
        // pinout data
        const int c_temperaturePin = 15, c_lightPin = 4, c_moisturePin = 2;
        const int c_ledPinR = 13, c_ledPinG = 12, c_ledPinB = 14;
        // LED PWM data
        const int c_ledChan1 = 1, c_ledChan2 = 2, c_ledChan3 = 3;
        const int c_freq = 5000, c_resolution = 8;
        // MCU setup functions
        void setPins() const; // define IO status of pin
        void setChannels() const; // config PWM & attach to GPIO 
    public:
        MCU();

};

#endif
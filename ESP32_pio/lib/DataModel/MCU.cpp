/* Implement MCU */

#include "MCU.h"

// Constructor
MCU::MCU() { 
    setPins();
    setChannels();
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Setters ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// set IO mode for each pin
void MCU::setPins() const {
    // sensors
    pinMode(c_temperaturePin, INPUT);
    pinMode(c_lightPin, INPUT);
    pinMode(c_moisturePin, INPUT);
    // LEDs
    pinMode(c_ledPinR, OUTPUT);
    pinMode(c_ledPinG, OUTPUT);
    pinMode(c_ledPinB, OUTPUT);
}
// set channel->pin connection  
void MCU::setChannels() const {
    // LED PWM config - freq(Hz), res(bits)
    ledcSetup(c_ledChan1, c_freq, c_resolution);
    ledcSetup(c_ledChan2, c_freq, c_resolution);
    ledcSetup(c_ledChan3, c_freq, c_resolution);
    // attach channel to GPIO
    ledcAttachPin(c_ledPinR, c_ledChan1);
    ledcAttachPin(c_ledPinG, c_ledChan2);
    ledcAttachPin(c_ledPinB, c_ledChan3);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Update ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/










// TODO implement BLE connection, implement wifi scanning, connect to DB

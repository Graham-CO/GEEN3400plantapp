// Sensor class contains: stored sensor data, color data
//    is a superclass of: Temperature, Moisture, Light
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

        // color data - changes based on sensor type & value
        static vector<int> color[3]; //stored as RGB only (for now)
        string sensorType; // determines thresholds
        // update RGB data
        virtual int updateColor(float (&avgData), string sensorType) = 0;
        // reset RGB data
        void resetColor(vector<int> &color) {this->color = {0,0,0};};
        
        // destructor - virtual ensures base and derived get destroyed
        virtual ~Sensor() = 0;
};

Sensor::~Sensor() {}
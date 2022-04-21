// GEEN 3400 Project Code
// Graham Williams | grwi2594@colorado.edu
// Bryan Sirner
// Prototype #1
#include <Arduino.h>
#include <iostream>
#include <WiFi.h>
#include <HTTPClient.h>
#include <string>

#include "MCU.h"
#include "Sensor.h"

// int dataTime = 2;


// float inputVoltage = 3.3; // Voltage input to the Temp sensor (left pin looking at flat)

// float calibration = 12;

// initialize MCU and Sensor objects
MCU nodeMCU();
Temperature* tempSensor = new Temperature;
Moisture* moistSensor = new Moisture;
Light* lightSensor = new Light;

// Hardcoded wifi
const char* ssid = "fuckxfinity";
const char* password = "Jollymango1@";

const char* serverName = "https://potbut-d8c82.uc.r.appspot.com/";

unsigned long lastTime = 0;
unsigned long timerDelay = 30000;

void setup()
{
  Serial.begin(9600);

  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network");
}

void loop()
{
  moistSensor->setFreq(1);

  double reading = moistSensor->readSensor();
  Serial.println(reading);

  if  ((millis() - lastTime) > timerDelay) {
    if (WiFi.status()== WL_CONNECTED) {
      WiFiClient client;
      HTTPClient http;

      http.begin(client, serverName);

      http.addHeader("Content-Type", "application/json");
      int httpResponseCode = http.POST("{\"api_key\":\"4c57a4ada00e9fdeaea5cc98ddcbd2330354c322\",\"water\":\"10\"}");
    }
  }






  // for (int i = 0; i < (dataTime * samplingFreq); i++)
  // {
  //   delay(1000 / samplingFreq); // Time interval between measurments

  //   // converting that reading to voltage, for 3.3v arduino use 3.3
  //   float voltage = reading * inputVoltage;
  //   voltage /= 4096.0;

  //   // print out the voltage
  //   //Serial.print(voltage); Serial.println(" volts");

  //   // now print out the temperature
  //   float celsius = (100.0 * voltage) - 50.0 ; //converting from 10 mv per degree wit 500 mV offset
  //   //to degrees ((voltage - 500mV) times 100)
  //   celsius += calibration; //Calibration Value
  //   //Serial.print(temperatureC); Serial.println(" degrees C");
  //   sumC += celsius;

  //   // now convert to Fahrenheit
  //   float fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
  //   //Serial.print(temperatureF); Serial.println(" degrees F");
  //   sumF += fahrenheit;


  //   //SOIL SENSOR CODE
  //   double Wetness = analogRead(SoilPin);
  //   //Serial.print("Soil Wetness = ");  Serial.println(Wetness);
  //   soilSum += Wetness;



  //   //PHOTORESISTOR CODE
  //   //PHOTORESISTOR CODE
  //   double Light = analogRead(LightPin);
  //   //Serial.print("Light = ");  Serial.println(Light);
  //   lightSum += Light;

  // }

  // avgF = sumF / (dataTime * samplingFreq);
  // avgC = sumC / (dataTime * samplingFreq);
  // avgSoil = soilSum / (dataTime * samplingFreq);
  // avgLight = lightSum / (dataTime * samplingFreq);
  
  // if (avgLight < 15)
  // {
  //   int rgb [3] = {255, 244, 0};
  // ledcWrite(c_ledChannel1, rgb[2]);
  // ledcWrite(c_ledChannel2, rgb[1]);
  // ledcWrite(c_ledChannel3, rgb[0]);
  // }
  // else 
  // {
  // int redScale = 0;
  // int greenScale = 0;
  // int blueScale = 0;
  // ledcWrite(c_ledChannel1, blueScale);
  // ledcWrite(c_ledChannel2, greenScale);
  // ledcWrite(c_ledChannel3, redScale);
  // }
}


// TODO translate this to lib, tidy up main{}
// ? is it easy enough to go thru API? j start with direct to DB.
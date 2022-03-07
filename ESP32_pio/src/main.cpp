#include <Arduino.h>

void setup() {
  // put your setup code here, to run once:
}

void loop() {
  // put your main code here, to run repeatedly:
}//GEEN 3400 Project Code
//Prototype #1

 int dataTime = 2;
 int samplingFreq = 10; // Hz

float InputVoltage = 3.3; // Voltage input to the Temp sensor (left pin looking at flat)
const int TempPin = 15; // https://learn.adafruit.com/tmp36-temperature-sensor/using-a-temp-sensor
const int SoilPin = 2; // Pin on Arduino Data on soil sensor is in
const int LightPin = 4;
float Calibration = 12;
const int ledPin = 14;  // BLUE
const int ledPin2 = 12; //  GREEN
const int ledPin3 = 13;  // RED

// setting PWM properties
const int freq = 5000;
const int ledChannel1 = 1;
const int ledChannel2 = 2;
const int ledChannel3 = 3;
const int resolution = 8;

void setup()
{
  Serial.begin(9600);  //Start the serial connection with the computer
  //to view the result open the serial monitor
  pinMode(TempPin, INPUT);
  pinMode(SoilPin, INPUT);
  pinMode(SoilPin, INPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);

  // configure LED PWM functionalitites
  ledcSetup(ledChannel1, freq, resolution);
  ledcSetup(ledChannel2, freq, resolution);
  ledcSetup(ledChannel3, freq, resolution);

  // attach the channel to the GPIO to be controlled
  ledcAttachPin(ledPin, ledChannel1);
  ledcAttachPin(ledPin2, ledChannel2);
  ledcAttachPin(ledPin3, ledChannel3);
}

void loop()
{
  float avgTempF = 0;
  float avgTempC = 0;
  float avgSoil = 0;
  float avgLight = 0;
  int tempSumC = 0;
  int tempSumF = 0;
  int lightSum = 0;
  int soilSum = 0;
 


  for (int i = 0; i < (dataTime * samplingFreq); i++)
  {
    delay(1000 / samplingFreq); // Time interval between measurments


    //TEMPERATURE SENSOR CODE
    //TEMPERATURE SENSOR CODE
    //getting the voltage reading from the temperature sensor
    double reading = analogRead(TempPin);
    //Serial.print(reading); Serial.println(" reading");

    // converting that reading to voltage, for 3.3v arduino use 3.3
    float voltage = reading * InputVoltage;
    voltage /= 4096.0;

    // print out the voltage
    //Serial.print(voltage); Serial.println(" volts");

    // now print out the temperature
    float temperatureC = (100.0 * voltage) - 50.0 ; //converting from 10 mv per degree wit 500 mV offset
    //to degrees ((voltage - 500mV) times 100)
    temperatureC += Calibration; //Calibration Value
    //Serial.print(temperatureC); Serial.println(" degrees C");
    tempSumC += temperatureC;

    // now convert to Fahrenheit
    float temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;
    //Serial.print(temperatureF); Serial.println(" degrees F");
    tempSumF += temperatureF;



    //SOIL SENSOR CODE
    //SOIL SENSOR CODE
    double Wetness = analogRead(SoilPin);
    //Serial.print("Soil Wetness = ");  Serial.println(Wetness);
    soilSum += Wetness;



    //PHOTORESISTOR CODE
    //PHOTORESISTOR CODE
    double Light = analogRead(LightPin);
    //Serial.print("Light = ");  Serial.println(Light);
    lightSum += Light;

  }

  avgTempF = tempSumF / (dataTime * samplingFreq);
  avgTempC = tempSumC / (dataTime * samplingFreq);
  avgSoil = soilSum / (dataTime * samplingFreq);
  avgLight = lightSum / (dataTime * samplingFreq);

  Serial.print(avgTempC); Serial.println(" degrees C.");
  Serial.print(avgTempF); Serial.println(" degrees F.");
  Serial.print("Soil Wetness = ");  Serial.println(avgSoil);
  Serial.print("Light = ");  Serial.println(avgLight);
  Serial.println(); // Prints blank line for easy to read monitor
  
  if (avgLight < 15)
  {
  int redScale = 255;
  int greenScale = 244;
  int blueScale = 0;
  ledcWrite(ledChannel1, blueScale);
  ledcWrite(ledChannel2, greenScale);
  ledcWrite(ledChannel3, redScale);
  }
  else 
  {
   int redScale = 0;
  int greenScale = 0;
  int blueScale = 0;
  ledcWrite(ledChannel1, blueScale);
  ledcWrite(ledChannel2, greenScale);
  ledcWrite(ledChannel3, redScale);
  }
}
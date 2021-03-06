package entities

//TODO: change "straight data" to be 24 value slices
// ESP32 MCU Interacts with These Values
type Pot struct {
	PotID   string `json:"potid"`
	PotName string `json:"potname"`
	//straight data (the hourly sample)
	Temp  float64 `json:"temp"`
	Water float64 `json:"water"`
	Light float64 `json:"light"`
	//daily average data, calculated by the ESP32
	DailyTemp  float64 `json:"dailytemp"`
	DailyWater float64 `json:"dailywater"`
	DailyLight float64 `json:"dailylight"`
}

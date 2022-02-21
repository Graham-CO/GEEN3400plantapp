package entities

// User-defined data for each type of plant that they have
type Plant struct {
	PlantName      string  `json:"plantname"`
	UniqueThresh   bool    `json:"uniquethresh"` //whether user has set their own threshholds
	OverLightUser  float64 `json:"overlightuser"`
	PerfLightUser  float64 `json:"perflightuser"`
	UnderLightUser float64 `json:"underlightuser"`
	OverTempUser   float64 `json:"overtempuser"`
	PerfTempUser   float64 `json:"perftempuser"`
	UnderTempUser  float64 `json:"undertempuser"`
	OverMoistUser  float64 `json:"overmoistuser"`
	PerfMoistUser  float64 `json:"perfmoistuser"`
	UnderMoistUser float64 `json:"undermoistuser"`
}

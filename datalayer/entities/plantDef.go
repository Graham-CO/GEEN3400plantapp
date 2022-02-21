package entities

// System-defined data for default types of plants
type PlantDef struct {
	PlantNameDef  string  `json:"plantnamedef"`
	OverLightDef  float64 `json:"overlightdef"`
	PerfLightDef  float64 `json:"perflightdef"`
	UnderLightDef float64 `json:"underlightdef"`
	OverTempDef   float64 `json:"overtempdef"`
	PerfTempDef   float64 `json:"perftempdef"`
	UnderTempDef  float64 `json:"undertempdef"`
	OverMoistDef  float64 `json:"overmoistdef"`
	PerfMoistDef  float64 `json:"perfmoistdef"`
	UnderMoistDef float64 `json:"undermoistdef"`
}

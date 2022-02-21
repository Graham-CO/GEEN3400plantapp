var users = []user{
	{UserID: "0000001", UserEmail: "ehemilyharrison@gmail.com", UserColor: []int8{0, 0, 0}},
	{UserID: "0000002", UserEmail: "marasampleton.magazine@gmail.com", UserColor: []int8{127, 0, 0}},
}

var plants = []plant{
	{PlantName: "plant1", UniqueThresh: true,
		OverLightUser: 90, PerfLightUser: 80, UnderLightUser: 70,
		OverTempUser: 80, PerfTempUser: 70, UnderTempUser: 60,
		OverMoistUser: 60.1, PerfMoistUser: 44, UnderMoistUser: 12},
	{PlantName: "plant2", UniqueThresh: false,
		OverLightUser: 90, PerfLightUser: 80, UnderLightUser: 70.1,
		OverTempUser: 80, PerfTempUser: 70, UnderTempUser: 60.1,
		OverMoistUser: 60.1, PerfMoistUser: 44, UnderMoistUser: 12.1},
}

var pots = []pot{
	{PotID: "1", PotName: "Bob",
		Temp: 0, Water: 1, Light: 2, DailyTemp: 3, DailyWater: 4, DailyLight: 5},
	{PotID: "2", PotName: "Jennifer",
		Temp: 100, Water: 9.9, Light: 2.3001, DailyTemp: 100, DailyWater: 5, DailyLight: 99},
}

//TODO: do we need to change the tabbing?
var plantdatabase = []plant_def{
	{plantnamedef: "succulent", overlightdef: 1, perflightdef: 0.5, underlightdef: 0.1,
		overtempdef: 90, perftempdef: 80, undertempdef: 70,
		overmoistdef: 50.1, perfmoistdef: 50, undermoistdef: 49.9},
	{plantnamedef: "house plant", overlightdef: 1, perflightdef: 0.5, underlightdef: 0.1,
		overtempdef: 90, perftempdef: 80, undertempdef: 70,
		overmoistdef: 50.1, perfmoistdef: 50, undermoistdef: 49.9},
	{plantnamedef: "tundra plant", overlightdef: 1, perflightdef: 0.5, underlightdef: 0.1,
		overtempdef: 90, perftempdef: 80, undertempdef: 70,
		overmoistdef: 50.1, perfmoistdef: 50, undermoistdef: 49.9},
	{plantnamedef: "monstera", overlightdef: 1, perflightdef: 0.5, underlightdef: 0.1,
		overtempdef: 90, perftempdef: 80, undertempdef: 70,
		overmoistdef: 50.1, perfmoistdef: 50, undermoistdef: 49.9},
}

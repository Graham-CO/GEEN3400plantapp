package pot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// RESTful C.R.U API controller functions
// e.g., GET, POST, etc.

//Get list of all pots
func GetPots(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, pots)
}

//pull out a pot by its ID
func GetPotByID(c *gin.Context) {
	potid := c.Param("potid")

	//Loop over pots to find pot whose ID matches parameter
	for _, a := range pots {
		if a.PotID == potid {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "pot not found"})
}

func AddPot(c *gin.Context) {
	var newPot pot

	//Call BindJSON to bind the received JSON to newPot
	if err := c.BindJSON(&newPot); err != nil {
		return
	}

	//Add new pot to the slice
	users = append(pots, newPot)
	c.IndentedJSON(http.StatusCreated, newPot)
}

// TODO: Check if this actually works! How to retrieve specific value from JSON?
// getTemp responds with the float64 temp sens value
func GetTemp(c *gin.Context) {
	potid := c.Param("potid")
	temp := c.Param("temp")

	//Loop over pots to find pot whose ID matches parameter
	for _, a := range pots {
		if a.PotID == potid {
			b := a.Temp
			c.IndentedJSON(http.StatusOK, b)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "pot not found"})
}

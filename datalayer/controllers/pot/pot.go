package pot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// RESTful C.R.U API controller functions
// e.g., GET, POST, etc.

func GetPots(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, pots)
}

func GetPotByID(c *gin.Context) {
	potid := c.Param("potid")

	//Loop over users to find album whose ID matches parameter
	for _, a := range pots {
		if a.UserID == potid {
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
	c.IndentedJSON(http.StatusCreated, newUser)
}

// getTemp responds with the float64 temp sens value
func GetTemp(c *gin.Context) {
	// TODO: How to retrieve specific value from JSON?
}

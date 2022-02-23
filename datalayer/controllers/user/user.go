package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// RESTful C.R.U API controller functions
// e.g., GET, POST, etc.

//getUsers responds with the list of all users as JSON
func GetUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, users)
}

func GetUserByID(c *gin.Context){
	userid:= c.Param("userid")

	//Loop over users to find album whose ID matches parameter
	for _, a := range users{
		if a.UserID == userid {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "user not found"})
}

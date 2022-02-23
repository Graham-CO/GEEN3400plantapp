package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// RESTful C.R.U API controller functions
// e.g., GET, POST, etc.

//getUsers responds with the list of all users as JSON
func getUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, users)
}

//getUserByID responds with the user information for whoevers ID was used
//from command line, $ curl http://localhost:8080/users/[userid]
func getUserByID(c *gin.Context) {
	userid := c.Param("userid")

	//Loop over users to find album whose ID matches parameter
	for _, a := range users {
		if a.UserID == userid {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "user not found"})
}

func postUsers(c *gin.Context) {
	var newUser user

	//Call BindJSON to bind the received JSON to newUser
	if err := c.BindJSON(&newUser); err != nil {
		return
	}

	//Add new user to the slice
	users = append(users, newUser)
	c.IndentedJSON(http.StatusCreated, newUser)
}

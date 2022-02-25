package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"potbut/datalayer/entities"
)

// RESTful C.R.U API controller functions
// e.g., GET, POST, etc.

//getUsers responds with the list of all users as JSON
func GetUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, users)
}

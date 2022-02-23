package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/users, getUsers") /*use get to associate GET HTTP and /albums path with handler function.
	passes the NAME of the function, not the result, which you would do by typing getUsers()  */

	router.Run("localhost:8080") //starts the server
}

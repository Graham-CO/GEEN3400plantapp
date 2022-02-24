package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/users", GetUsers) /*use get to associate GET HTTP and /albums path with handler function.
	passes the NAME of the function, not the result, which you would do by typing getUsers()  */
	router.GET("/users/:userid", GetUserByID)
	router.POST("/users", CreateUser)

	router.Run("localhost:8080") //starts the server
}

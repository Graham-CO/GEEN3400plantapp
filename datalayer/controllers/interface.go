package controllers

import (
	"github.com/gin-gonic/gin"
)

type Plant interface {
}

type PlantDef interface {
}

type Pot interface {
	GetPots(c *gin.Context)
	GetPotByID(c *gin.Context)
	AddPot(c *gin.Context)
	GetTemp(c *gin.Context)
}

type User interface {
	GetUsers(c *gin.Context)
	GetUserByID(c *gin.Context)
	CreateUser(c *gin.Context)
}

package controllers

import (
	"github.com/gin-gonic/gin"
)

type Plant interface {
	CreatePlant(c *gin.Context)
}

type PlantDef interface {
}

type Pot interface {
	GetTemp(c *gin.Context)
}

type User interface {
	GetUsers(c *gin.Context)
}

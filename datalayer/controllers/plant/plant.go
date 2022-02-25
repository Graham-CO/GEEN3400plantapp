package plant

import (
	"log"
	"net/http"
	"potbut/datalayer/entities"

	"cloud.google.com/go/firestore"
	"github.com/gin-gonic/gin"
)

// RESTful C.R.U API controller functions
// e.g., GET, POST, etc.

func CreatePlant(plants *firestore.CollectionRef) gin.HandlerFunc {
	fn := func(ctx *gin.Context) {
		var plant entities.Plant

		if err := ctx.BindJSON(&plant); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"code": http.StatusBadRequest, "message": err.Error()})
			return
		}

		log.Println("created plant", plant)

		wr, err := plants.Doc(plant.UserID).Create(ctx, &plant)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"code": http.StatusInternalServerError, "message": err.Error()})
			return
		}
		ctx.JSON(http.StatusOK, gin.H{"created_at": wr.UpdateTime, "id": plant.UserID, "name": plant.PlantName})
	}
	return fn
}

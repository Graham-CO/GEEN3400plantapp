package main

import (
	"context"
	"log"
	"os"
	"path"
	"potbut/datalayer/controllers/plant"
	"potbut/datalayer/controllers/pot"

	firebase "firebase.google.com/go"
	"github.com/gin-gonic/gin"
	"google.golang.org/api/option"
)

func main() {
	home, err := os.UserHomeDir()
	if err != nil {
		log.Fatal(err)
	}
	//service account
	sa := option.WithCredentialsFile(path.Join(home, "potbut-d8c82-firebase-adminsdk-8rgls-2054b45578.json"))
	// register app with Firebase
	app, err := firebase.NewApp(context.Background(), nil, sa) // context.Background() pushes to worker threads
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	// create Firestore client
	client, err := app.Firestore(context.Background())
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	defer client.Close() // close client when main() returns (i.e., app off)

	// TODO define custom middleware (output custom error message to user)
	router := gin.Default() // default logging and recovery
	router.POST("/plants", plant.CreatePlant(client.Collection("Plants")))
	router.POST("/pot", pot.WriteReading(client.Collection("Pots")))

	router.Run("localhost:50080") //starts the server, 8080 was being used
}

package main

import (
	"context"
	"log"
	"os"
	"path"
	"potbut/datalayer/controllers/plant"

	firebase "firebase.google.com/go"
	"github.com/gin-gonic/gin"
	"google.golang.org/api/option"
)

func main() {
	home, err := os.UserHomeDir()
	if err != nil {
		log.Fatal(err)
	}
	sa := option.WithCredentialsFile(path.Join(home, "potbut-d8c82-firebase-adminsdk-8rgls-2054b45578.json"))
	app, err := firebase.NewApp(context.Background(), nil, sa)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	client, err := app.Firestore(context.Background())
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	defer client.Close()

	router := gin.Default()
	router.POST("/plants", plant.CreatePlant(client.Collection("Plants")))
	router.GET("/users, getUsers") /*use get to associate GET HTTP and /albums path with handler function.
	passes the NAME of the function, not the result, which you would do by typing getUsers()  */

	router.Run("localhost:50080") //starts the server
}

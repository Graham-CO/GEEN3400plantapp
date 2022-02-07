// A simple example API written in Go, using the Gin package
// Graham Williams || grwi2594@colorado.edu

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Write Basic Functionality ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
package main

// Import supporting packages (dependencies)
import (
	"net/http"

	"github.com/gin-gonic/gin" // run "go  get -u github.com/gin-gonic/gin" to download and use gin web framework
)

// album represents data about a record album.
type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}

// albums slice (a slice is a view into an array) to seed record album data.
var albums = []album{
	{ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
	{ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
	{ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}

// getAlbums: responds with the list of all albums as JSON.
//            takes a gin.Context parameter --- carries request details, validates and serializes JSON, and more.
// 			  calls Context.IndentedJSON to serialize struct into JSON and add it to response
//
func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums) // Use c.JSON to use more compact JSON form -- harder to debug
	// First argument is HTTP status code you want to send to client --
	// 		passing StatusOK constant from net/http package to indicate 200 OK
}

// Assign handler function to an endpoint path
// getAlbums handles requests to the /albums endpoint path
func main() {
	router := gin.Default() // Initialize a default Gin router

	router.GET("/albums", getAlbums)   // Associate GET HTTP method at /albums path with a handler function
	router.POST("/albums", postAlbums) // Associate POST method at /albums path with postAlbums function

	router.Run("localhost:8080") // Attach router to http.Server and start the server
}

//////////////////////////////////////////////////// In the Terminal /////////////////////////////////////////////////////////
// Type "go get ." to add dependencies to the current directory (make sure you are in this package's directory)				//
// 			dependencies found in import() list																				//
// Next, type "go run ." to run the code (start up the HTTP server) --- this will occupy the terminal until server stopped	//
// Now, in a new terminal window, use "curl" to make a request to your running web service									//
// 			"curl http://localhost:8080/albums"																				//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Write Handler to Add New Item ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// POST request
// postAlbums adds an album from JSON received in the request body.
func postAlbums(c *gin.Context) {
	c.String(200, "monkeys")
	var newAlbum album

	// Call BindJSON to bind the received JSON to
	// newAlbum.
	if err := c.BindJSON(&newAlbum); err != nil { // Bind the request body to newAlbum
		c.String(408, err.Error()) //
		return
	}

	// Add the new album to the slice.
	albums = append(albums, newAlbum)            // JSON -> slice
	c.IndentedJSON(http.StatusCreated, newAlbum) // Add 201 status code to response

	// Include router.POST function in main() function
}

//////////////////////////////////////////////////// In the Terminal /////////////////////////////////////////////////////////
// Stop the previous instance (close the terminal) if it's still running													//
// go run . to start new instance																							//
// Use curl to make a request to running web service 																		//
// 		curl http://localhost:8080/albums \																					//
//			--include \																										//
//			--header "Content-type: application/json" \																		//
//			--request "POST" \																								//
//			--data '{"id": "4","title": "The Modern Sound of Betty Carter","artist": "Betty Carter","price":49:99}'			//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

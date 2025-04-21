package main

import (
	"log"
	"net/http"

	"github.com/abhishekkushwahaa/Machine-Coding-Interview/golang/caching/controllers"
	"github.com/abhishekkushwahaa/Machine-Coding-Interview/golang/caching/models"
)

func main() {
	addr := ":8080"

	models.ConnectDB()
	models.DBMigrate()

	mux := http.NewServeMux()
	mux.HandleFunc("/blogs/", controllers.BlogsShow)

	log.Printf("Server is listening at %s\n", addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}

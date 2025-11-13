package main

import (
	"database/sql"
	"fmt"
	"log"
)

func main() {
	// Connect to database
	db, err := sql.Open("postgres", "connection string")
	if err != nil {
		log.Fatal(err)
	}

	// Insert a test user
	_, err = db.Exec("INSERT INTO users (email) VALUES ($1)", "test@example.com")

	// Query all users
	rows, err := db.Query("SELECT id, email FROM users")

	// Print results
	fmt.Println("Users in database:")
	// ... print them
}

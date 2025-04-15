package main

import (
	"encoding/xml"
	"fmt"
	"os"
	"time"
)

type Item struct {
	Title       string    `xml:"title"`
	Link        string    `xml:"link"`
	Description string    `xml:"description"`
	Time        time.Time `xml:"time"`
}

type Channel struct {
	Title       string    `xml:"title"`
	Link        string    `xml:"link"`
	Description string    `xml:"description"`
	Time        time.Time `xml:"time"`
	Items       []Item    `xml:item`
}

func generateRSSFeed() ([]byte, error) {
	// Sample items for the feed
	items := []Item{
		{
			Title:       "Article 1",
			Link:        "https://example.com/article1",
			Description: "This is the description of article 1.",
			Time:        time.Now(),
		}, {
			Title:       "Article 2",
			Link:        "https://example.com/article2",
			Description: "This is the description of article 2.",
			Time:        time.Now().Add(-1 * time.Hour), // One Hour ago
		},
	}

	// RSS Feed Data
	feed := Channel{
		Title:       "Sample RSS Feed",
		Link:        "https://example.com",
		Description: "This is a sample RSS feed generated using Golang.",
		Time:        time.Now(),
		Items:       items,
	}

	// Marshal the data to XML
	xmlData, err := xml.MarshalIndent(feed, "", "  ")
	if err != nil {
		return nil, err
	}

	// Add XML header to the feed
	rssFeed := []byte(xml.Header + string(xmlData))

	return rssFeed, nil
}

func main() {
	// Generate the RSS Feed
	rssFeed, err := generateRSSFeed()
	if err != nil {
		fmt.Println("Error generating RSS Feed", err)
	}

	// Write the feed to a file
	file, err := os.Create("feed.xml")
	if err != nil {
		fmt.Println("Error Creating file:", err)
		return
	}
	defer file.Close()

	_, err = file.Write(rssFeed)
	if err != nil {
		fmt.Println("Error Writing file:", err)
		return
	}
	fmt.Println("RSS feed generated and saved to feed.xml!")
}

package main

import "fmt"

type Person struct {
	Name string
	Tags []string
}

// ShallowCopy
func (p *Person) ShallowCopy() Person {
	return *p // Note: Tags slice is shared
}

// DeepCopy
func (p *Person) DeepCopy() Person {
	// Copy the tags slice
	tagsCopy := make([]string, len(p.Tags))
	copy(tagsCopy, p.Tags)

	return Person{
		Name: p.Name,
		Tags: tagsCopy,
	}
}

func main() {
	original := Person{
		Name: "Abhi",
		Tags: []string{"Go", "Developer"},
	}

	shallow := original.ShallowCopy()
	deep := original.DeepCopy()

	// Modify original's tags
	original.Tags[0] = "Js"

	fmt.Println("Original:", original)
	fmt.Println("Shallow:", shallow)
	fmt.Println("Deep:", deep)
}

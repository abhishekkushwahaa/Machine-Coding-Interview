package main

import (
	"context"
	"fmt"
	"log"
	"time"

	pb "github.com/abhishekkushwahaa/grpc/proto/task"

	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to connect: %v", err)
	}
	defer conn.Close()

	client := pb.NewTaskServiceClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	// Schedule a Task
	taskID := "task1"
	resp, err := client.ScheduleTask(ctx, &pb.TaskRequest{Id: taskID, Name: "Data Processing"})
	if err != nil {
		log.Fatalf("Error scheduling task: %v", err)
	}
	fmt.Println("Task Scheduled:", resp)

	// Check Task Status
	time.Sleep(2 * time.Second)
	statusResp, err := client.GetTaskStatus(ctx, &pb.TaskStatusRequest{Id: taskID})
	if err != nil {
		log.Fatalf("Error getting task status: %v", err)
	}
	fmt.Println("Task Status:", statusResp)
}

package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"time"

	pb "github.com/abhishekkushwahaa/grpc/proto/task"
	"github.com/redis/go-redis/v9"
	"google.golang.org/grpc"
)

var redisClient *redis.Client

type TaskServer struct {
	pb.UnimplementedTaskServiceServer
	redisClient *redis.Client
}

func (s *TaskServer) ScheduleTask(ctx context.Context, req *pb.TaskRequest) (*pb.TaskResponse, error) {
	// Store task in Redis
	err := redisClient.Set(ctx, req.Id, "Scheduled", 0).Err()
	if err != nil {
		return nil, err
	}

	// Simulate background task execution
	go executeTask(req.Id)

	return &pb.TaskResponse{Id: req.Id, Status: "Scheduled"}, nil
}

func executeTask(taskID string) {
	time.Sleep(5 * time.Second) // Work Simulate
	ctx := context.Background()
	redisClient.Set(ctx, taskID, "Completed", 0)
	fmt.Println("Task", taskID, "Completed")
}

func (s *TaskServer) GetTaskStatus(ctx context.Context, req *pb.TaskStatusRequest) (*pb.TaskStatusResponse, error) {
	status, err := redisClient.Get(ctx, req.Id).Result()
	if err == redis.Nil {
		return &pb.TaskStatusResponse{Id: req.Id, Status: "Not Found"}, nil
	} else if err != nil {
		return nil, err
	}
	return &pb.TaskStatusResponse{Id: req.Id, Status: status}, nil
}

func main() {
	// Initialize Redis
	redisClient := redis.NewClient(&redis.Options{
		Addr: "localhost:6379",
	})

	listener, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	server := grpc.NewServer()
	pb.RegisterTaskServiceServer(server, &TaskServer{redisClient: redisClient})

	log.Println("gRPC Server running on :50051")
	if err := server.Serve(listener); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}

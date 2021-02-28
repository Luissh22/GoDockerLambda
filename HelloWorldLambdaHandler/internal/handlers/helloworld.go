package handlers

import "fmt"

type HelloWorldInput struct {
	Name string `json:"name"`
}

type HelloWorldResponse struct {
	Message string `json:"message"`
}

func Handler(input HelloWorldInput) (HelloWorldResponse, error) {
	message := fmt.Sprintf("Hello, %s!", input.Name)
	return HelloWorldResponse{
		Message: message,
	}, nil
}

package main

import (
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/luissh22/hello-world-lambda/internal/handlers"
)

func main() {
	lambda.Start(handlers.Handler)
}

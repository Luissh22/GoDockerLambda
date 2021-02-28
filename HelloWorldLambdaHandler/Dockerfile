FROM public.ecr.aws/lambda/provided:al2 as builder
# install compiler
RUN yum install -y golang
RUN go env -w GOPROXY=direct

WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main cmd/lambda/main.go

FROM public.ecr.aws/lambda/provided:al2
COPY --from=builder /app/main .

ENTRYPOINT ["./main"]
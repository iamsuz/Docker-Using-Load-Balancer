# Scaling Docker Services Using a Load Balancer

## Introduction

When running Docker containers in production, you may want to **scale** a service across multiple containers to handle more traffic. One way to achieve this is by using **Docker Compose** to run the same service across multiple containers. However, you cannot map the same host port to multiple containers. This is where a **load balancer** like **NGINX** comes in. It can distribute the incoming traffic to different containers using load balancing techniques such as **round-robin**.

In this guide, we will:

1. Scale a Docker service across multiple containers.
2. Use a **load balancer (NGINX)** to distribute traffic to the containers.
3. Avoid port mapping conflicts.

## Prerequisites

- Docker and Docker Compose installed.
- Basic understanding of Docker and Docker Compose.
- A simple service (e.g., an API) to scale.

## Step 1: Scaling a Service with Docker Compose

Let's assume you have a simple service defined in a `docker-compose.yml` file. By default, a service in Docker Compose runs as a single container. To scale the service across multiple containers, we can use the `--scale` flag.

` docker compose up --scale api=2`


for reference [https://dev.to/iamsujit/scale-docker-without-k8s-or-swarm-19an]

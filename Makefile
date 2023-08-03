# Makefile for managing Docker Compose commands

# Use docker-compose.dev.yml for development
COMPOSE_DEV = docker-compose -f docker-compose.yml -f docker-compose.dev.yml

# Default target: start the regular setup
all: start

up: 
	$(COMPOSE_DEV) up
# Start the regular setup
start:
	$(COMPOSE_DEV) up -d

# Start the development environment
dev:
	$(COMPOSE_DEV) up -d

# Stop all containers
stop:
	$(COMPOSE_DEV) kill

# Remove all containers and volumes
clean:
	docker-compose down -v

# Run migrations
migrate:
	$(COMPOSE_DEV) run migrations

# Build Ember.js frontend
build_frontend:
	$(COMPOSE_DEV) build emberjs

# Clean up unused Docker resources (containers, images, volumes, networks)
prune:
	docker system prune --all --volumes --force

# Help command to display available targets
help:
	@echo "Usage: make <target>"
	@echo "Available targets:"
	@echo "  start         Start the regular setup"
	@echo "  dev           Start the development environment"
	@echo "  stop          Stop all containers"
	@echo "  clean         Remove all containers and volumes"
	@echo "  migrate       Run migrations"
	@echo "  build_frontend  Build Ember.js frontend"
	@echo "  prune         Clean up unused Docker resources"
	@echo "  help          Show this help message"

# Makefile for managing Docker Compose commands

# Use docker-compose.dev.yml for development
COMPOSE_DEV = docker-compose.yml -f docker-compose.dev.yml

list: 
	@echo "frontend" - http://localhost:4200
	@echo "virtuoso-sparql" - http://localhost:8900/sparql
	@echo "doctors api" - http://localhost/doctors
	@echo "practices api" - http://localhost/practices

all: start

up: 
	docker-compose up


start: dev list 
	
dev:
	$(COMPOSE_DEV) up -d

stop:
	$(COMPOSE_DEV) kill

clean:
	$(COMPOSE_DEV) down -v

migrate:
	$(COMPOSE_DEV) run migrations

build: 
	docker-compose build

build_frontend:
	$(COMPOSE_DEV) build emberjs

prune:
	docker system prune --all --volumes --force

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


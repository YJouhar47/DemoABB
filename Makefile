COMPOSE_DEV = docker-compose -f docker-compose.yml -f docker-compose.dev.yml

prepare: 
	sh prepare.sh

list: 
	@echo "Front-End" - http://localhost:4200
	@echo "Virtuoso-SparQL" - http://localhost:8900/sparql
	@echo "Doctors API" - http://localhost/doctors
	@echo "Practices API" - http://localhost/practices

up: 
	$(COMPOSE_DEV) up

start: list dev 
	
dev:
	$(COMPOSE_DEV) up -d

stop:
	$(COMPOSE_DEV) kill

down: 
	$(COMPOSE_DEV) down

clean:
	$(COMPOSE_DEV) down -v

migrate:
	$(COMPOSE_DEV) run migrations

build: 
	$(COMPOSE_DEV) build

build_frontend:
	$(COMPOSE_DEV) build emberjs

prune:
	docker system prune --all --volumes --force

help:
	@echo "Usage: make <target>"
	@echo "Available targets:"
	@echo "  start         Start the regular setup"
	@echo "  dev           Start the development environment"
	@echo "  stop          Kill all containers"
	@echo "  down          Stop all containers"
	@echo "  list          Show the list of links"
	@echo "  clean         Remove all containers and volumes"
	@echo "  migrate       Run migrations"
	@echo "  build_frontend  Build Ember.js frontend"
	@echo "  prune         Clean up unused Docker resources"
	@echo "  help          Show this help message"


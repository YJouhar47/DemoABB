start: 
	docker-compose up -d
up: 
	docker-compose up -d
stop: 
	docker-compose kill
down: 
	docker-compose down
build: 
	docker-compose build
restart: 
	docker-compose restart
remove: 
	docker-compose rm -f
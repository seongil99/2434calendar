db:
	docker run --rm -d \
		--name postgres \
		-e POSTGRES_USER=postgres \
		-e POSTGRES_PASSWORD=postgres \
		-e POSTGRES_DB=calendardb \
		-p 5432:5432 \
		postgres:17

db-stop:
	docker stop postgres

db-start:
	docker start postgres

clean:
	docker stop postgres || true
	docker rm postgres || true
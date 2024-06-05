#!/bin/bash

POSTGRES_NAME=caal-postgres
POSTGRES_SERVICE_PORT=5432
POSTGRES_PASSWORD=caal
POSTGRES_USER=caal

docker run \
    --name $POSTGRES_NAME \
    -d \
    -p $POSTGRES_SERVICE_PORT:$POSTGRES_SERVICE_PORT \
    --health-cmd pg_isready \
    --health-interval 10s \
    --health-retries 5 \
    --health-timeout 5s \
    -e "POSTGRES_PASSWORD=$POSTGRES_PASSWORD" \
    -e "POSTGRES_USER=$POSTGRES_USER" \
    postgres:16.3
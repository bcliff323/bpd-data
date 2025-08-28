FROM postgres:latest as bpd_data
WORKDIR /app
COPY ./db/init.sh /docker-entrypoint-initdb.d
COPY ./db/dump.sql ./db/dump.sql
COPY ./db/csv/arrests.csv ./db/csv/arrests.csv
COPY ./db/csv/incidents.csv ./db/csv/incidents.csv

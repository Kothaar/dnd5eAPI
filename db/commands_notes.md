# Docker Setup For MySql

## Create container with volume set
docker run --name dndb -v /home/kellywho/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=[password]  -d mysql:latest
## Access container
docker exec -it dndb bash

## Access mysql

> mysql -u root -p 



HOST PORT binded to MYSQL 3306 PORT: 57000

import database schema:
mysql -u [db_username] -p [database_name] < file.sql

empty database_name will have to be created before importing
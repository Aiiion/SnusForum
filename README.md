# u10-business-idea-snusmumriken-barn
## Description
This application was built with:
- React
- Laravel sail
- Bootstrap
The aim with this app is to get all snus-enthusiasts a forum where we can share snus-recipes, tips on favourite-snus and much more.
### Skiss databas
[draw.io](https://app.diagrams.net/#G1NGWY1s4TLEN6tDkRtfDoxssnLPw4PbVJ)
### Skiss design
[Figma skiss](https://www.figma.com/file/GeBkfYMbt61M3Lec1RUkR0/u10-Snus?node-id=0%3A1)
## Setting up the application
### Getting started with frontend React
- Clone this repo
- cd into the frontend folder
- run:
    npm install
#### Deploy to surge
If you have access to deploy frontend to surge, accept the invite first and then follow these instructions:
- cd into the frontend folder
- npm install --global surge
- npm run-script build && cd build && cp index.html 200.html && surge --domain snusare.surge.sh
Next time you will deploy to surge:
- cd frontend/build/
- surge --domain snusare.surge.sh
### Getting started with backend Laravel
- If not already done; clone this repo
- cd into the backend folder
- run:
    docker run --rm \
        -u “$(id -u):$(id -g)” \
        -v $(pwd):/opt \
        -w /opt \
        laravelsail/php80-composer:latest \
        composer install --ignore-platform-reqs
- Make the .env file
- .vendor/bin/sail up (or artisan key:generate)
- Open the application at localhost:80
- Follow the instructions to generate a key
#### Setting up database connection
./vendor/bin/sail exec mysql bash

mysql

show databases;

CREATE USER 'sail'@'172.**.0.7' IDENTIFIED BY 'password';

GRANT ALL ON *.* TO 'sail'@'172.**.0.7';

FLUSH PRIVILEGES;
#### Install jwt in backend folder

./vendor/bin/sail composer require tymon/jwt-auth --ignore-platform-reqs 
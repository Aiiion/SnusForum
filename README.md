# u10-business-idea-snusmumriken-barn

### Skiss databas
[draw.io](https://app.diagrams.net/#G1NGWY1s4TLEN6tDkRtfDoxssnLPw4PbVJ)

install jwt in backend folder

./vendor/bin/sail composer require tymon/jwt-auth --ignore-platform-reqs 

## Description
This application was built with:
- React
- Laravel sail
- Bootstrap
The aim with this app is to get all snus-enthusiasts a forum where we can share snus-recipes, tips on favourite-snus and much more.
## Setting up the application
### Getting started with React
- Clone this repo
- cd into the frontend folder
- run:
    npm install
### Getting started with Laravel
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
- run .vendor/bin/sail up (eller artisan key:generate...)
- Open the application at localhost:80
- Follow the instructions to generate a key
### Getting started with Bootstrap

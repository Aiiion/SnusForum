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
- npm install
#### Deploy to surge
If you have access to deploy frontend to surge, accept the invite first and then follow these instructions:
- cd into the frontend folder
- npm install --global surge
- npm run-script build && cd build && cp index.html 200.html && surge --domain snusare.surge.sh
Next time you will deploy to surge:
- cd into the frontend folder
- npm run-script deploy
The page is deployed to snusare.surge.sh
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

API ROUTES:

api/auth

/snuses:

ger alla snuser och dess snittbetyg. benämnt snuses

/snuses/{id}:

ger alla data om en snus baserat på id. benämnt snus

/reviews:

ger alla reviews. benämnt reviews

/reviews/{id}:

ger all data om en review baserat på id. benämnt review

/store-review:

sparar en review, vill ha följande data
-snuses_id
-body
-rating
(går även att lägga till title om så önskas)

/delete-review/{id}:

tar bort en specifik review baserat på dess id

/posts:
ger alla posts. benämnt posts

/posts/{id}:

ger all data om en post baserat på id. benämnt post

alla dess kategorier. benämnt categories

alla dess kommentarer. benämnt comments


/store-posts:

sparar en post, vill ha följande data
-title
-body
-categorys_id

/delete-posts/{id}:

tar bort en post baserat på dess id

/categorys:

ger alla categorys. benämnt categorys

/categorys/{id}:

ger all data om en category. benämnt category

ger alla posts med en viss category. benämnt posts

/flavours:

ger alla flavours. benämnt flavours

/flavours/{id}:

ger all data om en flavour. benämnt flavour

skickar alla snuser med denna flavour. benämnt snuses

/comments:

ger alla comments. benämnt comments

/comments/{id}:

ger all data om en comment. benämnt comment

/store-comments:

sparar en comment, vill ha följande data
-body
-posts_id

/delete-comments/{id}:

tar bort en comment baserat på dess id

/favourites:

 returns a list of all  favourites available 

/favourites/{userID}: 

returns a list of specified users favourites 

/store-favourites: 

saves a flavour to logged in users favourites req: flavourID

/delete-favourites/{id}:

tar bort en favorite baserat på dess id

/user-profile:

Ger all data om den inloggade usern. benämnt user

Ger alla favourites inloggade usern har. Benämnt favourites




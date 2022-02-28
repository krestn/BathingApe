
# Bathing Ape 

This is an [Instagram](https://www.instagram.com/) inspired clone. 

## Table of Contents 

1. [General Info](#general-info)
2. [Wiki-Documentation](#wiki-documentation)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Development](#development)



### General Info 
***
# Bathing Ape
Bathing Ape is an application where users can capture and share their favorite, everyday moments and share their leisurely lifestyle with the world.
 
* Link to live  [Bathing Ape](https://bathing-ape.herokuapp.com/) project. 

## Key Functionalities 

Posts, Comments, and Search 
Bathing Ape allows users to create posts to share images of their laid back lifestyle. 

Users can also 
comment on posts. 

  * Posts: Users can create, read, update, and delete posts.
  *Likes: Users can create, read, and update/delete likes.
  * Follows:  Users can create, read, and update/delete posts.
  * Comment: Users can create, read, and update comments.
  * Users can only edit/update and delete posts and comments that they have created. 
   
### Bathing Ape Login Page 
![Splash](https://user-images.githubusercontent.com/48869138/155946840-5054ceb4-cf76-4c9a-97b7-f164b208597b.JPG)


### Bathing Ape Sign Up Page
![Signin](https://user-images.githubusercontent.com/48869138/155946987-a3742870-00be-4713-b26d-32e5999efa7c.JPG)

### Bathing Ape Home Page
![main](https://user-images.githubusercontent.com/48869138/155947023-46c8c507-e150-4002-bd42-e3fd814d318e.JPG)




### Bathing Ape Profile Page
![Profile Page](https://user-images.githubusercontent.com/48869138/155947008-75ef719b-6791-4cb7-9632-8018f6dd685a.JPG)


### Post Detail Page / Post Comments (Modal)
![Capture](https://user-images.githubusercontent.com/48869138/155947058-e14ca5b2-1ae8-4c7d-9299-f5eeaa23908a.JPG)


### Create Post Form (Modal)
![postform](https://user-images.githubusercontent.com/48869138/155947012-cf953c1a-c2d9-4222-8903-286ce73dda08.JPG)


### Main Feed
![Feed](https://user-images.githubusercontent.com/48869138/155947032-c4124c00-2b20-411e-af3b-f0da4acf82c4.JPG)




## Wiki Documentation: 
***
* [Home] https://github.com/krestn/BathingApe/wiki
* [API Documentation] https://github.com/krestn/BathingApe/wiki/API-Documentation
* [Database Schema] https://github.com/krestn/BathingApe/wiki/Database-Schema 
* [User Stories] https://github.com/krestn/BathingApe/wiki/User-Stories-and-Acceptance-Criteria

## Technologies 
***
Bathing Ape was developed using the following Technologies: 

<img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>


 React | Redux | Flask | Postgres |SQLAlchemy | Alembic | CSS | Git | Node.js | NPM | HTML / JSX | Heroku

## Languages 
***

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=50/>
* JavaScript (frontend)
* Python (backend)


## Installation 

To install Bathing Ape on your local machine please clone the project repository. 

1 )  `git clone https://github.com/krestn/BathingApe.git`

2 ) cd into 'bape' and cd into 'BathingApe'
    `cd bape/`
    `cd BathingApe/`

3 )  Install dependencies
     
     `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`

4 )  Create a .env file based on the example with proper settings for your development environment

5 )  Setup your PostgreSQL user, password, database, and make sure it matches your .env file


  
6 ) To setup the backend application...
   
   enter the pipenv shell, migrate your database, seed your database, and run the flask application 
     
  •  `cd BathingApe/` 

  •  `pipenv shell` to enter the pipenv shell 

  •  `flask db upgrade`

  •  `flask seed all`

  •  `flask run` while in the shell and within the backend (BathingApe/) directory under localhost:5000
  
7 ) To run the frontend react application...

  •  Change into the frontend directory `cd BathingApe/react-app/`

  •  Run `npm install` to install all dependencies from the package.json within the frontend directory 
  
  •  `npm start` within the frontend directory(BathingApe/react-app) under localhost:3000
  
## Development 
This project was developed by a single developer (Kreston Caldwell). Below is a description of the top features of the project and a brief description of challenges faced during the two week development cycle. 

#### Highlight features: 

* Design: Bathing was designed to be an interactive website that focuses on user experience and incorporates modern design elements. This is accomplished through the use of modals to limit the need to redirect users to a new page. This functionality also gives the application a sleak design and neomporphic appearance.




#### Challenges:   


## Future Features:

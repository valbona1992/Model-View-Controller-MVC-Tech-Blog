# Model-View-Controller-MVC-Tech-Blog

Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents 
* [User Story](#userstory)
* [Demo Video](#demovideo)
* [Screenshots](#screenshots)
* [Installation](#installation)
* [Usage](#usage)
* [Technology](#technology)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Screenshots 

<img src="images/homepage.png" alt="screenshot" />
<img src="images/login.png" alt="screenshot" />
<img src="images/dashboard.png" alt="screenshot" />
<img src="images/comments.png" alt="screenshot" />

## Installation
Run `npm install` to install application dependencies (express, sequelize, mysql, and dotenv).

Create `.env` file to add password privacy. 
## Usage
This app is deployed on Heroku [here](**INSERTLINK).

To run locally, use MYSQL to create the database from the schema folder, and from the command line, run `npm run seed`. Afterwards, run `node server.js`. Once the server is started,the app can open at localhost:3001 in a browser of choice.

Insomnia will be used to test routes on on http//:localhost:3001/.

## Technology
- Node.js
- MySQL
- Sequelize
- NPM 
- ENV
- bcrypt
- Express (Session && Handlebars)
- JavaScript 
- Insomnia 
- Heroku 


## Contributors
:woman_with_headscarf: [Valbona Bajrami](https://github.com/valbona1992)
  
## License
License is [MIT](https://opensource.org/licenses/MIT) standard license.

## Tests
No testing at this time.

## Questions
GitHub: https://github.com/valbona1992  <br/>
Email me with any questions: valbona12@gmail.com 
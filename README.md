# Hiroki Basic Template

Hiroki basic API.

### Features:
* Auth using jwt.
* Users base model.
* bcrypt for passwords.
* models and hiroki implemented for /api/*


### Usage:

Install dependencies:
```
npm install
```

Dev:
```
npm run dev
```
dev version includes `pino-pretty` for better logs.

Prod: 
```
npm start
```
### Env variables:
copy `.env.template` to `.env` and fill all the variables.


### Routes:

#### POST /api/auth/logig
post with email and password from env variables for first admin.

body:
```
{
    "email": "example",
    "password": "example-pass"
}
```
Response: jwt

#### Private routes
Access private routes with Bearer authentication using jwt.

/api/users - Basic Auth Required.

### Config:
Edit public routes in `src/config/paths.js`

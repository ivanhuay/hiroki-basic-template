# Hiroki Basic Template

Hiroki basic API with authentication and note management.

## Features:
* Authentication using JWT
* User management with bcrypt for password hashing
* Note management (create, edit, delete)
* RESTful API endpoints using Hiroki
* Environment variable configuration

## Usage:

1. Install dependencies:
```
npm install
```

2. Development:
```
npm run dev
```
The development version includes `pino-pretty` for better logging.

3. Production:
```
npm start
```

## Environment Variables:
Copy `.env.template` to `.env` and fill in all the variables.

## API Routes:

### Authentication:

#### POST /api/auth/login
Authenticate a user and receive a JWT.

Request body:
```json
{
    "email": "example@email.com",
    "password": "your-password"
}
```
Response: JWT token

### User Management:

#### GET /api/users
Get all users (requires authentication)

#### POST /api/users
Create a new user (requires authentication)

#### GET /api/users/:id
Get a specific user (requires authentication)

#### PUT /api/users/:id
Update a user (requires authentication)

#### DELETE /api/users/:id
Delete a user (requires authentication)

### Note Management:

#### GET /api/notes
Get all notes (requires authentication)

#### POST /api/notes
Create a new note (requires authentication)

Request body:
```json
{
    "title": "Note Title",
    "content": "Note Content",
    "description": "Note Description"
}
```

#### GET /api/notes/:id
Get a specific note (requires authentication)

#### PUT /api/notes/:id
Update a note (requires authentication)

#### DELETE /api/notes/:id
Delete a note (requires authentication)

## Authentication:
All private routes require Bearer authentication using the JWT obtained from the login endpoint.

## Configuration:
Edit public routes in `src/config/paths.js`

## Models:

### User Model:
- Email
- Password (hashed using bcrypt)
- Other user-related fields

### Note Model:
```javascript
{
    title: String,
    content: String,
    description: String,
    timestamps: true
}
```

## Contributing:
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License:
This project is licensed under the MIT License
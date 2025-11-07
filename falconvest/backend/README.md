# FalconVest Backend API

Express.js backend with OAuth authentication (Google & GitHub) using Passport.js.

## Features

- ✅ Google OAuth 2.0 authentication
- ✅ GitHub OAuth authentication  
- ✅ Email/password registration and login
- ✅ Password hashing with bcrypt
- ✅ Session management with express-session
- ✅ CORS enabled for frontend
- ✅ RESTful API endpoints

## Project Structure

```
backend/
├── config/
│   └── passport.js          # Passport OAuth strategies
├── data/
│   └── users.js             # In-memory user storage
├── routes/
│   ├── auth.js              # Authentication routes
│   └── user.js              # User profile routes
├── .env                     # Environment variables
├── .env.example             # Example environment file
├── .gitignore
├── package.json
├── server.js                # Main server file
└── README.md
```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your OAuth credentials:

```bash
cp .env.example .env
```

Then edit `.env` with your actual credentials (see OAUTH_SETUP_GUIDE.md in parent folder).

### 3. Start the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server runs on `http://localhost:5000`

## API Endpoints

### Authentication Routes (`/api/auth`)

- **POST** `/api/auth/register` - Register with email/password
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }
  ```

- **POST** `/api/auth/login` - Login with email/password
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **POST** `/api/auth/logout` - Logout current user

- **GET** `/api/auth/status` - Check authentication status

- **GET** `/api/auth/google` - Initiate Google OAuth flow

- **GET** `/api/auth/google/callback` - Google OAuth callback

- **GET** `/api/auth/github` - Initiate GitHub OAuth flow

- **GET** `/api/auth/github/callback` - GitHub OAuth callback

### User Routes (`/api/user`)

- **GET** `/api/user/profile` - Get current user profile (requires auth)

### Health Check

- **GET** `/api/health` - Server health check

## Data Storage

Currently uses in-memory storage for development. In production, replace with a real database:

- MongoDB (with Mongoose)
- PostgreSQL (with Sequelize/Prisma)
- MySQL
- etc.

## Security Notes

⚠️ **Important for Production:**

1. **Replace in-memory storage** with a real database
2. **Use environment-specific secrets** (not the default ones)
3. **Enable HTTPS** - OAuth requires it
4. **Set secure cookie flags** in production
5. **Implement rate limiting** (express-rate-limit)
6. **Add CSRF protection** (csurf)
7. **Validate and sanitize inputs** (express-validator)
8. **Use helmet.js** for security headers
9. **Keep dependencies updated** (npm audit)
10. **Never commit .env files** to version control

## Dependencies

### Main Dependencies
- `express` - Web framework
- `express-session` - Session management
- `passport` - Authentication middleware
- `passport-google-oauth20` - Google OAuth strategy
- `passport-github2` - GitHub OAuth strategy
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT tokens (optional)

## Environment Variables

Required variables in `.env`:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
SESSION_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

## Development

The server uses Node's `--watch` flag for auto-reloading during development:

```bash
npm run dev
```

## Testing

To test the API endpoints, you can use:

- Postman
- Insomnia
- cURL
- Thunder Client (VS Code extension)

Example cURL request:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","firstName":"Test","lastName":"User"}'
```

## Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use a process manager (PM2, systemd)
3. Set up a reverse proxy (Nginx, Apache)
4. Enable HTTPS with SSL certificates
5. Use a real database
6. Set up logging and monitoring
7. Configure firewall rules
8. Use environment-specific .env files

## Troubleshooting

**Port already in use:**
```bash
# Find process on port 5000
netstat -ano | findstr :5000

# Kill the process
taskkill /PID <process_id> /F
```

**OAuth errors:**
- Check redirect URIs match exactly
- Verify client ID and secret are correct
- Ensure backend is accessible at the redirect URI

**CORS errors:**
- Verify `FRONTEND_URL` in .env matches your frontend URL
- Check that credentials: true is set in CORS config

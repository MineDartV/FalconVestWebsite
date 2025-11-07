# OAuth Setup Guide for FalconVest

This guide will help you set up Google and GitHub OAuth authentication for your FalconVest application.

## Prerequisites

- A Google account
- A GitHub account
- Backend server installed and configured

## Part 1: Google OAuth Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter project name: `FalconVest` (or your preferred name)
5. Click "Create"

### Step 2: Enable Google+ API

1. In your project, go to **APIs & Services** > **Library**
2. Search for "Google+ API"
3. Click on it and press "Enable"

### Step 3: Configure OAuth Consent Screen

1. Go to **APIs & Services** > **OAuth consent screen**
2. Select **External** user type
3. Click "Create"
4. Fill in the required fields:
   - **App name**: FalconVest
   - **User support email**: Your email
   - **Developer contact email**: Your email
5. Click "Save and Continue"
6. Skip the "Scopes" section (click "Save and Continue")
7. Add test users (your email) under "Test users"
8. Click "Save and Continue"

### Step 4: Create OAuth Credentials

1. Go to **APIs & Services** > **Credentials**
2. Click "Create Credentials" > "OAuth client ID"
3. Select **Web application**
4. Name it: `FalconVest Web Client`
5. Add Authorized JavaScript origins:
   ```
   http://localhost:3000
   http://localhost:5000
   ```
6. Add Authorized redirect URIs:
   ```
   http://localhost:5000/api/auth/google/callback
   ```
7. Click "Create"
8. **Copy the Client ID and Client Secret** - you'll need these!

### Step 5: Add to Backend .env File

Open `backend/.env` and update:
```env
GOOGLE_CLIENT_ID=your-actual-client-id-here
GOOGLE_CLIENT_SECRET=your-actual-client-secret-here
```

---

## Part 2: GitHub OAuth Setup

### Step 1: Register a New OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "OAuth Apps" in the left sidebar
3. Click "New OAuth App"

### Step 2: Fill in Application Details

1. **Application name**: FalconVest
2. **Homepage URL**: `http://localhost:3000`
3. **Application description**: Investment platform (optional)
4. **Authorization callback URL**: `http://localhost:5000/api/auth/github/callback`
5. Click "Register application"

### Step 3: Generate Client Secret

1. After registration, you'll see your **Client ID**
2. Click "Generate a new client secret"
3. **Copy both the Client ID and Client Secret immediately** - the secret is only shown once!

### Step 4: Add to Backend .env File

Open `backend/.env` and update:
```env
GITHUB_CLIENT_ID=your-actual-client-id-here
GITHUB_CLIENT_SECRET=your-actual-client-secret-here
```

---

## Part 3: Starting the Application

### Step 1: Start the Backend Server

Open a terminal in the `backend` folder:
```bash
cd backend
npm start
```

The backend should start on `http://localhost:5000`

### Step 2: Start the Frontend (if not already running)

Open another terminal in the project root:
```bash
npm run dev
```

The frontend should be on `http://localhost:3000`

---

## Part 4: Testing OAuth Login

### Test Google Login:
1. Go to `http://localhost:3000/login`
2. Click the "Google" button
3. You'll be redirected to Google's login page
4. Sign in with your Google account
5. Grant permissions
6. You'll be redirected back to FalconVest as a logged-in user

### Test GitHub Login:
1. Go to `http://localhost:3000/login`
2. Click the "GitHub" button
3. You'll be redirected to GitHub's authorization page
4. Click "Authorize"
5. You'll be redirected back to FalconVest as a logged-in user

---

## Troubleshooting

### Error: "redirect_uri_mismatch"
- **Solution**: Make sure the redirect URI in your OAuth app settings exactly matches:
  - Google: `http://localhost:5000/api/auth/google/callback`
  - GitHub: `http://localhost:5000/api/auth/github/callback`
- No trailing slashes, exact port numbers

### Error: "Access denied" or "Invalid client"
- **Solution**: Double-check that you copied the Client ID and Client Secret correctly into the `.env` file
- Make sure there are no extra spaces or quotes

### Backend won't start
- **Solution**: Make sure you ran `npm install` in the backend folder
- Check that all dependencies are installed
- Verify your `.env` file exists and has all required variables

### OAuth buttons don't work
- **Solution**: 
  - Make sure the backend server is running on port 5000
  - Check browser console for errors
  - Verify the frontend is making requests to `http://localhost:5000`

### Session not persisting
- **Solution**: Make sure cookies are enabled in your browser
- Clear browser cache and cookies
- Check that `SESSION_SECRET` is set in `.env`

---

## Production Deployment

When deploying to production:

1. **Update OAuth App URLs** in Google and GitHub:
   - Use your production domain instead of `localhost`
   - Example: `https://falconvest.com/api/auth/google/callback`

2. **Update Environment Variables**:
   ```env
   NODE_ENV=production
   FRONTEND_URL=https://falconvest.com
   SESSION_SECRET=generate-a-very-long-random-string
   ```

3. **Enable HTTPS**:
   - OAuth requires HTTPS in production
   - Set up SSL certificates (Let's Encrypt, Cloudflare, etc.)

4. **Security Considerations**:
   - Use a strong, random `SESSION_SECRET`
   - Enable `secure` cookies in production
   - Set up CORS properly for your production domain
   - Consider implementing rate limiting
   - Add CSRF protection

---

## Additional Resources

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Passport.js Documentation](http://www.passportjs.org/docs/)

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Check the backend terminal for server errors
3. Verify all environment variables are set correctly
4. Ensure redirect URIs match exactly in OAuth app settings

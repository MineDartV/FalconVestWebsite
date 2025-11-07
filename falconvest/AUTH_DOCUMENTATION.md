# Authentication System Documentation

## Overview
FalconVest now has a complete user authentication system with login, registration, and session management.

## Features

### 1. User Registration
- **Route**: `/register`
- **Features**:
  - First name and last name fields
  - Email validation
  - Password strength requirement (minimum 8 characters)
  - Password confirmation
  - Terms of service acceptance
  - Social login options (Google, GitHub - UI only, not implemented)

### 2. User Login
- **Route**: `/login`
- **Features**:
  - Email and password authentication
  - Remember me option
  - Forgot password link (UI only)
  - Social login options (Google, GitHub - UI only, not implemented)

### 3. User Dashboard
- **Route**: `/dashboard`
- **Protected**: Requires authentication
- **Features**:
  - Portfolio overview
  - Investment statistics
  - Quick action buttons
  - Getting started guide

### 4. Navigation Updates
- **Not Logged In**: Shows "Log In" and "Get Started" buttons
- **Logged In**: Shows user avatar with dropdown menu containing:
  - User name and email
  - Dashboard link
  - Profile settings link
  - Logout button

## Data Storage

### LocalStorage
The authentication system uses browser localStorage to persist user data:

1. **users**: Array of all registered users
   - Contains: id, email, password (plain text - for demo only!), firstName, lastName, createdAt

2. **user**: Currently logged-in user
   - Contains: id, email, firstName, lastName

### Security Note
⚠️ **IMPORTANT**: This is a demo/development implementation. In production:
- Never store passwords in plain text
- Use proper backend authentication with encrypted passwords
- Implement JWT tokens or session cookies
- Use HTTPS
- Add CSRF protection
- Implement rate limiting

## Components

### AuthContext (`src/context/AuthContext.tsx`)
Provides authentication state and methods throughout the app:
- `user`: Current user object or null
- `isAuthenticated`: Boolean indicating if user is logged in
- `login(email, password)`: Login method
- `register(email, password, firstName, lastName)`: Registration method
- `logout()`: Logout method

### ProtectedRoute (`src/components/ProtectedRoute.tsx`)
Wrapper component for routes that require authentication. Redirects to `/login` if user is not authenticated.

## Usage Examples

### Using Authentication in a Component
```tsx
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Creating a Protected Route
```tsx
<Route 
  path="/my-protected-page" 
  element={
    <ProtectedRoute>
      <MyProtectedPage />
    </ProtectedRoute>
  } 
/>
```

## Testing the System

1. **Register a New User**:
   - Go to `/register`
   - Fill in the form
   - Click "Create Account"

2. **Login**:
   - Go to `/login`
   - Enter your email and password
   - Click "Log In"

3. **Access Dashboard**:
   - After logging in, click on your name in the navigation
   - Select "Dashboard"
   - Or navigate directly to `/dashboard`

4. **Logout**:
   - Click on your name in the navigation
   - Click "Log Out"

## Future Enhancements

- [ ] Backend integration with real database
- [ ] Secure password hashing (bcrypt)
- [ ] Email verification
- [ ] Password reset functionality
- [ ] OAuth integration (Google, GitHub)
- [ ] Profile page with user settings
- [ ] Session timeout
- [ ] Two-factor authentication
- [ ] Account deletion
- [ ] Remember me functionality (persistent sessions)

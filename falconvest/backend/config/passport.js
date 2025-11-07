import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { users } from '../data/users.js';

// Serialize user to session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

// Google OAuth Strategy
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists
    let user = users.find(u => u.googleId === profile.id);

    if (user) {
      return done(null, user);
    }

    // Create new user
    user = {
      id: Date.now().toString(),
      googleId: profile.id,
      email: profile.emails[0].value,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      avatar: profile.photos[0]?.value,
      provider: 'google',
      createdAt: new Date().toISOString()
    };

    users.push(user);
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
  }));
} else {
  console.warn('⚠️  Google OAuth not configured. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env');
}

// GitHub OAuth Strategy
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/api/auth/github/callback',
    scope: ['user:email'],
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists
    let user = users.find(u => u.githubId === profile.id);

    if (user) {
      return done(null, user);
    }

    // Get email from profile
    const email = profile.emails?.[0]?.value || `${profile.username}@github.com`;
    
    // Parse name
    const displayName = profile.displayName || profile.username;
    const nameParts = displayName.split(' ');
    const firstName = nameParts[0] || profile.username;
    const lastName = nameParts.slice(1).join(' ') || '';

    // Create new user
    user = {
      id: Date.now().toString(),
      githubId: profile.id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      avatar: profile.photos[0]?.value,
      provider: 'github',
      createdAt: new Date().toISOString()
    };

    users.push(user);
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
  }));
} else {
  console.warn('⚠️  GitHub OAuth not configured. Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in .env');
}

export default passport;

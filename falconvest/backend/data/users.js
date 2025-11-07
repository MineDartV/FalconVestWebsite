// In-memory user storage (for development)
// In production, replace this with a database
export const users = [];

// Helper function to find user by email
export const findUserByEmail = (email) => {
  return users.find(u => u.email === email);
};

// Helper function to find user by ID
export const findUserById = (id) => {
  return users.find(u => u.id === id);
};

// Helper function to add user
export const addUser = (user) => {
  users.push(user);
  return user;
};

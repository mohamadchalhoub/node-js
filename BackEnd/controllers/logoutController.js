

const logout = (req, res) => {
  // Clear the token from the client's browser
  res.clearCookie('token');

  // Respond with a success message
  res.json({ success: true, message: 'Logged out successfully.' });
};

// Export the logout function for use in other parts of your application
module.exports = logout;

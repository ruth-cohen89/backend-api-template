function User(
  username,
  password,
  email,
  role,
  createdAt,
  emailVerified,
  verificationToken,
  verificationTokenExpires
) {
  return {
    getUserName: () => username,
    getPassword: () => password,
    getEmail: () => email,
    getRole: () => role,
    getCreatedAt: () => createdAt,
    getEmailVerified: () => emailVerified,
    getVerificationToken: () => verificationToken,
    getVerificationTokenExpires: () => verificationTokenExpires,
  };
}

module.exports = User;

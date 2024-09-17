function User(
  username,
  password,
  email,
  role,
  active,
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
    getIsActive: () => active,
    getCreatedAt: () => createdAt,
    getEmailVerified: () => emailVerified,
    getVerificationToken: () => verificationToken,
    getVerificationTokenExpires: () => verificationTokenExpires,
  };
}

module.exports = User;

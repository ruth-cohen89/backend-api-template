class User {
  constructor(
    name,
    email,
    password,
    createdAt = new Date(),
    updatedAt = new Date()
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = User;

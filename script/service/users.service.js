class UsersService {
  static async create(name, email, password) {
    const { data } = await HttpClient.api.post("/users", {
      name,
      email,
      password,
    });

    return data;
  }
}

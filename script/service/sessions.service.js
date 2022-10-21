class SessionsService {
  static async create(email, password) {
    const { data } = await HttpClient.api.post("/sessions", {
      email,
      password,
    });

    return data;
  }
}

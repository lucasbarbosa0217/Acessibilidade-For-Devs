class PostCategoriesService {
  static async create(name) {
    const { data } = await HttpClient.api.post("/postCategories", {
      name,
    });

    return data;
  }

  static async readAll() {
    const { data } = await HttpClient.api.get("/postCategories");

    return data;
  }
}

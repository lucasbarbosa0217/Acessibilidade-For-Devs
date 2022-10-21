class PostsService {
  static async create(title, categoryId, content) {
    const { data } = await HttpClient.api.post("/posts", {
      title,
      categoryId,
      content,
    });

    return data;
  }

  static async readAll() {
    const { data } = await HttpClient.api.get("/posts");

    return data;
  }

  static async readById(postId) {
    const { data } = await HttpClient.api.get(`/posts/${postId}`);

    return data;
  }
}

class ForumPostsService {
  static async create(title, content) {
    const { data } = await HttpClient.api.post("/forum/posts", {
      title,
      content,
    });

    return data;
  }

  static async readAll() {
    const { data } = await HttpClient.api.get("/forum/posts");

    return data;
  }

  static async readById(forumPostId) {
    const { data } = await HttpClient.api.get(`/forum/posts/${forumPostId}`);

    return data;
  }

  static async readMe(){
    const { data } = await HttpClient.api.get(`/forum/posts/me`);
    return data;
  }
}

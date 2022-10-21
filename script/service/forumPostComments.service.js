class ForumPostCommentsService {
  static async create(forumPostId, content) {
    const { data } = await HttpClient.api.post(
      `/forum/${forumPostId}/comments`,
      {
        content,
      }
    );

    return data;
  }
}
